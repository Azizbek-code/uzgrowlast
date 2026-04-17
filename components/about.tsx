"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Eye, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count}
      {suffix}
    </div>
  );
}

export function About() {
  const { t } = useLanguage();
  const [currentAboutImage, setCurrentAboutImage] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // 6 Cloudinary images for about section slideshow
  const aboutBackgroundImages = [
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567592/20201201_105521_ugdege.jpg", // Injiniring
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567918/20201201_143010_eudwpq.jpg", // Injiniring 2
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469212/37_2_ggepkx.jpg", // Eski loyiha
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469212/32_2_n7x8lw.jpg", // Eski loyiha 2
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469212/38_shg9uf.jpg", // Eski loyiha 3
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468978/31_phdvd6.jpg", // Eski loyiha 4
  ];

  // Change image every 4 seconds for about section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAboutImage((prev) => (prev + 1) % aboutBackgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [aboutBackgroundImages.length]);

  const stats = [
    { value: 8, suffix: "+", label: t("about.experience") },
    { value: 2000, suffix: "+", label: t("about.projects") },
    { value: 50, suffix: "+", label: t("about.clients") },
    { value: 12, suffix: "+", label: t("about.countries") },
  ];

  const values = [
    t("about.values.0"),
    t("about.values.1"),
    t("about.values.2"),
  ];
  return (
    <section
      id="haqimizda"
      className="py-20 lg:py-32 overflow-hidden relative"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469050/IMG_5189_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_atdoz0.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Top Section with Video */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Slideshow */}
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-video rounded-3xl overflow-hidden relative">
              <img
                src={aboutBackgroundImages[currentAboutImage]}
                alt="About UZ GROW"
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-[#24B14B]/10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              {t("about.tagline")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#24B14B] mb-6 text-balance">
              {t("about.headline")}
            </h2>
            <p className="text-lg  leading-relaxed mb-8 text-[#24B14B]">
              {t("about.descriptionText")}
            </p>
            <Button size="lg" className="rounded-full px-8">
              {t("about.aboutUsButton")}
            </Button>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#24B14B]/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t("about.mission")}
            </h3>
            <p className="text-muted-foreground">{t("about.missionDesc")}</p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#24B14B]/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t("about.vision")}
            </h3>
            <p className="text-muted-foreground">{t("about.visionDesc")}</p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#24B14B]/10 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t("about.valuesTitle")}
            </h3>
            <p className="text-muted-foreground">{t("about.valuesAndRules.desc")}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {values.map((value: any, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[#24B14B]/10 text-primary rounded-full text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={`bg-[#24B14B] rounded-3xl p-8 md:p-12 transition-all duration-1000 transform ${
            isStatsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-foreground/70 mt-2 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

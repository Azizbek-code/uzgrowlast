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

  const stats = [
    { value: 4, suffix: "+", label: t("about.experience") },
    { value: 100, suffix: "+", label: t("about.projects") },
    { value: 50, suffix: "+", label: t("about.clients") },
    { value: 12, suffix: "+", label: t("about.countries") },
  ];

  const values = [
    t("about.values.0"),
    t("about.values.1"),
    t("about.values.2"),
    t("about.values.3"),
  ];
  return (
    <section
      id="haqimizda"
      className="py-20 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section with Video */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Video */}
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%2391bf65'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EUZ-GROW%3C/text%3E%3C/svg%3E"
              >
                <source
                  src="https://drive.google.com/file/d/1YjywKKQxbewA7auLFIp5MG3kQWqZr-uv/preview?loop=1&autoplay=1"
                  type="video/mp4"
                />
                Sizning brauzeringiz video qo'llab-quvvatlamaydi.
              </video>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/20 backdrop-blur-sm rounded-full p-6 transform transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-primary/10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Biz haqimizda
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              4 yildan ortiq kompaniya 3 ta mamlakatda sizning yoningizda
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              UZ-GROW — zamonaviy issiqxona qurilishi va agro-injiniring
              sohasida faoliyat yurituvchi kompaniya. Bizning maqsadimiz —
              O&apos;zbekistonda yuqori samaradorlikka ega, innovatsion va
              eksportbop issiqxona infratuzilmasini rivojlantirish.
            </p>
            <Button size="lg" className="rounded-full px-8">
              Biz haqimizda batafsil
            </Button>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Missiya</h3>
            <p className="text-muted-foreground">
              Mahalliy va xalqaro standartlarga mos, barqaror va rentabelli
              issiqxona loyihalarini amalga oshirish orqali mijozlar daromadini
              oshirish.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Vizyon</h3>
            <p className="text-muted-foreground">
              Markaziy Osiyoda yetakchi agro-injiniring kompaniyaga aylanish va
              zamonaviy issiqxonalarni eksport qilish.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Qadriyatlar
            </h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-3xl p-8 md:p-12">
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

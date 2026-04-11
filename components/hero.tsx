"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Download,
  Calculator,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t, tObj } = useLanguage();
  const slides = tObj("hero.slides");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // 10 Cloudinary images for hero background slideshow
  const backgroundImages = [
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469176/20201201_105259_q5us00.jpg", // Qozog'iston loyihasi
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/photo_2026-04-04_10-35-55_dvrnxd.jpg", // Tojikiston loyihasi
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567956/20210211_141225_yvl1wr.jpg", // Qirg'iziston loyihasi
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/IMG_5188_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_rmwd8l.jpg", // Turkmaniston loyihasi
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469177/20201023_075858_hcs7fb.jpg", // Ventilyatsiya
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469181/20201201_105435_hq3q9q.jpg", // Stelaj tizimi
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469051/photo_2026-04-04_10-35-53_kvt95v.jpg", // Samarqand loyihasi
    "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469047/IMG_5184_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_iuhwco.jpg", // Xalqaro loyiha
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="bosh-sahifa"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Image Slideshow Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImages[currentImage]}
          alt="Greenhouse background"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(1.1) contrast(1.1) saturate(1.2) blur(2px)",
            transform: "scale(1.05)",
          }}
        />
      </div>
      {/* Overlay with Blur */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/30 to-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/10">
            <span className="w-2 h-2 bg-[#24B14B] rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">
              {t("hero.tagline")}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8 text-balance">
            {t("hero.title")}
          </h1>

          {/* Slider Content */}
          <div className="relative min-h-[180px] mb-10">
            {Object.entries(slides).map(([key, slide], index) => (
              <div
                key={key}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <blockquote className="text-lg sm:text-xl md:text-2xl text-white/90 font-light italic mb-4 sm:mb-6 text-pretty">
                  &ldquo;{slide.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <span className="text-white font-bold text-base sm:text-lg">
                      {slide.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {slide.author}
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm">
                      {slide.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button
              size="lg"
              className="bg-[#24B14B] hover:bg-[#24B14B]/90 text-primary-foreground rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base w-full sm:w-auto"
              asChild
            >
              <Link href="#aloqa" className="gap-2">
                <Calculator className="w-5 h-5" />
                {t("hero.cta")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-amber-500 hover:bg-white hover:text-amber-600 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base w-full sm:w-auto"
              asChild
            >
              <Link
                href="https://drive.usercontent.google.com/download?id=1HErqszuF53VmZMGFVHg9mOFhM0y_G50L&export=download&authuser=0"
                className="gap-2"
              >
                <Download className="w-5 h-5" />
                {t("hero.downloadCatalog")}
              </Link>
            </Button>
          </div>

          {/* Slide Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {Object.values(slides).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-10 bg-[#24B14B]"
                      : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Discover Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <Link
            href={Object.values(slides)[currentSlide].link}
            className="group flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">
              {Object.values(slides)[currentSlide].cta}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "4+", label: t("hero.stats.experience") },
              { value: "100+", label: t("hero.stats.projects") },
              { value: "50+", label: t("hero.stats.specialists") },
              { value: "12+", label: t("hero.stats.regions") },
            ].map((stat, index) => (
              <div
                key={index}
                className="py-4 sm:py-5 px-2 sm:px-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

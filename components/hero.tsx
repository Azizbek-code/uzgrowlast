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

const slides = [
  {
    quote:
      "Biz har bir loyihani individual yondashuv bilan amalga oshiramiz va mijozlarimiz mamnuniyatini ta'minlaymiz.",
    author: "UZ-GROW jamoasi",
    role: "Agro-injiniring bo'yicha mutaxassislar",
    cta: "Turnkey issiqxonalar",
    link: "#xizmatlar",
  },
  {
    quote:
      "Zamonaviy texnologiyalar va tajribali mutaxassislar jamoasi bilan yuqori hosildorlikka erishishingizni kafolatlaymiz.",
    author: "Texnik bo'lim",
    role: "Loyihalash va qurish",
    cta: "Plastik issiqxonalar",
    link: "#xizmatlar",
  },
  {
    quote:
      "Energiya tejamkor va avtomatlashtirilgan tizimlar orqali xarajatlarni kamaytirib, daromadni oshiring.",
    author: "Innovatsiya markazi",
    role: "Zamonaviy yechimlar",
    cta: "Shisha issiqxonalar",
    link: "#xizmatlar",
  },
  {
    quote:
      "Loyihalashdan tortib to'liq ishga tushirishgacha - biz bilan hamkorlik qiling va natijaga erishing.",
    author: "Xizmatlar bo'limi",
    role: "Kompleks yechimlar",
    cta: "Jihozlar va tizimlar",
    link: "#texnologiya",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="bosh-sahifa"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src="https://res.cloudinary.com/dnqi0bdjk/video/upload/v1775302096/FeHK2XpaBormS6BB4RJX_r_jqxaZ8CwE_xchfqo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          style={{
            filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
            transform: "scale(1.05)",
          }}
        ></video>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">
              4+ yil tajriba - 100+ muvaffaqiyatli loyiha
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8 text-balance">
            Zamonaviy issiqxona texnologiyalari va{" "}
            <span className="text-primary">kompleks agro yechimlar</span>
          </h1>

          {/* Slider Content */}
          <div className="relative min-h-[180px] mb-10">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-white/90 font-light italic mb-6 text-pretty">
                  &ldquo;{slide.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <span className="text-white font-bold text-lg">
                      {slide.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{slide.author}</p>
                    <p className="text-white/60 text-sm">{slide.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base"
              asChild
            >
              <Link href="#aloqa" className="gap-2">
                <Calculator className="w-5 h-5" />
                Loyiha hisoblash
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/20 hover:border-white/70 rounded-full px-8 h-14 text-base bg-transparent backdrop-blur-sm"
              asChild
            >
              <Link href="#" className="gap-2">
                <Download className="w-5 h-5" />
                Katalog yuklab olish
              </Link>
            </Button>
          </div>

          {/* Slide Navigation */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-10 bg-primary"
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
            href={slides[currentSlide].link}
            className="group flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">
              {slides[currentSlide].cta}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "4+", label: "Yil tajriba" },
              { value: "100+", label: "Muvaffaqiyatli loyiha" },
              { value: "50+", label: "Mutaxassislar" },
              { value: "12+", label: "Viloyatda xizmat" },
            ].map((stat, index) => (
              <div key={index} className="py-5 px-4 text-center">
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

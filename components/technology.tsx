"use client";

import Image from "next/image";
import {
  Thermometer,
  Wind,
  Droplets,
  Lightbulb,
  Leaf,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const technologies = [
  {
    icon: Thermometer,
    titleKey: "technology.heating.title",
    descriptionKey: "technology.heating.description",
    color: "from-orange-500/20 to-red-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775570543/28_bnpx3z.jpg",
  },
  {
    icon: Wind,
    titleKey: "technology.ventilation.title",
    descriptionKey: "technology.ventilation.description",
    color: "from-blue-500/20 to-cyan-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469177/20201023_075858_hcs7fb.jpg",
  },
  {
    icon: Leaf,
    titleKey: "technology.shelving.title",
    descriptionKey: "technology.shelving.description",
    color: "from-green-500/20 to-emerald-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469181/20201201_105435_hq3q9q.jpg",
  },
  {
    icon: Lightbulb,
    titleKey: "technology.led.title",
    descriptionKey: "technology.led.description",
    color: "from-yellow-500/20 to-amber-500/20",
    image:
      "/images/1.jpg",
  },
  {
    icon: Droplets,
    titleKey: "technology.irrigation.title",
    descriptionKey: "technology.irrigation.description",
    color: "from-sky-500/20 to-blue-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/photo_2026-04-04_10-35-55_dvrnxd.jpg",
  },
  {
    icon: Cpu,
    titleKey: "technology.automation.title",
    descriptionKey: "technology.automation.description",
    color: "from-violet-500/20 to-purple-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567811/20201201_125915_z2qls3.jpg",
  },
];

export function Technology() {
  const { t } = useLanguage();
  return (
    <section
      id="texnologiya"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            {t("technology.title")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t("technology.subtitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("technology.description")}
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-video relative">
                <Image
                  src={tech.image}
                  alt={t(tech.titleKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <tech.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(tech.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(tech.descriptionKey)}
                </p>
              </div>

              {/* Background Gradient */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br",
                  tech.color,
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

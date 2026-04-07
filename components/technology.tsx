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

const technologies = [
  {
    icon: Thermometer,
    title: "Isitish tizimi",
    description:
      "Zamonaviy isitish tizimlari orqali optimal haroratni ta'minlash va energiya tejash.",
    color: "from-orange-500/20 to-red-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775570543/28_bnpx3z.jpg",
  },
  {
    icon: Wind,
    title: "Ventilyatsiya va sovutish",
    description:
      "Avtomatlashtirilgan ventilyatsiya va sovutish tizimlari yordamida iqlimni nazorat qilish.",
    color: "from-blue-500/20 to-cyan-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469177/20201023_075858_hcs7fb.jpg",
  },
  {
    icon: Leaf,
    title: "Stelaj tizimi",
    description:
      "Vertikal stelajlar orqali joydan samarali foydalanish va hosildorlikni oshirish.",
    color: "from-green-500/20 to-emerald-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469181/20201201_105435_hq3q9q.jpg",
  },
  {
    icon: Droplets,
    title: "Sug'orish tizimi",
    description:
      "Tomchilatib sug'orish va gidroponika tizimlari yordamida suvni 90% gacha tejash.",
    color: "from-sky-500/20 to-blue-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/photo_2026-04-04_10-35-55_dvrnxd.jpg",
  },
  {
    icon: Cpu,
    title: "Avtomatlashtirish",
    description:
      "IoT sensorlar va AI algoritmlari yordamida iqlimni avtomatik boshqarish.",
    color: "from-violet-500/20 to-purple-500/20",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567811/20201201_125915_z2qls3.jpg",
  },
];

export function Technology() {
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
            Texnologiya
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Zamonaviy jihozlar va tizimlar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Eng ilg&apos;or agro-texnologiyalar bilan ta&apos;minlaymiz
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
                  alt={tech.title}
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
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
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

"use client";

import { useState } from "react";
import {
  Building2,
  Settings,
  Cpu,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Issiqxona qurish",
    shortDesc: "Loyihalashdan boshlab to'liq ishga tushirishgacha.",
    description:
      "Biz to'liq sikl asosida issiqxona quramiz. Natija: energiya tejamkor, yuqori hosildorlikka ega zamonaviy issiqxona.",
    features: [
      "Metall konstruksiya",
      "Polikarbonat yoki shisha qoplama",
      "Tomchilatib sug'orish",
      "Avtomatlashtirilgan boshqaruv",
    ],
    image:
      "https://certhon.com/wp-content/uploads/2021/10/turnkeygreenhouses.jpg",
  },
  {
    icon: Settings,
    title: "Agro-injiniring va loyihalash",
    shortDesc: "Texnik chizma, klimat hisob-kitobi, konstruktiv yechimlar.",
    description:
      "Biz har bir kvadrat metrni rentabelli ishlashini ta'minlaymiz. Har bir loyiha individual hisoblanadi.",
    features: [
      "Hudud iqlimi asosida hisoblanadi",
      "Shamol va yuklama tahlili",
      "Ekin turiga moslashtiriladi",
      "3D modellashtirish",
      "Texnik hujjatlar",
    ],
    image: "/services/engineering.jpg",
  },
  {
    icon: Cpu,
    title: "Zamonaviy jihozlar",
    shortDesc: "Isitish, sovutish, tomchilatib sug'orish, avtomatlashtirish.",
    description:
      "Eng zamonaviy va energiya tejamkor jihozlar bilan ta'minlaymiz.",
    features: [
      "Isitish tizimi",
      "Ventilyatsiya va sovutish",
      "CO2 tizimi",
      "LED grow lights",
      "O'g'itlash va sug'orish tizimi",
    ],
    image: "/services/equipment.jpg",
  },
  {
    icon: Users,
    title: "Agro-konsalting",
    shortDesc: "Ekin tanlash, hosildorlikni oshirish, eksport strategiyasi.",
    description:
      "Biz faqat qurmaymiz - natijaga olib chiqamiz. Rentabellik tahlili va biznes model ishlab chiqiladi.",
    features: [
      "Qulupnay (stellaq tizim)",
      "Pomidor yetishtirish",
      "Bodring yetishtirish",
      "Eksport yo'nalishi",
      "Biznes model yaratish",
    ],
    image: "/services/consulting.jpg",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="xizmatlar" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Xizmatlar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Nima qilamiz?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            To&apos;liq sikl agro-injiniring yechimlari - loyihalashdan to
            tayyor hosilgacha
          </p>
        </div>

        {/* Services Interactive Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Service Tabs */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-300",
                  activeService === index
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card hover:bg-card/80 border border-border",
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                      activeService === index ? "bg-white/20" : "bg-primary/10",
                    )}
                  >
                    <service.icon
                      className={cn(
                        "w-6 h-6",
                        activeService === index ? "text-white" : "text-primary",
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "text-lg font-semibold mb-1",
                        activeService === index
                          ? "text-white"
                          : "text-foreground",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm",
                        activeService === index
                          ? "text-white/80"
                          : "text-muted-foreground",
                      )}
                    >
                      {service.shortDesc}
                    </p>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-5 h-5 transition-transform shrink-0",
                      activeService === index
                        ? "text-white translate-x-1"
                        : "text-muted-foreground",
                    )}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg">
            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {services[activeService].description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

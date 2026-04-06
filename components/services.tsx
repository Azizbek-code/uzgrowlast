"use client";

import React, { useState } from "react";
import {
  Building2,
  Settings,
  Cpu,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t("services.engineering"),
      shortDesc: t("services.engineeringDesc"),
      description: t("services.engineeringFullDesc"),
      features: [
        t("services.engineeringFeatures.0"),
        t("services.engineeringFeatures.1"),
        t("services.engineeringFeatures.2"),
        t("services.engineeringFeatures.3"),
      ],
      image:
        "https://certhon.com/wp-content/uploads/2021/10/turnkeygreenhouses.jpg",
    },
    {
      icon: Settings,
      title: t("services.equipment"),
      shortDesc: t("services.equipmentDesc"),
      description: t("services.equipmentFullDesc"),
      features: [
        t("services.equipmentFeatures.0"),
        t("services.equipmentFeatures.1"),
        t("services.equipmentFeatures.2"),
        t("services.equipmentFeatures.3"),
      ],
      image:
        "https://m.media-amazon.com/images/I/51e8xMOkJQL._AC_SR290,290_.jpg",
    },
    {
      icon: Cpu,
      title: t("services.consulting"),
      shortDesc: t("services.consultingDesc"),
      description: t("services.consultingFullDesc"),
      features: [
        t("services.consultingFeatures.0"),
        t("services.consultingFeatures.1"),
        t("services.consultingFeatures.2"),
        t("services.consultingFeatures.3"),
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7Cgq6dpL4s9x9ipW3yZ5Zuxc68DF9vlBlg&s",
    },
  ];

  return (
    <section id="xizmatlar" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            {t("services.title")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t("services.subtitle")}
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeService === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-background text-foreground hover:bg-muted border border-border",
              )}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary/10" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {React.createElement(services[activeService].icon, {
                    className: "w-6 h-6 text-primary",
                  })}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {services[activeService].description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {services[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#aloqa"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                {t("common.contact")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {React.createElement(service.icon, {
                    className: "w-6 h-6 text-primary",
                  })}
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h4>
              </div>
              <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
              <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                <span className="text-sm font-medium">
                  {t("common.readMore")}
                </span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

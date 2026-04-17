"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  Factory,
  ArrowUp,
  CheckCircle,
  ArrowRight,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function GreenhouseTypes() {
  const { t } = useLanguage();

  const greenhouseTypes = [
    {
      id: 4,
      title: t("greenhouse.mini.title"),
      description: t("greenhouse.mini.description"),
      images: [
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776423098/5_m9wxqk.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776423097/6_xllnrd.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776423096/4_gbt4yc.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776423094/2_pgjqrd.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776423093/3_zln8rx.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776423090/1_nwlemk.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422645/ss_kkvphf.png"
      ],
      icon: <Home className="h-6 w-6" />,
      features: [
        t("greenhouse.mini.features.0"),
        t("greenhouse.mini.features.1"),
        t("greenhouse.mini.features.2"),
      ],
      complexity: t("greenhouse.mini.complexity"),
      durability: t("greenhouse.mini.durability"),
      cost: t("greenhouse.mini.cost"),
      maintenance: t("greenhouse.mini.maintenance"),
      color: "bg-yellow-500",
    },
    {
      id: 5,
      title: t("greenhouse.oddiy.title"),
      description: t("greenhouse.oddiy.description"),
      images: [
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422638/IMG_0976_2_i27xqb.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422638/IMG_0976_2_i27xqb.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422638/IMG_0976_2_i27xqb.jpg",
      ],
      icon: <Factory className="h-6 w-6" />,
      features: [
        t("greenhouse.oddiy.features.0"),
        t("greenhouse.oddiy.features.1"),
        t("greenhouse.oddiy.features.2"),
      ],
      complexity: t("greenhouse.oddiy.complexity"),
      durability: t("greenhouse.oddiy.durability"),
      cost: t("greenhouse.oddiy.cost"),
      maintenance: t("greenhouse.oddiy.maintenance"),
      color: "bg-gray-500",
    },
    {
      id: 6,
      title: t("greenhouse.gektar.title"),
      description: t("greenhouse.gektar.description"),
      images: [
        "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469046/IMG_4551_vkvzkh.jpg",
        "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468971/IMG_3534_g9l06y.jpg",
        "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567922/20201201_145045_k4litc.jpg",
      ],
      icon: <ArrowUp className="h-6 w-6" />,
      features: [
        t("greenhouse.gektar.features.0"),
        t("greenhouse.gektar.features.1"),
        t("greenhouse.gektar.features.2"),
      ],
      complexity: t("greenhouse.gektar.complexity"),
      durability: t("greenhouse.gektar.durability"),
      cost: t("greenhouse.gektar.cost"),
      maintenance: t("greenhouse.gektar.maintenance"),
      color: "bg-indigo-500",
    },
    {
      id: 7,
      title: t("greenhouse.polikarbanat.title"),
      description: t("greenhouse.polikarbanat.description"),
      images: [
        "/images/ss.png",
        "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567922/20201201_145045_k4litc.jpg",
        "/images/1.jpg",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422629/IMG_1001_vft7io.jpg"
      ],
      icon: <Users className="h-6 w-6" />,
      features: [
        t("greenhouse.polikarbanat.features.0"),
        t("greenhouse.polikarbanat.features.1"),
        t("greenhouse.polikarbanat.features.2"),
      ],
      complexity: t("greenhouse.polikarbanat.complexity"),
      durability: t("greenhouse.polikarbanat.durability"),
      cost: t("greenhouse.polikarbanat.cost"),
      maintenance: t("greenhouse.polikarbanat.maintenance"),
      color: "bg-red-500",
    },
    {
      id: 9,
      title: t("greenhouse.vertical.title"),
      description: t("greenhouse.vertical.description"),
      images: [
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422791/Screenshot_77_up8uxh.png",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422795/Screenshot_88_bukg6e.png",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422795/Screenshot_88_bukg6e.png",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422773/jgfgkjjhk_p_q4x7bl.png",
        "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422772/Screenshot_1_xcgci6.png"
      ],
      icon: <ArrowUp className="h-6 w-6" />,
      features: [
        t("greenhouse.vertical.features.0"),
        t("greenhouse.vertical.features.1"),
        t("greenhouse.vertical.features.2"),
      ],
      complexity: t("greenhouse.vertical.complexity"),
      durability: t("greenhouse.vertical.durability"),
      cost: t("greenhouse.vertical.cost"),
      maintenance: t("greenhouse.vertical.maintenance"),
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.png"
              alt="UZ GROW Logo"
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("greenhouse.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("greenhouse.description")}
          </p>
        </div>

        {/* Greenhouse Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {greenhouseTypes.map((type) => (
            <Card
              key={type.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {type.images.map((imgSrc, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={imgSrc}
                            alt={`${type.title} ${index + 1}`}
                            className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
                  </Carousel>
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <div
                      className={`${type.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-md`}
                    >
                      {type.icon}
                      {type.complexity}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl flex items-center gap-2 mb-3">
                  <div className={`${type.color} text-white p-2 rounded-lg`}>
                    {type.icon}
                  </div>
                  {type.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {type.description}
                </CardDescription>
                <div className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Xususiyatlar
                    </h4>
                    <div className="space-y-2">
                      {type.features.map((feature: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}

                  {/* CTA Button */}
                  <Link href="/aloqa">
                    <Button className="w-full" variant="outline">
                      {t("common.readMore")}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

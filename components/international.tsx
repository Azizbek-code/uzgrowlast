"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Plane, Users, Handshake } from "lucide-react";

const internationalProjects = [
  {
    id: 1,
    title: "Qozog'iston Avtomatlashtirish Hamkorligi",
    description:
      "Markaziy Osiyo mamlakatlari o'rtasida qayta tiklanuvchi energiya manbalarini rivojlantirish bo'yicha qo'shma loyiha",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469176/20201201_105259_q5us00.jpgg",
    country: "Qozog'iston",
    status: "Faol",
    icon: <Globe className="h-5 w-5" />,
    budget: "$2.5M",
    timeline: "2024-2026",
  },
  {
    id: 2,
    title: "Tojikiston Sug'orish Tizimi",
    description:
      "Zamonaviy sug'orish texnologiyalarini joriy etish orqali qishloq xo'jaligini rivojlantirish dasturi",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/photo_2026-04-04_10-35-55_dvrnxd.jpg",
    country: "Tojikiston",
    status: "Jarayonda",
    icon: <Plane className="h-5 w-5" />,
    budget: "$1.8M",
    timeline: "2024-2025",
  },
  {
    id: 3,
    title: "Qirg'iziston Issiqxona",
    description:
      "Raqamli ta'lim platformalarini yaratish va o'qituvchilar malakasini oshirish bo'yicha xalqaro loyiha",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567956/20210211_141225_yvl1wr.jpg",
    country: "Qirg'iziston",
    status: "Rejalashtirilgan",
    icon: <Users className="h-5 w-5" />,
    budget: "$1.2M",
    timeline: "2025-2027",
  },
  {
    id: 4,
    title: "Turkmaniston Stelaj Tizimi",
    description:
      "Xalqaro transport yo'llarini rivojlantirish va savdo aloqalarini kengaytirish bo'yicha strategik loyiha",
    image:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/IMG_5188_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_rmwd8l.jpg",
    country: "Turkmaniston",
    status: "Faol",
    icon: <Handshake className="h-5 w-5" />,
    budget: "$3.1M",
    timeline: "2024-2028",
  },
];

export function International() {
  return (
    <section className="py-20 bg-linear-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.png"
              alt="UZ-GROW Logo"
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Xalqaro Hamkorlik
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Markaziy Osiyo mamlakatlari bilan olib borilayotgan qo'shma
            loyihalar va xalqaro hamkorlik dasturlari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">Mamlakatlar</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Handshake className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Loyihalar</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
            <p className="text-gray-600">Foydalanuvchilar</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Plane className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$25M+</h3>
            <p className="text-gray-600">Investitsiyalar</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internationalProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      project.status === "Faol"
                        ? "default"
                        : project.status === "Jarayonda"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="text-blue-600">{project.icon}</div>
                    <span className="text-sm font-medium text-gray-500">
                      {project.country}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-green-600">
                    {project.budget}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.timeline}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Batafsil →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

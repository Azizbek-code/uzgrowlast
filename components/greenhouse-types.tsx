"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  Glasses,
  Shield,
  Circle,
  Factory,
  Droplets,
  ArrowUp,
  CheckCircle,
  DollarSign,
  Thermometer,
  Zap,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function GreenhouseTypes() {
  const { t } = useLanguage();

  const greenhouseTypes = [
    {
      id: 1,
      title: t("greenhouse.glass.title"),
      description: t("greenhouse.glass.description"),
      image: "/images/2.jpg",
      icon: <Glasses className="h-6 w-6" />,
      features: [
        t("greenhouse.glass.features.0"),
        t("greenhouse.glass.features.1"),
        t("greenhouse.glass.features.2"),
      ],
      complexity: t("greenhouse.glass.complexity"),
      durability: t("greenhouse.glass.durability"),
      cost: t("greenhouse.glass.cost"),
      maintenance: t("greenhouse.glass.maintenance"),
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: t("greenhouse.polycarbonate.title"),
      description: t("greenhouse.polycarbonate.description"),
      image: "/images/3.jpg",
      icon: <Shield className="h-6 w-6" />,
      features: [
        t("greenhouse.polycarbonate.features.0"),
        t("greenhouse.polycarbonate.features.1"),
        t("greenhouse.polycarbonate.features.2"),
      ],
      complexity: t("greenhouse.polycarbonate.complexity"),
      durability: t("greenhouse.polycarbonate.durability"),
      cost: t("greenhouse.polycarbonate.cost"),
      maintenance: t("greenhouse.polycarbonate.maintenance"),
      color: "bg-green-500",
    },
    {
      id: 3,
      title: t("greenhouse.tunnel.title"),
      description: t("greenhouse.tunnel.description"),
      image: "/images/4.jpg",
      icon: <Circle className="h-6 w-6" />,
      features: [
        t("greenhouse.tunnel.features.0"),
        t("greenhouse.tunnel.features.1"),
        t("greenhouse.tunnel.features.2"),
      ],
      complexity: t("greenhouse.tunnel.complexity"),
      durability: t("greenhouse.tunnel.durability"),
      cost: t("greenhouse.tunnel.cost"),
      maintenance: t("greenhouse.tunnel.maintenance"),
      color: "bg-orange-500",
    },
    {
      id: 4,
      title: t("greenhouse.industrial.title"),
      description: t("greenhouse.industrial.description"),
      image: "/images/5.jpg",
      icon: <Factory className="h-6 w-6" />,
      features: [
        t("greenhouse.industrial.features.0"),
        t("greenhouse.industrial.features.1"),
        t("greenhouse.industrial.features.2"),
      ],
      complexity: t("greenhouse.industrial.complexity"),
      durability: t("greenhouse.industrial.durability"),
      cost: t("greenhouse.industrial.cost"),
      maintenance: t("greenhouse.industrial.maintenance"),
      color: "bg-purple-500",
    },
    {
      id: 5,
      title: t("greenhouse.hydroponic.title"),
      description: t("greenhouse.hydroponic.description"),
      image: "/images/6.jpg",
      icon: <Droplets className="h-6 w-6" />,
      features: [
        t("greenhouse.hydroponic.features.0"),
        t("greenhouse.hydroponic.features.1"),
        t("greenhouse.hydroponic.features.2"),
      ],
      complexity: t("greenhouse.hydroponic.complexity"),
      durability: t("greenhouse.hydroponic.durability"),
      cost: t("greenhouse.hydroponic.cost"),
      maintenance: t("greenhouse.hydroponic.maintenance"),
      color: "bg-cyan-500",
    },
    {
      id: 6,
      title: t("greenhouse.vertical.title"),
      description: t("greenhouse.vertical.description"),
      image: "/images/7.jpg",
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
      color: "bg-pink-500",
    },
  ];

  const comparisonData = {
    headers: [
      t("greenhouse.comparison.material"),
      t("greenhouse.comparison.light"),
      t("greenhouse.comparison.durability"),
      t("greenhouse.comparison.cost"),
      t("greenhouse.comparison.maintenance"),
      t("greenhouse.comparison.serviceLife"),
    ],
    rows: [
      {
        type: t("greenhouse.glass.title"),
        data: [
          "Shisha",
          "90-95%",
          t("greenhouse.glass.durability"),
          t("greenhouse.glass.cost"),
          t("greenhouse.glass.maintenance"),
          "20+ yil",
        ],
      },
      {
        type: t("greenhouse.polycarbonate.title"),
        data: [
          "Polikarbonat",
          "80-85%",
          t("greenhouse.polycarbonate.durability"),
          t("greenhouse.polycarbonate.cost"),
          t("greenhouse.polycarbonate.maintenance"),
          "10-15 yil",
        ],
      },
      {
        type: t("greenhouse.tunnel.title"),
        data: [
          "Polietilen",
          "70-80%",
          t("greenhouse.tunnel.durability"),
          t("greenhouse.tunnel.cost"),
          t("greenhouse.tunnel.maintenance"),
          "5-8 yil",
        ],
      },
      {
        type: t("greenhouse.industrial.title"),
        data: [
          "Metal/Polikarbonat",
          "85-90%",
          t("greenhouse.industrial.durability"),
          t("greenhouse.industrial.cost"),
          t("greenhouse.industrial.maintenance"),
          "25+ yil",
        ],
      },
      {
        type: t("greenhouse.hydroponic.title"),
        data: [
          "Special system",
          "95-100%",
          t("greenhouse.hydroponic.durability"),
          t("greenhouse.hydroponic.cost"),
          t("greenhouse.hydroponic.maintenance"),
          "15-20 yil",
        ],
      },
      {
        type: t("greenhouse.vertical.title"),
        data: [
          "Modular system",
          "90-95%",
          t("greenhouse.vertical.durability"),
          t("greenhouse.vertical.cost"),
          t("greenhouse.vertical.maintenance"),
          "10-15 yil",
        ],
      },
    ],
  };

  return (
    <section className="py-20 bg-linear-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.png"
              alt="UZ-GROW Logo"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {greenhouseTypes.map((type) => (
            <Card
              key={type.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`${type.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}
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
                      {type.features.map((feature, index) => (
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <Thermometer className="h-4 w-4 text-red-600 mx-auto mb-1" />
                      <p className="text-xs font-medium">{type.complexity}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <Zap className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs font-medium">{type.durability}</p>
                    </div>
                  </div>

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

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t("greenhouse.comparison.title")}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    {t("greenhouse.comparison.material")}
                  </th>
                  {comparisonData.headers.map((header, index) => (
                    <th
                      key={index}
                      className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                      {row.type}
                    </td>
                    {row.data.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-200 px-4 py-3 text-center text-gray-600"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selection Guide */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t("greenhouse.guide.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                {t("greenhouse.guide.beginners")}
              </h4>
              <p className="text-sm opacity-90">
                {t("greenhouse.guide.beginnersDesc")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                {t("greenhouse.guide.professionals")}
              </h4>
              <p className="text-sm opacity-90">
                {t("greenhouse.guide.professionalsDesc")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Factory className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                {t("greenhouse.guide.business")}
              </h4>
              <p className="text-sm opacity-90">
                {t("greenhouse.guide.businessDesc")}
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Star className="h-4 w-4 mr-2" />
            {t("greenhouse.guide.consult")}
          </Button>
        </div>
      </div>
    </section>
  );
}

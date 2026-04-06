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

const greenhouseTypes = [
  {
    id: 1,
    title: "Shisha issiqxona",
    description:
      "Yorug'likni yaxshi o'tkazadi, mustahkam, lekin qurilish xarajati yuqori.",
    image: "/images/2.jpg",
    icon: <Glasses className="h-6 w-6" />,
    features: [
      "Maksimal yorug'lik o'tkazuvchanlik",
      "Uzoq muddatli foydalanish",
      "Yuqori estetik ko'rinish",
      "Yaxshi izolyatsiya",
    ],
    advantages: [
      "Uzoq foydalanish muddati",
      "Yorug'lik yaxshi",
      "Ob-havoga chidamli",
    ],
    disadvantages: ["Yuqori narx", "Og'ir konstruktsiya", "Qiyin ta'mirlash"],
    complexity: "Yuqori",
    durability: "20+ yil",
    bestFor: "Professionallar, dekorativ maqsadlar",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Polikarbonat issiqxona",
    description:
      "Issiqlikni yaxshi ushlab turadi va bardoshli materialdan tayyorlanadi.",
    image: "/images/3.jpg",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "Yuqori issiqlik izolyatsiyasi",
      "Yengil va mustahkam",
      "UV nurlaridan himoya",
      "Zamonaviy ko'rinish",
    ],
    advantages: [
      "Issiqlikni yaxshi saqlaydi",
      "Uzoq xizmat qiladi",
      "Oson yig'ish",
    ],
    disadvantages: ["O'rtacha narx", "Sirlanishi mumkin", "Cheklangan ranglar"],
    complexity: "O'rtacha",
    durability: "10-15 yil",
    bestFor: "O'rtacha kattalikdagi xo'jaliklar",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Sanoat issiqxonasi",
    description:
      "Katta hajmli, avtomatlashtirilgan tizimlarga ega, professional yetishtirish uchun mo'ljallangan.",
    image: "/images/7.jpg",
    icon: <Factory className="h-6 w-6" />,
    features: [
      "Avtomatlashtirilgan tizimlar",
      "Katta hajm",
      "Iqlim nazorati",
      "Professional uskunalar",
    ],
    advantages: [
      "Yuqori samaradorlik",
      "Avtomatlashtirish",
      "Yil bo'yi ishlash",
    ],
    disadvantages: ["Juda qimmat", "Murakkab", "Ko'p energiya sarfi"],
    complexity: "Juda yuqori",
    durability: "25+ yil",
    bestFor: "Sanoat miqiyosi, katta korxonalar",
    color: "bg-red-500",
  },
  {
    id: 4,
    title: "Gidroponik issiqxona",
    description:
      "Tuproqsiz, suv va ozuqa eritmalari orqali o'simlik yetishtiriladi.",
    image: "/images/8.jpg",
    icon: <Droplets className="h-6 w-6" />,
    features: [
      "Tuproqsiz yetishtirish",
      "Suv tejash",
      "Tez o'sish",
      "Toza mahsulot",
    ],
    advantages: ["Yil bo'yi hosil", "Suv tejash", "Kam kasalliklar"],
    disadvantages: [
      "Yuqori texnologiya",
      "Kuniga to'g'ri kelish",
      "Qimmat uskunalar",
    ],
    complexity: "Yuqori",
    durability: "15-20 yil",
    bestFor: "Zamonaviy agrobiznes, shahar atrofi",
    color: "bg-cyan-500",
  },
  {
    id: 5,
    title: "Vertikal issiqxona",
    description:
      "Joyni tejash uchun o'simliklar qavatma-qavat joylashtiriladi.",
    image: "/images/24.jpg",
    icon: <ArrowUp className="h-6 w-6" />,
    features: [
      "Vertikal joylashuv",
      "Kam joy talabi",
      "Yuqori zichlik",
      "Zamonaviy texnologiya",
    ],
    advantages: [
      "Joy tejash",
      "Yuqori hosildorlik",
      "Shahar sharoitida ishlash",
    ],
    disadvantages: ["Murakkab tizim", "Yuqori narx", "Doimiy nazorat kerak"],
    complexity: "Yuqori",
    durability: "15-20 yil",
    bestFor: "Shahar atrofi, joy cheklangan hududlar",
    color: "bg-emerald-500",
  },
];

const comparisonTable = [
  {
    type: "Murakkablik",
    shisha: "Yuqori",
    polikarbonat: "O'rtacha",
    sanoat: "Juda yuqori",
    gidroponik: "Yuqori",
    vertikal: "Yuqori",
  },
  {
    type: "Xizmat muddati",
    shisha: "20+ yil",
    polikarbonat: "10-15 yil",
    sanoat: "25+ yil",
    gidroponik: "15-20 yil",
    vertikal: "10-15 yil",
  },
];

export function GreenhouseTypes() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Issiqxona Turlari
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Har bir ehtiyojga mos keladigan 7 xil issiqxona turi. Siz uchun
            to'g'ri tanlovni qilishga yordam beramiz.
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {greenhouseTypes.map((type) => (
            <Card
              key={type.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
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
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div className={`${type.color} text-white p-2 rounded-lg`}>
                    {type.icon}
                  </div>
                  {type.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">
                      Xususiyatlari:
                    </h4>
                    <div className="space-y-1">
                      {type.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Advantages */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">
                      Afzalliklari:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {type.advantages.map((advantage, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {advantage}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <Zap className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs font-medium">{type.complexity}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <Thermometer className="h-4 w-4 text-red-600 mx-auto mb-1" />
                      <p className="text-xs font-medium">{type.durability}</p>
                    </div>
                  </div>

                  <Link href="/aloqa">
                    <Button className="w-full" variant="outline">
                      Batafsil ma'lumot
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
            Qiyosiy Jadvallar
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Xususiyat
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Shisha
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Polikarbonat
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Sanoat
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Gidroponik
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Vertikal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      {row.shisha}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      {row.polikarbonat}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      {row.sanoat}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      {row.gidroponik}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      {row.vertikal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selection Guide */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            To'g'ri Issiqxonini Qanday Tanlash?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Boshlanuvchilar uchun</h4>
              <p className="text-sm opacity-90">
                Oddiy yoki Tunnel issiqxona - arzon va oson boshqariladi
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Professionallar uchun</h4>
              <p className="text-sm opacity-90">
                Polikarbonat yoki Shisha - uzoq muddatli va samarali
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Factory className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Biznes uchun</h4>
              <p className="text-sm opacity-90">
                Sanoat, Gidroponik yoki Vertikal - maksimal samaradorlik
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Star className="h-4 w-4 mr-2" />
            Mutaxassis bilan maslahatlashish
          </Button>
        </div>
      </div>
    </section>
  );
}

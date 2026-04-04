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
import {
  Users,
  Video,
  Globe,
  Target,
  TrendingUp,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  MessageCircle,
  Music,
  CheckCircle,
  Award,
  BarChart3,
  Zap,
  Heart,
} from "lucide-react";

const platforms = [
  {
    name: "YouTube",
    icon: <Youtube className="h-6 w-6" />,
    subscribers: "117k",
    color: "bg-red-500",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    subscribers: "59.5k",
    color: "bg-pink-500",
  },
  {
    name: "TikTok",
    icon: <Music className="h-6 w-6" />,
    subscribers: "16k",
    color: "bg-black",
  },
  {
    name: "Telegram",
    icon: <MessageCircle className="h-6 w-6" />,
    subscribers: "1.5k",
    color: "bg-blue-500",
  },
];

const geographicCoverage = [
  {
    country: "O'zbekiston",
    description: "Barcha viloyatlar, asosan qishloq joylarda faol auditoriya",
    flag: "🇺🇿",
  },
  {
    country: "Qozog'iston",
    description: "Olmaota, Shymkent, Astana",
    flag: "🇰🇿",
  },
  {
    country: "Qirg'iston",
    description: "Video kontentga qiziqish katta",
    flag: "🇰🇬",
  },
  {
    country: "Rossiya",
    description: "Agrosanoat bilan bog'liq diasporalar",
    flag: "🇷🇺",
  },
  {
    country: "Tojikiston",
    description: "Texnologik intervyularga talab oshmoqda",
    flag: "🇹🇯",
  },
];

const partnershipPlans = [
  {
    name: "STANDART",
    price: "$4,500",
    duration: "3 OY",
    videos: 4,
    posts: 12,
    features: ["Stories, izohlar, statistika"],
    color: "border-blue-500",
  },
  {
    name: "PREMIUM",
    price: "$7,200",
    duration: "6 OY",
    videos: 8,
    posts: 24,
    features: ["Banner, pinned post, hisobot"],
    color: "border-purple-500",
  },
  {
    name: "VIP",
    price: "$12,000",
    duration: "12 OY",
    videos: 14,
    posts: 38,
    features: ["To'liq PR yordam, media-reja"],
    color: "border-yellow-500",
  },
];

const foreignPartners = [
  {
    name: "Dunyodagi Qishloq xo'jaligi",
    description:
      "eng kuchli agroekspo o'tkazadigan sohasida xalqaro agroekspolar kompaniyalardan biri!",
    partnership: "2022-yildan buyon hamkorlikda",
    logo: "/images/logo.png",
  },
];

export function AssoDesignMedia() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AssoDesign Media Hamkorlik Taklifi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Biz kimmiz - Men — Rustamjon Rahmonov, O'zbekistonlik bloger,
            agrofaol va "UzGrow" agroplatformasi asoschisidan media hamkorlik
            taklifi
          </p>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bizning Professionalligimiz
            </h2>
            <div className="space-y-6">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Real sektorni bilish
                      </h3>
                      <p className="text-gray-600">
                        Agrosektor bilan 8+ yillik bevosita tajriba. Fermerlar,
                        eksportyorlar, ishlab chiqaruvchilar bilan
                        to'g'ridan-to'g'ri ishlash
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Ishonchga asoslangan brend
                      </h3>
                      <p className="text-gray-600">
                        Halollik, amaliyotga asoslangan tahlil, real hayot
                        voqealari sharhi. Brendlar va iste'molchilar o'rtasida
                        ishonch ko'prigi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Kuchli auditoriyaga ega bo'lish
                      </h3>
                      <p className="text-gray-600">
                        150,000+ obunachilar, 1.5-3 million oylik ko'rishlar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Statistikalarimiz
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {platforms.map((platform) => (
                <Card key={platform.name} className="text-center">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center text-white mx-auto mb-3`}
                    >
                      {platform.icon}
                    </div>
                    <h3 className="font-bold text-lg">{platform.name}</h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {platform.subscribers}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">
                  Umumiy auditoriya qamrovi
                </h3>
                <p className="text-3xl font-bold text-blue-600">150,000+</p>
                <p className="text-gray-600">Obunachilar</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Umumiy Auditoriya
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Yosh chegarasi</h3>
                <p className="text-2xl font-bold">25-55</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-2">Jinsi</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Ayollar</span>
                    <span className="font-bold">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Erkaklar</span>
                    <span className="font-bold">13%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Mintaqalar</h3>
                <p className="text-sm text-gray-600">
                  O'zbekiston, Rossiya, Qozog'iston, Qirg'iston, Tojikiston
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Geographic Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Geografik Qamrov
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geographicCoverage.map((country) => (
              <Card
                key={country.country}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{country.flag}</span>
                    <h3 className="font-bold text-lg">{country.country}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{country.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Reklama Tariflari
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`border-2 ${plan.color} hover:shadow-xl transition-shadow`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">
                    {plan.price}
                  </div>
                  <p className="text-gray-600">{plan.duration}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Video:</span>
                      <span className="font-bold">{plan.videos} ta</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Post:</span>
                      <span className="font-bold">{plan.posts} ta</span>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Imkoniyatlar:</h4>
                      {plan.features.map((feature, index) => (
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Foreign Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Xorijiy Hamkorlar
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {foreignPartners.map((partner) => (
              <Card
                key={partner.name}
                className="bg-gradient-to-r from-blue-50 to-purple-50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-xl mb-2">{partner.name}</h3>
                      <p className="text-gray-600 mb-3">
                        {partner.description}
                      </p>
                      <div className="flex items-center gap-2 text-green-600">
                        <Award className="h-5 w-5" />
                        <span className="font-medium">
                          {partner.partnership}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Biz Bilan Bog'lanish</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 mb-2" />
              <a href="https://taplink.cc/uzgrow" className="hover:underline">
                taplink.cc/uzgrow
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-2" />
              <span>uzgrow@gmail.com</span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-2" />
              <span>+998 88 435-23-13</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-2" />
              <span>Toshkent, Rayhona Ko'chasi, 107-uy</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Phone className="h-4 w-4 mr-2" />
              Hoziroq Qo'ng'iroq Qiling
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Mail className="h-4 w-4 mr-2" />
              Bepul Konsultatsiya
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            "Bizga hoziroq qo'ng'iroq qiling va bepul konsultatsiya oling!"
          </p>
          <p className="text-sm text-gray-500">Hurmat bilan, UzGrow jamoasi!</p>
        </div>
      </div>
    </section>
  );
}

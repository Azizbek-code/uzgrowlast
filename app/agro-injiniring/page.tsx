import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Zap,
  Droplets,
  Thermometer,
  Wind,
  Database,
  Cloud,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

export const metadata = {
  title: "Agro-injiniring - UZ-GROW | Zamonaviy qishloq xo'jaligi yechimlari",
  description:
    "UZ-GROW agro-injiniring xizmatlari. Zamonaviy qishloq xo'jaligi texnologiyalari, avtomatlashtirish tizimlari va samarali yechimlar.",
  keywords:
    "UZ-GROW agro-injiniring, qishloq xo'jaligi texnologiyalari, avtomatlashtirish, gidroponik, issiqxona texnologiyalari",
  openGraph: {
    title: "Agro-injiniring - UZ-GROW | Zamonaviy qishloq xo'jaligi yechimlari",
    description:
      "UZ-GROW agro-injiniring xizmatlari. Zamonaviy qishloq xo'jaligi texnologiyalari va avtomatlashtirish tizimlari.",
    images: ["/images/logo.png"],
  },
};

const agroServices = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Avtomatlashtirish tizimlari",
    description:
      "Issiqxonalarni to'liq avtomatlashtirish, iqlim nazorati va sug'orish tizimlari",
    features: [
      "Smart Climate Control",
      "Auto Irrigation",
      "Remote Monitoring",
      "Data Analytics",
    ],
    color: "bg-blue-500",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Gidroponik yechimlar",
    description:
      "Tuproqsiz ekin yetishtirish texnologiyalari va suv tejash tizimlari",
    features: [
      "Hydroponic Systems",
      "Nutrient Management",
      "Water Recycling",
      "LED Lighting",
    ],
    color: "bg-cyan-500",
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Iqlim nazorati",
    description:
      "Harorat, namlik va stelaj tizimlarini avtomatik nazorat qilish tizimlari",
    features: [
      "Temperature Control",
      "Humidity Management",
      "Shelving Systems",
      "Ventilation",
    ],
    color: "bg-orange-500",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Ma'lumotlar analitika",
    description:
      "Ekinlar holatini kuzatish va hosildorlikni bashorat qilish tizimlari",
    features: [
      "Real-time Monitoring",
      "Predictive Analytics",
      "Yield Forecasting",
      "Quality Control",
    ],
    color: "bg-purple-500",
  },
];

const technologies = [
  {
    name: "IoT Sensorlar",
    description:
      "Harorat, namlik, yorug'lik va tuproq namligini o'lchaydigan zamonaviy sensorlar",
    icon: <Wind className="w-6 h-6" />,
  },
  {
    name: "Cloud Platform",
    description:
      "Barcha ma'lumotlarni bulutda saqlash va uzoqdan boshqarish imkoniyati",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    name: "AI Analytics",
    description:
      "Sun'iy intellekt yordamida hosildorlikni bashorat qilish va optimal yechimlar",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    name: "Mobile Apps",
    description: "Mobil ilovalar orqali issiqxonani smartfondan boshqarish",
    icon: <Cpu className="w-6 h-6" />,
  },
];

const benefits = [
  {
    title: "Hosildorlikni oshirish",
    description:
      "Zamonaviy texnologiyalar yordamida hosildorlik 30-50% ga oshadi",
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    stat: "+45%",
  },
  {
    title: "Resurslarni tejash",
    description: "Avtomatlashtirish suv va energiya sarfini 40% ga kamaytiradi",
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
    stat: "-40%",
  },
  {
    title: "Ishchi kuchini tejash",
    description: "Avtomatlashtirish inson mehnatini 70% ga kamaytiradi",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    stat: "-70%",
  },
  {
    title: "Sifatni yaxshilash",
    description: "Nazorat tizimlari mahsulot sifatini 25% ga yaxshilaydi",
    icon: <Target className="w-8 h-8 text-orange-600" />,
    stat: "+25%",
  },
];

export default function AgroEngineeringPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Agro-injiniring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zamonaviy texnologiyalar va avtomatlashtirish yechimlari bilan
              qishloq xo'jaligini kelajasiga o'tkazing
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bizning agro-injiniring xizmatlarimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Qishloq xo'jaligida eng zamonaviy texnologiyalarni qo'llaymiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {agroServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Batafsil ma'lumot
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ishlatiladigan texnologiyalar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eng so'nggi va ishonchli texnologiyalardan foydalanamiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Agro-injiniring afzalliklari
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Texnologiyalarni joriy etishning asosiy afzalliklari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Ish jarayoni</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Biz bilan qanday ishlash mumkin
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Tahlil va loyiha",
              "Texnologiyani tanlash",
              "O'rnatish va sozlash",
              "Qo'llab-quvvatlash",
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{step}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Shield className="w-4 h-4 mr-2" />
              Boshlash
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

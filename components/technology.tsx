"use client"

import { Thermometer, Wind, Droplets, Lightbulb, Leaf, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"

const technologies = [
  {
    icon: Thermometer,
    title: "Isitish tizimi",
    description: "Zamonaviy isitish tizimlari orqali optimal haroratni ta'minlash va energiya tejash.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Wind,
    title: "Ventilyatsiya va sovutish",
    description: "Avtomatlashtirilgan ventilyatsiya va sovutish tizimlari yordamida iqlimni nazorat qilish.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Leaf,
    title: "CO2 tizimi",
    description: "Karbon dioksid bilan boyitish tizimi orqali o'simliklarning o'sishini tezlashtirish.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Lightbulb,
    title: "LED grow lights",
    description: "Energiya tejamkor LED yoritish tizimlari orqali yil davomida hosil olish.",
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: Droplets,
    title: "Sug'orish tizimi",
    description: "Tomchilatib sug'orish va gidroponika tizimlari yordamida suvni 90% gacha tejash.",
    color: "from-sky-500/20 to-blue-500/20"
  },
  {
    icon: Cpu,
    title: "Avtomatlashtirish",
    description: "IoT sensorlar va AI algoritmlari yordamida iqlimni avtomatik boshqarish.",
    color: "from-violet-500/20 to-purple-500/20"
  },
]

export function Technology() {
  return (
    <section id="texnologiya" className="py-20 lg:py-32 bg-background relative overflow-hidden">
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
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background Gradient */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                tech.color
              )} />
              
              {/* Content */}
              <div className="relative">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <tech.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

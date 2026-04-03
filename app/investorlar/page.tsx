import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrendingUp, Shield, Globe, Leaf, Download, ArrowRight, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    icon: TrendingUp,
    title: "Yuqori ROI",
    description: "Issiqxona loyihalarida yuqori ichki rentabellik darajasi (IRR) va tez qaytim."
  },
  {
    icon: BarChart3,
    title: "Tez aylanma",
    description: "Yil davomida bir necha marta hosil olish imkoniyati va tez aylanuvchi mahsulot."
  },
  {
    icon: Shield,
    title: "Oziq-ovqat xavfsizligi",
    description: "O'zbekistonda oziq-ovqat xavfsizligini ta'minlashga hissa qo'shish."
  },
  {
    icon: Globe,
    title: "Eksport salohiyati",
    description: "Xalqaro bozorlarga eksport qilish imkoniyati va valyuta daromadi."
  },
  {
    icon: Leaf,
    title: "ESG yondashuv",
    description: "Ekologik, ijtimoiy va boshqaruv standartlariga mos investitsiya."
  },
]

const investmentModels = [
  {
    title: "To'liq loyiha",
    description: "0 dan tayyor issiqxonagacha - to'liq investitsiya loyihasi",
    minInvestment: "$100,000",
    roi: "25-35%",
    period: "3-5 yil"
  },
  {
    title: "Hamkorlik",
    description: "Mavjud loyihaga qo'shilish va foiz olish",
    minInvestment: "$25,000",
    roi: "18-25%",
    period: "2-4 yil"
  },
  {
    title: "Franchayzing",
    description: "UZ-GROW brendi ostida mustaqil issiqxona",
    minInvestment: "$50,000",
    roi: "20-30%",
    period: "3-5 yil"
  },
]

const stats = [
  { value: "$2M+", label: "Jami investitsiya" },
  { value: "35%", label: "O'rtacha ROI" },
  { value: "15+", label: "Investor" },
  { value: "100%", label: "Muvaffaqiyat" },
]

export default function InvestorlarPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Investorlar uchun
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Agro-sanoat investitsiya imkoniyati
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                UZ-GROW yuqori rentabelli issiqxona loyihalarini amalga oshirish bo'yicha 
                hamkorlik taklif qiladi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 gap-2">
                  <Download className="w-4 h-4" />
                  PDF prezentatsiya
                </Button>
                <Link href="/aloqa">
                  <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                    Bog'lanish
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investitsiya afzalliklari
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Issiqxona loyihalariga investitsiya qilishning asosiy sabablari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Models */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investitsiya modellari
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sizning maqsadlaringizga mos variantni tanlang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {investmentModels.map((model, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                {index === 0 && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Mashhur
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-6">{model.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Min. investitsiya</span>
                    <span className="font-bold text-foreground">{model.minInvestment}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Kutilgan ROI</span>
                    <span className="font-bold text-primary">{model.roi}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Qaytim muddati</span>
                    <span className="font-bold text-foreground">{model.period}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground" 
                  variant={index === 0 ? "default" : "outline"}
                >
                  Batafsil ma'lumot
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investitsiya jarayoni
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Murojaat", desc: "Ariza qoldiring" },
                { step: 2, title: "Tahlil", desc: "Loyihani o'rganish" },
                { step: 3, title: "Shartnoma", desc: "Kelishuv imzolash" },
                { step: 4, title: "Daromad", desc: "Foyda olish" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Investitsiya imkoniyatlarini muhokama qilaylik
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Bizning mutaxassislarimiz sizga eng mos investitsiya modelini tanlashda yordam beradi.
          </p>
          <Link href="/aloqa">
            <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2">
              Bog'lanish
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

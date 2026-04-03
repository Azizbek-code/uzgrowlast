"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+998 55 515 22 33",
    href: "tel:+998555152233"
  },
  {
    icon: Mail,
    title: "Email",
    value: "uzgrow@gmail.com",
    href: "mailto:uzgrow@gmail.com"
  },
  {
    icon: MapPin,
    title: "Manzil",
    value: "Toshkent sh., Yangihayor tumani, Fayzli MFY, Rayhon ko'chasi, 107-uy",
    href: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Ish vaqti",
    value: "Dushanba - Shanba: 09:00 - 18:00",
    href: null
  },
]

export default function AloqaPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Aloqa
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Biz bilan bog'laning
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Savollaringiz bormi? Biz sizga yordam berishga tayyormiz. 
              Bepul konsultatsiya olish uchun bog'laning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Kontakt ma'lumotlari
              </h2>
              
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Ijtimoiy tarmoqlar
                </h3>
                <div className="flex gap-3">
                  {["Telegram", "Instagram", "YouTube", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Xabar yuborish
                </h2>
                <p className="text-muted-foreground mb-8">
                  Formani to'ldiring, biz siz bilan tez orada bog'lanamiz.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Rahmat!
                    </h3>
                    <p className="text-muted-foreground">
                      Xabaringiz qabul qilindi. Tez orada bog'lanamiz.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ismingiz *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="To'liq ismingiz"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="+998 XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Mavzu
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Tanlang</option>
                          <option value="consultation">Bepul konsultatsiya</option>
                          <option value="project">Loyiha hisoblash</option>
                          <option value="investment">Investitsiya</option>
                          <option value="partnership">Hamkorlik</option>
                          <option value="other">Boshqa</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Xabar
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Xabaringizni yozing..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className={cn(
                        "w-full rounded-full gap-2",
                        isLoading && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {isLoading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Yuborilmoqda...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Yuborish
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bizning manzilimiz
            </h2>
            <p className="text-muted-foreground">
              Toshkent sh., Yangihayor tumani, Fayzli MFY, Rayhon ko'chasi, 107-uy
            </p>
          </div>
          
          <div className="aspect-[21/9] bg-card rounded-3xl flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Xarita joylashtiring</p>
              <p className="text-sm text-muted-foreground/60">Google Maps yoki Yandex Maps</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

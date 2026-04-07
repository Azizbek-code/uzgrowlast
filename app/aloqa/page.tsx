"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+998 55 515 22 23",
    href: "tel:+998555152223",
  },
  {
    icon: Send,
    title: "WhatsApp",
    value: "+998 99 435 23 13",
    href: "https://wa.me/+998994352313",
  },
  {
    icon: Mail,
    title: "Email",
    value: "uzgrrow@gmail.com",
    href: "mailto:uzgrrow@gmail.com",
  },
  {
    icon: MapPin,
    title: "Manzil",
    value: "Toshkent sh., Rayhona ko'chasi 107-uy",
    href: "https://yandex.ru/navi?rtext=41.202864,69.235732~41.202625,69.235384&rtt=auto",
  },
];

export default function AloqaPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 3000);
  };

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
              Savollaringiz bormi? Biz sizga yordam berishga tayyormiz. Bepul
              konsultatsiya olish uchun bog'laning.
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
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
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
                  {["Telegram", "Instagram", "YouTube", "Facebook"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <span className="text-xs font-bold">{social[0]}</span>
                      </a>
                    ),
                  )}
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
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
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
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
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
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
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
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Tanlang</option>
                          <option value="consultation">
                            Bepul konsultatsiya
                          </option>
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
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
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
                        isLoading && "opacity-70 cursor-not-allowed",
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

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bizning manzilimiz
            </h2>
            <p className="text-muted-foreground">
              Toshkent sh., Yangihayor tumani, Fayzli MFY, Rayhon ko'chasi,
              107-uy
            </p>
          </div>

          {/* Interactive Map */}
          <div className="aspect-[21/9] bg-card rounded-3xl overflow-hidden border-2 border-border relative">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=69.290768%2C41.243647&z=16&pt=69.290768%2C41.243647%2Cpmrdm1&source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full"
              allowFullScreen
              title="UZ-GROW Location Map"
            />

            {/* Map Actions */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  window.open(
                    "https://yandex.ru/navi?rtext=41.243647,69.290768&rtt=auto",
                    "_blank",
                  )
                }
                className="bg-background/90 backdrop-blur-sm hover:bg-background"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Yo'nalish
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const address =
                    "Toshkent sh., Yangihayor tumani, Fayzli MFY, Rayhon ko'chasi, 107-uy";
                  navigator.clipboard.writeText(address);
                  alert("Manzil nusxalandi!");
                }}
                className="bg-background/90 backdrop-blur-sm hover:bg-background"
              >
                Nusxalash
              </Button>
            </div>
          </div>

          {/* Location Details */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Manzil</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Toshkent sh., Yangihayor tumani, Fayzli MFY, Rayhon ko'chasi,
                107-uy
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Ish vaqti</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Dushanba-Juma: 9:00 - 18:00
                <br />
                Shanba: 9:00 - 15:00
                <br />
                Yakshanba: Dam olish kuni
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Qo'ng'iroq qilish
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                +998 55 515 22 23
                <br />
                +998 99 435 23 13 (WhatsApp)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

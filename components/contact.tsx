"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+998 55 515 22 33",
    href: "tel:+998555152233",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "uzgrrow@gmail.com",
    href: "mailto:uzgrrow@gmail.com",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: MapPin,
    label: "Manzil",
    value:
      "Toshkent sh. Yangihaytski tumani, Fayzli MFY, Rayhon ko'chasi 107-uy",
    href: "#",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Clock,
    label: "Ish vaqti",
    value: "Dush - Sha: 09:00 - 18:00",
    href: "#",
    color: "bg-purple-500/10 text-purple-600",
  },
];

const serviceTypes = [
  "Turnkey issiqxona qurish",
  "Agro-injiniring",
  "Jihozlar",
  "Agro-konsalting",
  "Investitsiya",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration - replace with your actual service details
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        service_type: formData.service,
        message: formData.message,
        to_email: "uzgrow@gmail.com", // Your receiving email
      };

      // Replace these with your actual EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      console.log("Email sent successfully!");
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="aloqa"
      className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Aloqa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Biz bilan bog&apos;laning
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Savollaringiz bo&apos;lsa yoki konsultatsiya olmoqchi
            bo&apos;lsangiz, bizga murojaat qiling
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Kontakt ma&apos;lumotlari
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${info.color}`}
                    >
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border h-64">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-10 h-10 mx-auto mb-2 text-primary/50" />
                  <p className="text-sm">Xarita joylash uchun joy</p>
                  <p className="text-xs opacity-60">Google Maps embed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Bepul konsultatsiya oling
              </h3>
              <p className="text-muted-foreground mb-8">
                Ma&apos;lumotlaringizni qoldiring va mutaxassisimiz siz bilan
                bog&apos;lanadi
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Rahmat!
                  </h4>
                  <p className="text-muted-foreground">
                    Arizangiz qabul qilindi. Tez orada siz bilan
                    bog&apos;lanamiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Ismingiz <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ismingizni kiriting"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Telefon <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+998 XX XXX XX XX"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@example.com"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Xizmat turi
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Xizmat turini tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Xabar
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Loyihangiz haqida qisqacha yozing..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 rounded-full text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Yuborilmoqda...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
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
  );
}

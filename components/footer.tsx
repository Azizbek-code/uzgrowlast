"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  Users,
  Youtube,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = {
  xizmatlar: [
    { label: "Issiqxona turlari", href: "/issiqxona-turlari" },
    { label: "Texnologiyalar", href: "/texnologiya" },
    { label: "Loyihalar", href: "/loyihalar" },
    { label: "Jihozlar", href: "/jixozlar" },
  ],
  kompaniya: [
    { label: "Biz haqimizda", href: "/haqimizda" },
    { label: "Jamoa", href: "/rahbariyat" },
    { label: "Xalqaro hamkorlik", href: "/xalqaro-hamkorlik" },
    { label: "Media hamkorlik", href: "/media-hamkorlik" },
  ],
  yordam: [
    { label: "Bog'lanish", href: "/aloqa" },
    { label: "Galereya", href: "/gallery" },
    { label: "Maxfiylik siyosati", href: "/maxfiylik-siyosati" },
    { label: "Foydalanish shartlari", href: "/foydanalish-shartlari" },
  ],
};



const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/uz.grow?igsh=MXMwN3lzaW95NTN1YQ==",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1DePjLwX79/",
    label: "Facebook",
  },
  {
    icon: Send,
    href: "http://@Uz_Grow",
    label: "Telegram",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@rustamjonrakhmonov?si=9-OxlFiY0B875tD9",
    label: "Youtube",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#24B14B] rounded-xl flex items-center justify-center font-bold text-2xl text-primary-foreground shadow-lg">
                UG
              </div>
              <div>
                <span className="text-2xl font-bold block">UZ-GROW</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              O&apos;zbekistonda zamonaviy issiqxona qurish va qurilish
              xizmatlari. Biz bilan kelajak bugun boshlanadi.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold mb-6 text-lg">Aloqa</h4>
            <a
              href="tel:+998555152223"
              className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+998 55 515 22 23</span>
            </a>
            <a
              href="https://wa.me/+998994352313"
              className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>+998 99 435 23 13 (WhatsApp)</span>
            </a>
            <a
              href="mailto:uzgrrow@gmail.com"
              className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>uzgrrow@gmail.com</span>
            </a>
            <a
              href="https://yandex.ru/navi?rtext=41.202864,69.235732~41.202625,69.235384&rtt=auto"
              className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>
                Toshkent shahri, Sirg’ali tumani, Nomdanak ko’chasi, Ziyokor 6/9
              </span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Xizmatlar</h4>
            <ul className="space-y-3">
              {footerLinks.xizmatlar.map((link: any, index: number) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Kompaniya</h4>
            <ul className="space-y-3">
              {footerLinks.kompaniya.map((link: any, index: number) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Social */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Yordam</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.yordam.map((link: any, index: number) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-4 text-sm text-white/50">
                Bizni kuzating
              </h5>
              <div className="flex gap-3">
                {socials.map((social: any, index: number) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#24B14B] transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} UZ-GROW. Barcha huquqlar
              himoyalangan.
            </p>
            <p className="text-sm text-white/50">
              O&apos;zbekistonda ishlab chiqarilgan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Send,
} from "lucide-react";

const footerLinks = {
  xizmatlar: [
    { label: "Issiqxona turlari", href: "/issiqxona-turlari" },
    { label: "Agro-injiniring", href: "/agro-injiniring" },
    { label: "Jihozlar", href: "/jixozlar" },
    { label: "Loyihalar", href: "/loyihalar" },
  ],
  kompaniya: [
    { label: "Biz haqimizda", href: "/haqimizda" },
    { label: "Rahbariyat", href: "/rahbariyat" },
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
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Send, href: "#", label: "Telegram" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-xl text-primary-foreground">
                UG
              </div>
              <div>
                <span className="text-xl font-bold block">UZ-GROW</span>
                <span className="text-xs text-white/50 tracking-wider">
                  AGRO-INJINIRING
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              O&apos;zbekistonda zamonaviy issiqxona qurish va agro-injiniring
              xizmatlari. Biz bilan kelajak bugun boshlanadi.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+998555152233"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+998 55 515 22 33</span>
              </a>
              <a
                href="mailto:uzgrow@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>uzgrow@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  Toshkent sh., Yangihayor tumani, Fayzli MFY, Rayhon
                  ko&apos;chasi, 107-uy
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Xizmatlar</h4>
            <ul className="space-y-3">
              {footerLinks.xizmatlar.map((link, index) => (
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
              {footerLinks.kompaniya.map((link, index) => (
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

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Yordam</h4>
            <ul className="space-y-3">
              {footerLinks.yordam.map((link, index) => (
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
            <div className="mt-8">
              <h5 className="font-medium mb-4 text-sm text-white/50">
                Bizni kuzating
              </h5>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
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

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
} from "lucide-react";

const footerLinks = {
  xizmatlar: [
    { label: "Issiqxona turlari", href: "/issiqxona-turlari" },
    { label: "Loyihalar", href: "/loyihalar" },
    { label: "Jihozlar", href: "/jixozlar" },
    { label: "Qurilish", href: "/qurilish" },
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

const teamMembers = [
  {
    name: "Rustamjon Rahmonov",
    position: "Asoschi va Bosh Direktor",
    avatar: "/team/ceo.jpg",
  },
  {
    name: "Majidov Alisher",
    position: "Marketolog",
    avatar: "/team/marketolog.jpg",
  },
  {
    name: "Abdulloh Sheraliyevich",
    position: "Texnik Direktor",
    avatar: null,
  },
];

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
    icon: Linkedin,
    href: "https://youtube.com/@rustamjonrakhmonov?si=9-OxlFiY0B875tD9",
    label: "YouTube",
  },
  { icon: Send, href: "http://@Uz_Grow", label: "Telegram" },
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
                <span className="text-sm sm:text-base tracking-wider text-white/50">
                  QURUVCHI FIRMASI
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              O&apos;zbekistonda zamonaviy issiqxona qurish va qurilish
              xizmatlari. Biz bilan kelajak bugun boshlanadi.
            </p>

            {/* Team Members */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-white">Jamoa</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10">
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#24B14B]/10 flex items-center justify-center">
                          <Users className="w-4 h-4 text-primary/60" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">
                        {member.name}
                      </p>
                      <p className="text-xs text-white/50 truncate">
                        {member.position}
                      </p>
                      {member.experience && (
                        <p className="text-xs text-white/30 truncate">
                          {member.experience}
                        </p>
                      )}
                      {member.projects && (
                        <p className="text-xs text-white/30 truncate">
                          {member.projects}
                        </p>
                      )}
                      {member.phone && (
                        <p className="text-xs text-primary/80 truncate">
                          {member.phone}
                        </p>
                      )}
                      {member.completion && (
                        <p className="text-xs text-green-400 truncate">
                          {member.completion}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <span>Toshkent, Rayhona ko'chasi 107-uy</span>
            </a>
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

          {/* Help & Social */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Yordam</h4>
            <ul className="space-y-3 mb-8">
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
            <div>
              <h5 className="font-medium mb-4 text-sm text-white/50">
                Bizni kuzating
              </h5>
              <div className="flex gap-3">
                {socials.map((social, index) => (
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

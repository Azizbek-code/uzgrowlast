"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { currentLang, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/issiqxona-turlari", label: t("nav.greenhouse") },
    { href: "/loyihalar", label: t("nav.projects") },
    { href: "/rahbariyat", label: t("nav.team") },
    { href: "/aloqa", label: t("nav.contact") },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "uz", label: "O'zbekcha" },
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showTransparent = isHome && !isScrolled;

  return (
    <>
      {/* Top Bar */}
      <div
        className={cn(
          "hidden lg:block transition-all duration-300 border-b",
          showTransparent
            ? "bg-black/20 backdrop-blur-sm border-white/10"
            : "bg-muted/50 border-border",
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a
                href="tel:+998555152233"
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors",
                  showTransparent
                    ? "text-black/80 hover:text-white"
                    : "text-gray-700 hover:text-gray-900",
                )}
              >
                <Phone className="w-3.5 h-3.5" />
                +998 55 515 22 33
              </a>
              <a
                href="mailto:uzgrow@gmail.com"
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors",
                  showTransparent
                    ? "text-black/80 hover:text-white"
                    : "text-gray-700 hover:text-gray-900",
                )}
              >
                <Mail className="w-3.5 h-3.5" />
                uzgrow@gmail.com
              </a>
            </div>

            {/* Language Switcher */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-1 text-xs px-2 py-1 rounded transition-colors",
                    showTransparent
                      ? "text-white hover:text-white/80"
                      : "text-foreground hover:text-primary",
                  )}
                >
                  <Globe className="w-3 h-3" />
                  {languages.find((l) => l.code === currentLang)?.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DialogTrigger>
              <DialogContent className="w-auto p-4">
                <DialogTitle className="sr-only">
                  {t("nav.language")}
                </DialogTitle>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {t("nav.language")}
                  </p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        "w-full px-4 py-2 text-sm text-left rounded-lg transition-colors",
                        currentLang === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-foreground",
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
          showTransparent
            ? "bg-transparent py-4"
            : "bg-secondary/80 backdrop-blur-md shadow-lg py-3",
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="UZ-GROW Logo"
                className="w-16 h-16 rounded-xl object-contain shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-foreground">
                  UZ-GROW
                </span>
                <span className="text-sm tracking-wider text-muted-foreground">
                  QURUVCHI FIRMASI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-gray-900 hover:text-primary hover:bg-primary/5",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Removed as per request */}
            {/* <div className="hidden lg:flex items-center">
              <Button
                size="lg"
                className={cn(
                  "rounded-full px-6 transition-all",
                  showTransparent
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground",
                )}
              >
                Bepul konsultatsiya
              </Button>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-[600px] mt-4" : "max-h-0",
            )}
          >
            <div className="bg-background rounded-2xl p-4 shadow-xl">
              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-2 pb-4 mb-4 border-b border-border">
                <a
                  href="tel:+998555152233"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +998 55 515 22 33
                </a>
                <a
                  href="mailto:uzgrow@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  uzgrow@gmail.com
                </a>
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl transition-colors font-medium",
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Language Switcher Mobile */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2 px-4">
                  Til tanlang
                </p>
                <div className="flex gap-2 px-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        "px-3 py-1.5 text-sm rounded-lg transition-colors",
                        currentLang === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80",
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button - Removed as per request */}
              {/* <div className="mt-4 pt-4 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
                  Bepul konsultatsiya
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

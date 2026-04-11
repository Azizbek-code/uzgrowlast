"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid3X3,
  List,
  Search,
  Building2,
  Globe,
  Sprout,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "Vodiy Loyihasi",
    location: "Andijon vodiysi",
    size: "7 ta issiqxona",
    category: "presidential",
    description:
      "Andijon vodiysida qurilgan 7 ta zamonaviy issiqxona majmuasi. Prezident tashrifi uchun mo'ljallangan yirik loyiha. Turli o'lchamlarda va eng ilg'or texnologiyalar bilan jihozlangan.",
    images: [
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468970/21_bv62xg.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775301447/22_qrawq5.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469214/34_rthdcs.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469212/32_2_n7x8lw.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469212/38_shg9uf.jpg",
    ],
    year: "2022-2024",
    status: "completed",
    featured: true,
    technologies: [
      "Polikarbonat",
      "Tomchilatib sug'orish",
      "Avtomatlashtirish",
    ],
    client: "Prezident administratsiyasi",
    investment: "$2.5M",
  },
  {
    id: 2,
    title: "Samarqand Agro Majmuasi",
    location: "Samarqand viloyati",
    size: "2 ta issiqxona",
    category: "presidential",
    description:
      "Samarqand viloyatida qurilgan 2 ta yirik issiqxona. Prezident tashrifi va tadbirkorlar uchrashuvi uchun mo'ljallangan. Zamonaviy avtomatlashtirish tizimlari bilan jihozlangan.",
    images: [
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469051/photo_2026-04-04_10-35-53_kvt95v.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469172/20201201_105047_elutha.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469172/20201201_105047_elutha.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469051/photo_2026-04-04_10-35-50_ctmowh.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469050/IMG_5189_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_atdoz0.jpg",
    ],
    year: "2024",
    status: "completed",
    featured: true,
    technologies: ["Shisha", "Iqlim nazorati", "Gidroponik"],
    client: "Samarqand viloyati hokimligi",
    investment: "$1.8M",
  },
  {
    id: 3,
    title: "Xalqaro Agro Hamkorlik",
    location: "Buxoro, Toshkent, Olmaota",
    size: "3 ta loyiha",
    category: "international",
    description:
      "Buxoro xalqaro turizm markazi, Toshkent raqamli ta'lim platformasi va Olmaota issiqxona loyihalari. Xalqaro standartlarga mos ravishda qurilgan.",
    images: [
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469047/IMG_5184_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_iuhwco.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469042/IMG_4545_bl2h6a.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469038/IMG_4540_2_fhkndi.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468985/IMG_4397_copy_iqnrvn.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469023/IMG_4430_copy_g7mb6k.jpg",
    ],
    year: "2024",
    status: "in-progress",
    featured: false,
    technologies: ["Aqlli issiqxona", "IoT", "AI monitoring"],
    client: "Xalqaro investorguruhlar",
    investment: "$3.2M",
  },
  {
    id: 4,
    title: "Qashqadaryo Polikarbonat Majmuasi",
    location: "Qashqadaryo viloyati",
    size: "3 gektar",
    category: "greenhouse",
    description:
      "Qashqadaryoda qurilgan polikarbonat issiqxonalari majmui. Zamonaviy texnologiyalar bilan jihozlangan. Yil bo'yi samaradorlikni ta'minlaydi.",
    images: [
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468983/IMG_4393_copy_g104ol.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468983/IMG_4393_copy_g104ol.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468989/IMG_3533_zgzdoe.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468975/IMG_3849_fbjrqw.heic",
    ],
    year: "2024",
    status: "completed",
    featured: false,
    technologies: ["Polikarbonat", "Qayta ishlash", "Energiya tejash"],
    client: "Qashqadaryo fermerlari uyushmasi",
    investment: "$1.5M",
  },
  {
    id: 5,
    title: "Toshkent Innovatsion Markazi",
    location: "Toshkent shahri",
    size: "1.5 gektar",
    category: "agriculture",
    description:
      "Toshkent shahrida qurilgan innovatsion issiqxona markazi. Yaqin Sharqdagi eng zamonaviy agrotexnologiyalar jamlanmasi.",
    images: [
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/IMG_5188_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_rmwd8l.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469185/20201201_111323_zaxid6.jpg",
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567292/IMG_4029_copy_7_q0rdbm.jpg",
    ],
    year: "2023",
    status: "completed",
    featured: false,
    technologies: ["Vertikal fermerlik", "LED yoritish", "Suv aylanma"],
    client: "Toshkent shahar hokimligi",
    investment: "$2.1M",
  },
];

export function Projects() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { id: "all", label: "Barchasi", icon: Grid3X3, color: "bg-gray-500" },
    {
      id: "presidential",
      label: "Prezident",
      icon: Award,
      color: "bg-blue-500",
    },
    {
      id: "international",
      label: "Xalqaro",
      icon: Globe,
      color: "bg-green-500",
    },
    {
      id: "greenhouse",
      label: "Issiqxona",
      icon: Building2,
      color: "bg-orange-500",
    },
    {
      id: "agriculture",
      label: "Qishloq xo'jaligi",
      icon: Sprout,
      color: "bg-purple-500",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const nextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id,
    );
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id,
    );
    const prevIndex =
      (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
    setCurrentImageIndex(0);
  };

  return (
    <section className="py-20 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
          </div>
          <Badge className="mb-4 bg-[#24B14B]/10 text-primary px-4 py-2">
            Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Bizning <span className="text-primary">loyihalarimiz</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Har bir loyiha individual yondashuv asosida amalga oshiriladi. Biz
            bilan kelajak bugun boshlanadi.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Loyihalarni qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-muted-foreground mr-2">
                Kategoriya:
              </span>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "gap-2 transition-all duration-300",
                    activeCategory === category.id &&
                      "shadow-lg shadow-primary/20",
                  )}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </Button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Display */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer",
                  project.featured && "ring-2 ring-primary/20",
                )}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-[#24B14B] text-primary-foreground gap-1">
                      <Award className="w-3 h-3" />
                      Mashhur
                    </Badge>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    variant={
                      project.status === "completed" ? "default" : "secondary"
                    }
                    className={cn(
                      "gap-1",
                      project.status === "completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white",
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        project.status === "completed"
                          ? "bg-white"
                          : "bg-white",
                      )}
                    />
                    {project.status === "completed"
                      ? "Tugallangan"
                      : "Jarayonda"}
                  </Badge>
                </div>

                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{project.size}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-1 group-hover:bg-[#24B14B] group-hover:text-primary-foreground transition-colors"
                    >
                      Batafsil
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-80 aspect-video lg:aspect-square relative rounded-xl overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </Badge>
                        <Badge variant="outline">{project.size}</Badge>
                        <Badge variant="outline">{project.year}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Investitsiya:</span>{" "}
                        {project.investment}
                      </div>
                      <Button size="sm" className="gap-1">
                        Batafsil
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Loyihalar topilmadi
            </h3>
            <p className="text-muted-foreground">
              Qidiruv shartlarini o'zgartirib ko'ring
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0);
          }}
        >
          <div
            className="relative bg-background rounded-3xl overflow-hidden max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProject(null);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="aspect-video lg:aspect-video relative">
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                fill
                className="object-cover"
                sizes="100vw"
              />

              {/* Image Navigation */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) =>
                          (prev - 1 + selectedProject.images.length) %
                          selectedProject.images.length,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev + 1) % selectedProject.images.length,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="gap-1">
                  <MapPin className="w-3 h-3" />
                  {selectedProject.location}
                </Badge>
                <Badge variant="outline">{selectedProject.size}</Badge>
                <Badge variant="outline">{selectedProject.year}</Badge>
                {selectedProject.featured && (
                  <Badge className="bg-[#24B14B] text-primary-foreground gap-1">
                    <Award className="w-3 h-3" />
                    Mashhur
                  </Badge>
                )}
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Texnologiyalar
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Loyiha ma'lumotlari
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mijoz:</span>
                      <span className="font-medium">
                        {selectedProject.client}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Investitsiya:
                      </span>
                      <span className="font-medium">
                        {selectedProject.investment}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Holati:</span>
                      <span className="font-medium">
                        {selectedProject.status === "completed"
                          ? "Tugallangan"
                          : "Jarayonda"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-border">
                <Button className="flex-1" size="lg">
                  Aloqa qilish
                </Button>
                <Button variant="outline" size="lg">
                  PDF yuklash
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Calendar, Maximize, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Toshkent viloyati issiqxonasi",
    location: "Toshkent viloyati",
    area: "5,000 m²",
    year: "2024",
    category: "sanoat",
    description: "Zamonaviy pomidor yetishtirish uchun to'liq avtomatlashtirilgan issiqxona kompleksi."
  },
  {
    id: 2,
    title: "Samarqand qulupnay issiqxonasi",
    location: "Samarqand",
    area: "2,500 m²",
    year: "2024",
    category: "fermer",
    description: "Stellaj tizimidagi qulupnay yetishtirish loyihasi, eksportga mo'ljallangan."
  },
  {
    id: 3,
    title: "Farg'ona bodring kompleksi",
    location: "Farg'ona",
    area: "3,200 m²",
    year: "2023",
    category: "sanoat",
    description: "Yil davomida bodring yetishtirish uchun iqlim nazorati bilan jihozlangan."
  },
  {
    id: 4,
    title: "Andijon mini issiqxona",
    location: "Andijon",
    area: "800 m²",
    year: "2023",
    category: "fermer",
    description: "Kichik fermer xo'jaligi uchun arzon va samarali yechim."
  },
  {
    id: 5,
    title: "Qashqadaryo pomidor loyihasi",
    location: "Qashqadaryo",
    area: "4,500 m²",
    year: "2023",
    category: "sanoat",
    description: "Issiq iqlim sharoitiga moslashtirilgan sovutish tizimi bilan."
  },
  {
    id: 6,
    title: "Namangan sabzavot issiqxonasi",
    location: "Namangan",
    area: "1,800 m²",
    year: "2022",
    category: "fermer",
    description: "Turli xil sabzavotlar yetishtirish uchun universal issiqxona."
  },
]

const categories = [
  { id: "all", label: "Barcha loyihalar" },
  { id: "sanoat", label: "Sanoat issiqxonalari" },
  { id: "fermer", label: "Fermer issiqxonalari" },
]

export default function LoyihalarPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const currentIndex = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : -1

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1])
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Bizning loyihalarimiz
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Har bir loyiha individual yondashuv asosida amalga oshiriladi. 
              100+ muvaffaqiyatli loyihalarimiz bilan tanishing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Flashcard Style */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group perspective-1000"
                style={{ perspective: "1000px" }}
              >
                <div
                  className={cn(
                    "relative w-full h-[320px] transition-transform duration-700 cursor-pointer",
                    flippedCards.has(project.id) && "[transform:rotateY(180deg)]"
                  )}
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => toggleFlip(project.id)}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute inset-0 bg-card rounded-2xl border border-border overflow-hidden backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Rasm qo'shing</p>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Maximize className="w-3.5 h-3.5" />
                          {project.area}
                        </span>
                      </div>
                      <p className="text-xs text-primary mt-3">Orqa tomoni uchun bosing</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-primary rounded-2xl p-6 flex flex-col justify-between [transform:rotateY(180deg)] backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="space-y-2 text-sm text-primary-foreground/70">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4" />
                          {project.area}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                      className="w-full py-3 bg-white/20 hover:bg-white/30 text-primary-foreground rounded-xl font-medium transition-colors"
                    >
                      Batafsil ko'rish
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="w-16 h-16 text-primary/40 mx-auto mb-2" />
                <p className="text-muted-foreground">Rasm joylashtiring</p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation */}
              <button
                onClick={goToPrev}
                disabled={currentIndex === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex === projects.length - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                    {selectedProject.category === "sanoat" ? "Sanoat issiqxonasi" : "Fermer issiqxonasi"}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Joylashuv</p>
                  <p className="font-semibold text-foreground">{selectedProject.location}</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <Maximize className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Maydon</p>
                  <p className="font-semibold text-foreground">{selectedProject.area}</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Yil</p>
                  <p className="font-semibold text-foreground">{selectedProject.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

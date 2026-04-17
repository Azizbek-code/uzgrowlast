"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Heart,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

const allImages = [
  {
    id: 1,
    src: "/images/1.jpg",
    title: "Sanoat issiqxonasi",
    category: "Loyihalar",
    description: "Toshkent viloyatida qurilgan zamonaviy sanoat issiqxonasi",
  },
  {
    id: 2,
    src: "/images/2.jpg",
    title: "Qishloq xo'jaligi issiqxonasi",
    category: "Loyihalar",
    description: "Farg'ona vodiysida qurilgan fermer issiqxonasi majmui",
  },
  {
    id: 3,
    src: "/images/3.jpg",
    title: "Quyosh issiqxonasi",
    category: "Loyihalar",
    description: "Samarqandda qurilgan energiya mustaqil issiqxona",
  },
  {
    id: 4,
    src: "/images/4.jpg",
    title: "Qulupnay issiqxonasi",
    category: "Loyihalar",
    description: "Andijonda qurilgan zamonaviy qulupnay issiqxonasi",
  },
  {
    id: 5,
    src: "/images/7.jpg",
    title: "Raqamli ta'lim markazi",
    category: "Loyihalar",
    description: "Toshkentda qurilayotgan raqamli ta'lim markazi",
  },
  {
    id: 6,
    src: "/images/8.jpg",
    title: "Energetika loyihasi",
    category: "Loyihalar",
    description: "Qashqadaryo viloyatida energiya loyihasi",
  },
  {
    id: 7,
    src: "/images/24.jpg",
    title: "Eksport issiqxonasi",
    category: "Loyihalar",
    description: "Qashqadaryoda qurilgan eksportga mo'ljallangan issiqxona",
  },
  {
    id: 8,
    src: "/images/25.jpg",
    title: "Gidroponika issiqxonasi",
    category: "Loyihalar",
    description: "Navoiyda qurilgan gidroponika tizimli issiqxona",
  },
  {
    id: 9,
    src: "/images/27.jpg",
    title: "Xalqaro turizm markazi",
    category: "Loyihalar",
    description: "Buxoro shahrida qurilayotgan xalqaro turizm markazi",
  },
  {
    id: 10,
    src: "/images/photo_2026-04-04_10-35-25.jpg",
    title: "Prezident tashrifi",
    category: "Samarqand",
    description: "Prezidentning Samarqand viloyatiga rasmiy tashrifi",
  },
  {
    id: 11,
    src: "/images/photo_2026-04-04_10-35-29.jpg",
    title: "Loyihalar ochilishi",
    category: "Samarqand",
    description: "Yangi loyihalarning rasmiy ochilishi marosimi",
  },
  {
    id: 12,
    src: "/images/photo_2026-04-04_10-35-50.jpg",
    title: "Prezident bilan uchrashuv",
    category: "Samarqand",
    description: "Prezident bilan tadbirkorlar uchrashuvi",
  },
  {
    id: 13,
    src: "/images/photo_2026-04-04_10-35-53.jpg",
    title: "Memorandum imzolandi",
    category: "Samarqand",
    description: "Xalqaro memorandum imzolash marosimi",
  },
  {
    id: 14,
    src: "/images/photo_2026-04-04_10-35-54.jpg",
    title: "Yangi korxona",
    category: "Samarqand",
    description: "Ochiqilgan yangi korxona binosi",
  },
  {
    id: 15,
    src: "/images/photo_2026-04-04_10-35-55.jpg",
    title: "Hududni ko'rish",
    category: "Samarqand",
    description: "Prezidentning loyiha hududini ko'rish marosimi",
  },
  {
    id: 21,
    src: "/images/5.jpg",
    title: "Tomat issiqxonasi",
    category: "Loyihalar",
    description: "Farg'ona vodiysida qurilgan tomat issiqxonasi",
  },
  {
    id: 22,
    src: "/images/6.jpg",
    title: "Bodring issiqxonasi",
    category: "Loyihalar",
    description: "Andijonda qurilgan bodring issiqxonasi",
  },
  {
    id: 23,
    src: "/images/9.jpg",
    title: "Sabzavot issiqxonasi",
    category: "Loyihalar",
    description: "Samarqandda qurilgan sabzavot issiqxonasi",
  },
  {
    id: 24,
    src: "/images/10.jpg",
    title: "Meva issiqxonasi",
    category: "Loyihalar",
    description: "Buxoro shahrida qurilgan meva issiqxonasi",
  },
  {
    id: 25,
    src: "/images/11.jpg",
    title: "Gullar issiqxonasi",
    category: "Loyihalar",
    description: "Qashqadaryo viloyatida qurilgan gullar issiqxonasi",
  },
  {
    id: 26,
    src: "/images/12.jpg",
    title: "Ziravorlar issiqxonasi",
    category: "Loyihalar",
    description: "Navoiyda qurilgan ziravorlar issiqxonasi",
  },
  {
    id: 27,
    src: "/images/13.jpg",
    title: "O'simliklar issiqxonasi",
    category: "Loyihalar",
    description: "Toshkent viloyatida qurilgan o'simliklar issiqxonasi",
  },
  {
    id: 28,
    src: "/images/14.jpg",
    title: "Dorivor o'simliklar issiqxonasi",
    category: "Loyihalar",
    description: "Farg'ona vodiysida qurilgan dorivor o'simliklar issiqxonasi",
  },
  {
    id: 29,
    src: "/images/15.jpg",
    title: "Tibbiy o'simliklar issiqxonasi",
    category: "Loyihalar",
    description: "Andijonda qurilgan tibbiy o'simliklar issiqxonasi",
  },
  {
    id: 30,
    src: "/images/16.jpg",
    title: "Organik issiqxona",
    category: "Loyihalar",
    description: "Samarqandda qurilgan organik issiqxona",
  },
  {
    id: 31,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469176/20201201_105259_q5us00.jpg",
    title: "Qozog'iston loyihasi",
    category: "Loyihalar",
    description: "Qozog'istonda qurilgan issiqxona majmui",
  },
  {
    id: 32,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/photo_2026-04-04_10-35-55_dvrnxd.jpg",
    title: "Tojikiston loyihasi",
    category: "Loyihalar",
    description: "Tojikistonda qurilgan issiqxona",
  },
  {
    id: 33,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567956/20210211_141225_yvl1wr.jpg",
    title: "Qirg'iziston loyihasi",
    category: "Loyihalar",
    description: "Qirg'izistonda qurilgan issiqxona",
  },
  {
    id: 34,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469052/IMG_5193_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80_rmwd8l.jpg",
    title: "Turkmaniston loyihasi",
    category: "Loyihalar",
    description: "Turkmanistonda qurilgan issiqxona",
  },
  {
    id: 35,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775570543/28_bnpx3z.jpg",
    title: "Isitish tizimi",
    category: "Loyihalar",
    description: "Zamonaviy isitish tizimi",
  },
  {
    id: 36,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469177/20201023_075858_hcs7fb.jpg",
    title: "Ventilyatsiya",
    category: "Loyihalar",
    description: "Issiqxona ventilyatsiya tizimi",
  },
  {
    id: 37,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469181/20201201_105435_hq3q9q.jpg",
    title: "Stelaj tizimi",
    category: "Loyihalar",
    description: "Zamonaviy stelaj tizimi",
  },
  {
    id: 38,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775567811/20201201_125915_z2qls3.jpg",
    title: "Avtomatlashtirish",
    category: "Loyihalar",
    description: "Issiqxona avtomatlashtirish tizimi",
  },
  {
    id: 39,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775468970/21_bv62xg.jpg",
    title: "Andijon loyihasi 1",
    category: "Loyihalar",
    description: "Andijon viloyatidagi issiqxona",
  },
  {
    id: 40,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775301447/22_qrawq5.jpg",
    title: "Andijon loyihasi 2",
    category: "Loyihalar",
    description: "Andijon viloyatidagi issiqxona majmui",
  },
  {
    id: 41,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469214/34_rthdcs.jpg",
    title: "Andijon loyihasi 3",
    category: "Loyihalar",
    description: "Andijon viloyatidagi issiqxona",
  },
  {
    id: 42,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469212/32_2_n7x8lw.jpg",
    title: "Andijon loyihasi 4",
    category: "Loyihalar",
    description: "Andijon viloyatidagi issiqxona",
  },
  {
    id: 43,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469212/38_shg9uf.jpg",
    title: "Andijon loyihasi 5",
    category: "Loyihalar",
    description: "Andijon viloyatidagi issiqxona",
  },
  {
    id: 44,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469051/photo_2026-04-04_10-35-53_kvt95v.jpg",
    title: "Samarqand loyihasi 1",
    category: "Loyihalar",
    description: "Samarqand viloyatidagi issiqxona",
  },
  {
    id: 45,
    src: "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1775469172/20201201_105047_elutha.jpg",
    title: "Samarqand loyihasi 2",
    category: "Loyihalar",
    description: "Samarqand viloyatidagi issiqxona majmui",
  },
  {
    id: 46,
    src: "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422619/IMG_1015_jf5dqm.jpg",
    title: "Yangi loyiha",
    category: "Loyihalar",
    description: "Yangi loyihadan lavhalar",
  },
  {
    id: 47,
    src: "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422624/IMG_0994_angy5l.jpg",
    title: "Yangi loyiha",
    category: "Loyihalar",
    description: "Yangi loyihadan lavhalar",
  },
  {
    id: 48,
    src: "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422625/IMG_1033_akpcc1.jpg",
    title: "Yangi loyiha",
    category: "Loyihalar",
    description: "Yangi loyihadan lavhalar",
  },
  {
    id: 49,
    src: "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422625/IMG_1030_dcuj82.jpg",
    title: "Yangi loyiha",
    category: "Loyihalar",
    description: "Yangi loyihadan lavhalar",
  },
  {
    id: 50,
    src: "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422629/IMG_1001_vft7io.jpg",
    title: "Yangi loyiha",
    category: "Loyihalar",
    description: "Yangi loyihadan lavhalar",
  },
  {
    id: 51,
    src: "https://res.cloudinary.com/duvvgqc3i/image/upload/q_auto/f_auto/v1776422629/IMG_1059_wwp8bn.jpg",
    title: "Yangi loyiha",
    category: "Loyihalar",
    description: "Yangi loyihadan lavhalar",
  },
];

const categories = ["Barchasi", "Loyihalar", "Samarqand"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [selectedImage, setSelectedImage] = useState<
    (typeof allImages)[0] | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    selectedCategory === "Barchasi"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const openImage = (image: (typeof allImages)[0]) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex((img) => img.id === image.id));
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.png"
              alt="UZ GROW Logo"
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galereya</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bizning loyihalarimiz, tadbirlarimiz va Prezident tashriflaridan
            lavhalar
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openImage(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {allImages.length}
            </h3>
            <p className="text-gray-600">Jami rasmlar</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">39</h3>
            <p className="text-gray-600">Loyihalar</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Download className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">6</h3>
            <p className="text-gray-600">Samarqand</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Share2 className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">Tadbirlar</p>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Container */}
              <div className="bg-black rounded-2xl overflow-hidden">
                <div className="aspect-video md:aspect-auto md:h-[80vh]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="p-6 bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedImage.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">
                          {selectedImage.category}
                        </Badge>
                        <span className="text-white/80 text-sm">
                          {currentIndex + 1} / {filteredImages.length}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white hover:bg-white/20"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Yuklab olish
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white hover:bg-white/20"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Ulashish
                      </Button>
                    </div>
                  </div>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

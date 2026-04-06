"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Rustamjon Rahmonov",
    position: "Asoschi va Bosh Direktor",
    avatar: "/images/logo.png",
    bio: "O'zbekistonlik innovator agrofaol va tadbirkor. 2017-yildan beri Markaziy Osiyo agrosektorida minglab fermerlar va agrobiznes vakillariga ma'lumot, ishonch va natija olib kelmoqda.",
    experience: "4+ yillik",
    achievements: ["150,000+ obunachi", "100+ muvaffaqiyatli loyiha", "Xalqaro hamkorliklar"],
    education: ["Qishloq xo'jaligi instituti", "Xalqaro biznes menejmenti"],
    skills: ["Agro-injiniring", "Biznes strategiyasi", "Innovatsion yechimlar"],
    email: "ceo@uzgrow.uz",
    phone: "+998 90 123-45-67",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Azizbek Karimov",
    position: "Texnik Direktor",
    avatar: "/images/team/azizbek.jpg",
    bio: "Issiqxona qurilish va texnologiyalar bo'yicha mutaxassis. 10+ yillik tajriba bilan zamonaviy agrotexnologiyalarni joriy etmoqda.",
    experience: "10+ yillik",
    achievements: ["50+ issiqxona loyihasi", "Texnik innovatsiyalar", "Sertifikatlangan mutaxassis"],
    education: ["Toshkent qishloq xo'jaligi instituti", "Xalqaro issiqxona texnologiyalari"],
    skills: ["Issiqxona dizayni", "Avtomatlashtirish", "Suv ta'minoti"],
    email: "azizbek@uzgrow.uz",
    phone: "+998 90 123-45-68",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Dilshod Jo'rayev",
    position: "Loyihalar Menejeri",
    avatar: "/images/team/dilshod.jpg",
    bio: "Katta miqyosli loyihalarni boshqarish va nazorat qilish bo'yicha mutaxassis. Muvaffaqiyatli loyihalarni vaqti yetkazishni ta'minlaydi.",
    experience: "8+ yillik",
    achievements: ["30+ yirik loyiha", "Loyiha boshqaruvi", "Mijozlar mamnunligi"],
    education: ["Qurilish muhandisligi instituti", "Loyiha menejmenti"],
    skills: ["Loyiha boshqarish", "Byudjet rejalashtirish", "Sifat nazorati"],
    email: "dilshod@uzgrow.uz",
    phone: "+998 90 123-45-69",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Gulnora Nazarova",
    position: "Marketing Direktori",
    avatar: "/images/team/gulnora.jpg",
    bio: "Marketing va brend strategiyalari bo'yicha mutaxassis. Kompaniya imidjini rivojlantirish va mijozlar bazasini kengaytirish uchun mas'ul.",
    experience: "6+ yillik",
    achievements: ["Marketing kampaniyalari", "Brend rivojlanishi", "Mijozlar ortishi"],
    education: ["Toshkent Iqtisodiyot universiteti", "Digital marketing kurslari"],
    skills: ["Digital marketing", "Kontent strategiyasi", "SMM"],
    email: "gulnora@uzgrow.uz",
    phone: "+998 90 123-45-70",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 5,
    name: "Javohir Toshmatov",
    position: "Moliya Direktori",
    avatar: "/images/team/javohir.jpg",
    bio: "Moliya va byudjet rejalashtirish bo'yicha mutaxassis. Kompaniya moliya salomatligini va samaradorligini ta'minlaydi.",
    experience: "7+ yillik",
    achievements: ["Moliya optimallashtirish", "Xarajat kamayishi", "Soliq to'g'rilari"],
    education: ["Toshkent Moliya instituti", "Xalqaro buxgalteriya"],
    skills: ["Moliya tahlili", "Byudjet rejalashtirish", "Soliq hisobi"],
    email: "javohir@uzgrow.uz",
    phone: "+998 90 123-45-71",
    linkedin: "#",
    twitter: "#",
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary px-4 py-2">
            <Users className="h-4 w-4 mr-2" />
            Bizning Jamoa
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Kuchli va tajribali mutaxassislar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har bir loyiha bizning jamoamiz tomonidan professional yondashuv bilan amalga oshiriladi.
            15+ yillik tajriba va 100+ muvaffaqiyatli loyiha.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => setSelectedMember(member)}
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-1">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.position}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {member.bio}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>{member.achievements.length} yutuq</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Contact */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4 mr-1" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-1" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4 mr-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Member Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center"
                >
                  ×
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-1">
                    <img
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {selectedMember.name}
                    </h3>
                    <p className="text-primary font-medium">{selectedMember.position}</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Bio */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Haqida
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        Tajriba
                      </h4>
                      <p className="text-muted-foreground">{selectedMember.experience}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Ta'lim
                      </h4>
                      <div className="space-y-1">
                        {selectedMember.education.map((edu, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span>{edu}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Yutuqlar
                      </h4>
                      <div className="space-y-1">
                        {selectedMember.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        Ko'nikmalar
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Aloqa
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{selectedMember.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{selectedMember.phone}</span>
                        </div>
                        {selectedMember.linkedin && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Linkedin className="h-4 w-4" />
                            <span>LinkedIn</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex gap-3 mt-6 pt-6 border-t">
                  <Button className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Email yuborish
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Qo'ng'iroq qilish
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

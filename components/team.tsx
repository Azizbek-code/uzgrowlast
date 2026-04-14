"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Lightbulb,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  MapPin,
  Briefcase,
  GraduationCap,
  User,
  Download,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const teamMembers = [
  {
    name: "Rustamjon Raxmonov",
    position: "Asoschi va Bosh Direktor",
    avatar: "/team/ceo.jpg",
    experience: "15+ yil",
    projects: "100+ loyiha",
    phone: "+998 55 515 22 33",
    email: "uzgrrow@gmail.com",
    achievements: [
      "Prezident loyihalari",
      "Xalqaro sertifikatlar",
      "Innovatsion yechimlar",
    ],
    skills: ["Agro-injiniring", "Biznes strategiyasi", "Loyihalar boshqaruvi"],
    education: [
      "Qishloq xo'jaligi instituti",
      "Biznes boshqaruvi",
      "Xalqaro treninglar",
    ],
  },
  {
    name: "Alisher Majidov",
    position: "Marketolog",
    avatar: "/team/marketolog.jpg",
    experience: "5+ yil",
    projects: "50+ loyiha",
    phone: "+998 55 515 22 23",
    email: "uzgrrow@gmail.com",
    achievements: [
      "Marketing strategiyalari",
      "Sotuvning o'sishi",
      "Mijozlar bazasi",
    ],
    skills: ["Digital marketing", "Kontent marketing", "SMM"],
    education: ["Marketing instituti", "Grafik dizayn", "Reklama kurslari"],
  },
  {
    name: "Abdulloh Sheraliyevich",
    position: "Sotuv Bolimi Raxbari",
    avatar:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1776089300/photo_2026-04-13_20-07-11_rhpvei.jpg",
    experience: "10+ yil",
    projects: "80+ loyiha",
    phone: "+998 55 515 22 23",
    email: "uzgrrow@gmail.com",
    achievements: ["Texnik yechimlar", "Avtomatlashtirish", "Injiniring"],
    skills: ["Texnik dizayn", "Avtomatlashtirish", "Muhandislik"],
    education: [
      "Texnik universitet",
      "Muhandislik kurslari",
      "Xalqaro sertifikatlar",
    ],
  },
  {
    name: "Gulbaxor Karaboyeva",
    position: "Assistent",
    avatar:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1776089222/image_8_foqgvg.png",
    experience: "10+ yil",
    projects: "50+ loyiha",
    phone: "+998 55 515 22 23",
    email: "uzgrrow@gmail.com",
    achievements: [
      "Moliyaviy rejalashtirish",
      "Byudjet optimizatsiyasi",
      "Hisobot tayyorlash",
    ],
    skills: [
      "Moliyaviy tahlil",
      "Excel",
      "1C:Buxgalteriya",
      "Byudjet rejalashtirish",
    ],
    education: ["Iqtisodiyot", "Moliya"],
  },
  {
    name: "Nafosat Botirboyeva",
    position: "Molyachi ",
    avatar:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1776089221/image_6_raudyy.png",
    experience: "3 yil",
    projects: "—",
    phone: "+998 55 515 22 23",
    email: "uzgrrow@gmail.com",
    achievements: [
      "Hisobotlarni tayyorlash",
      "Pul oqimini yuritish",
      "Buxgalteriyani tiklash",
    ],
    skills: ["1C", "Didox", "MyMehnat", "Hisobotlar"],
    education: ["Buxgalteriya kursi", "Yurist malaka kursi", "Inplus kursi"],
  },
  {
    name: "Dilnoza Rizqiyeva",
    position: "Buxgalter",
    avatar:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1776089301/photo_2026-04-13_18-06-10_zdzdtd.jpg",
    experience: "4+ yil",
    projects: "5+ kompaniya",
    phone: "+998 55 515 22 23",
    email: "uzgrrow@gmail.com",
    achievements: [
      "Bosh buxgalter",
      "Soliq hisobotlari",
      "1C 8.3.0 mutaxassisi",
    ],
    skills: [
      "1C 8.3.0",
      "My.soliq.uz",
      "EDO / Didox",
      "Mehnat.uz",
      "Bank klient",
    ],
    education: ["Moliya Studiya - Buxgalteriya kursi (2021)"],
  },
  {
    name: "Sardor Abdulatipov",
    position: "Ish Boshqaruvchi",
    avatar:
      "https://res.cloudinary.com/dnqi0bdjk/image/upload/v1776089301/photo_2026-04-13_20-07-13_chuzwi.jpg",
    experience: "2+ yil",
    projects: "1 kompaniya",
    phone: "+998 55 515 22 23",
    email: "uzgrrow@gmail.com",
    achievements: [
      "Xarid bo'limi rahbari",
      "Moliyaviy tahlil",
      "Marketing strategiyalari",
    ],
    skills: [
      "Aktiv sotuvlar",
      "Biznes muzokaralar",
      "Moliyaviy menejment",
      "Marketing",
    ],
    education: [
      "Xalqaro Iqtisodiyot Biznes Banki — Moliyaviy analist (2028, tugallanmagan)",
    ],
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#24B14B]/10 text-primary px-4 py-2">
            <Users className="h-4 w-4 mr-2" />
            {t("team.title")}
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("team.subtitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member: any, index: number) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => setSelectedMember(member)}
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-1 relative overflow-hidden">
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#24B14B]/10 flex items-center justify-center">
                        <User className="w-8 h-8 text-primary/60" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {member.position}
                    </p>
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
                    <span>
                      {member.achievements?.length || 0}{" "}
                      {t("team.achievementsLabel")}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.skills
                    ?.slice(0, 3)
                    .map((skill: string, skillIndex: number) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 p-1 relative overflow-hidden">
                    {selectedMember.avatar ? (
                      <Image
                        src={selectedMember.avatar}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#24B14B]/10 flex items-center justify-center">
                        <User className="w-10 h-10 text-primary/60" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {selectedMember.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {selectedMember.position}
                    </p>
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
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {t("team.experience")}
                      </h4>
                      <p className="text-muted-foreground">
                        {selectedMember.experience}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        {t("team.achievements")}
                      </h4>
                      <div className="space-y-1">
                        {selectedMember.achievements?.map(
                          (achievement: string, index: number) => (
                            <div
                              key={index}
                              className="text-sm text-muted-foreground"
                            >
                              {achievement}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Education */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        {t("team.education")}
                      </h4>
                      <div className="space-y-1">
                        {selectedMember.education?.map(
                          (edu: string, index: number) => (
                            <div
                              key={index}
                              className="text-sm text-muted-foreground"
                            >
                              {edu}
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        {t("team.skills")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills?.map(
                          (skill: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#24B14B]/10 text-primary rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Contact */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {t("team.contact")}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {selectedMember.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {selectedMember.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {selectedMember.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() =>
                            window.open(`mailto:${selectedMember.email}`)
                          }
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() =>
                            window.open(`tel:${selectedMember.phone}`)
                          }
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Qo'ng'iroq
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resume Download */}
                {selectedMember.resume && (
                  <div className="mt-6 pt-6 border-t">
                    <Button className="w-full gap-2" asChild>
                      <a href={selectedMember.resume} download>
                        <Download className="h-4 w-4" />
                        Resume yuklab olish
                      </a>
                    </Button>
                  </div>
                )}

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

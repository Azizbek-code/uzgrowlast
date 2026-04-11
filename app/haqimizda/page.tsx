import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Building,
  Globe,
  ChevronRight,
  BarChart3,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  { value: "4+", label: "Yillik tajriba" },
  { value: "95+", label: "Mamlakatda xizmat" },
  { value: "100+", label: "Loyihalar" },
  { value: "50+", label: "Mijozlar" },
];

const values = [
  {
    icon: Award,
    title: "Sifat",
    description: "Har bir loyihada eng yuqori standartlarga amal qilamiz",
  },
  {
    icon: Target,
    title: "Innovatsiya",
    description: "Eng zamonaviy texnologiyalarni qo'llaymiz",
  },
  {
    icon: Heart,
    title: "Ishonch",
    description: "Mijozlarimiz bilan shaffof va halol munosabat",
  },
  {
    icon: Users,
    title: "Hamkorlik",
    description: "Uzoq muddatli va o'zaro manfaatli hamkorlik",
  },
];

export default function HaqimizdaPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#24B14B]/10 text-primary rounded-full text-sm font-medium mb-6">
              Biz haqimizda
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              4+ yillik tajriba
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              95 ta mamlakatda sizning yoningizda. UZ-GROW — zamonaviy issiqxona
              qurilishi va quruvchi firma sifatida faoliyat yurituvchi
              kompaniya. Bizning maqsadimiz — O'zbekistonda yuqori
              samaradorlikka ega, innovatsion va eksportbop issiqxona
              infratuzilmasini rivojlantirish.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#24B14B]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Biz bilan tanishing
              </h2>
              <p className="text-muted-foreground text-lg">
                60 yillik tajriba va 95 mamlakatdagi xizmatimiz haqida videoni
                tomosha qiling
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                src="/about-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
                controls
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border hover:border-primary/30 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#24B14B]/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Missiya
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mahalliy va xalqaro standartlarga mos, barqaror va rentabelli
                issiqxona loyihalarini amalga oshirish orqali mijozlar
                daromadini oshirish.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border hover:border-primary/30 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#24B14B]/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Vizyon
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Markaziy Osiyoda yetakchi agro-injiniring kompaniyaga aylanish
                va zamonaviy issiqxonalarni eksport qilish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#24B14B]/10 text-primary rounded-full text-sm font-medium mb-4">
              Qadriyatlar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Bizning tamoyillarimiz
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#24B14B]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#24B14B] group-hover:scale-110 transition-all">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-3xl flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <Building className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Video joylashtiring</p>
                <p className="text-sm text-muted-foreground/60">
                  Kompaniya haqida video
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nega aynan UZ-GROW?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Biz bilan ishlashning asosiy afzalliklari
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Xalqaro standartlar
              </h3>
              <p className="text-muted-foreground">
                Yevropa va Osiyo standartlariga mos issiqxonalar
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Kafolat
              </h3>
              <p className="text-muted-foreground">
                Barcha ishlar uchun to'liq servis va kafolat
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Mutaxassislar
              </h3>
              <p className="text-muted-foreground">
                Tajribali injinerlar va agronomlar jamoasi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience & Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bizning jamoamiz va auditoriyamiz
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kompaniya rahbariyati va bizning qadrli mijozlarimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Leadership */}
            <Card className="overflow-hidden shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Rahbariyat</CardTitle>
                    <CardDescription>Kompaniya boshqaruvi</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Rustamjon Rahmonov</h4>
                        <p className="text-sm text-gray-600">CEO & Asoschi</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <span>4+ yillik tajriba</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span>100+ muvaffaqiyatli loyiha</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>150K+ ijtimoiy tarmoq obunachilari</span>
                    </div>
                  </div>

                  <Link href="/rahbariyat">
                    <Button className="w-full">
                      Rahbariyat haqida ko'proq
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Audience */}
            <Card className="overflow-hidden shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Auditoriya</CardTitle>
                    <CardDescription>Bizning mijozlarimiz</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        87%
                      </div>
                      <div className="text-sm text-gray-600">Ayol mijozlar</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        25-55
                      </div>
                      <div className="text-sm text-gray-600">Yosh oralig'i</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span>O'zbekiston, Qozog'iston, Qirg'iziston</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span>1.5-3M oylik ko'rishlar</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Heart className="w-4 h-4 text-red-600" />
                      <span>Agro-biznes vakillari</span>
                    </div>
                  </div>

                  <Link href="/asso-design-media">
                    <Button variant="outline" className="w-full">
                      Media hamkorlik
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

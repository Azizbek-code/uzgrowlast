import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "Maxfiylik siyosati - UZ-GROW | Ma'lumotlarni himoya qilish",
  description:
    "UZ-GROW maxfiylik siyosati. Shaxsiy ma'lumotlaringizni qanday to'playmiz, qanday maqsadda ishlatamiz va qanday himoya qilamiz.",
  keywords:
    "UZ-GROW maxfiylik siyosati, shaxsiy ma'lumotlar, GDPR, ma'lumotlarni himoya qilish, cookies",
  openGraph: {
    title: "Maxfiylik siyosati - UZ-GROW | Ma'lumotlarni himoya qilish",
    description:
      "UZ-GROW maxfiylik siyosati. Shaxsiy ma'lumotlaringizni qanday to'playmiz va himoya qilamiz.",
    images: ["/images/logo.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Maxfiylik siyosati
            </h1>
            <p className="text-xl text-gray-600">
              Oxirgi yangilanish: 5-aprel, 2026-yil
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                1. Ma'lumotlar to'plami
              </h2>
              <p className="text-gray-600 leading-relaxed">
                UZ-GROW sifatida biz sizdan quyidagi shaxsiy ma'lumotlarni
                to'plamiz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Ism, familiya, telefon raqami, email manzili</li>
                <li>Kompaniya ma'lumotlari va manzili</li>
                <li>Loyiha talablari va texnik xususiyatlari</li>
                <li>Ishonch telefon raqami va qo'shimcha kontaktlar</li>
                <li>
                  Ijtimoiy tarmoqlardagi profilingiz ma'lumotlari (faqat izoh
                  bilan)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-green-600" />
                2. Ma'lumotlardan foydalanish maqsadi
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Biz to'plagan ma'lumotlarni quyidagi maqsadlarda ishlatamiz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Xizmatlarimizni taqdim etish va yaxshilash</li>
                <li>Mijozlar bilan aloqa o'rnatish va saqlash</li>
                <li>Loyihalarni loyihalash va amalga oshirish</li>
                <li>Shartnoma va huquqiy majburiyatlarni bajarish</li>
                <li>Xizmatlarimiz sifatini nazorat qilish</li>
                <li>
                  Marketing va reklama maqsadlarida (faqat roziligiz bilan)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-600" />
                3. Ma'lumotlarni ochiqlash va ulashish
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Biz sizning shaxsiy ma'lumotlaringizni quyidagilar bilan
                bo'lishishimiz mumkin:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Hamkor kompaniyalar va pudratchilar (loyiha ijrosi uchun)
                </li>
                <li>Huquqiy organlar (qonun talabiga ko'ra)</li>
                <li>Moliyaviy muassasalar (to'lov va soliq maqsadlarida)</li>
                <li>Sizning roziligiz bilan boshqa uchinchi shaxslar</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>Eslatma:</strong> Biz hech qachon sizning shaxsiy
                    ma'lumotlaringizni uchinchi shaxslarga sotmaymiz yoki
                    qonunga zid ravishda ulashmaymiz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-orange-600" />
                4. Ma'lumotlarni saqlash muddati
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Biz sizning ma'lumotlaringizni quyidagi muddatlar davomida
                saqlaymiz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Kontakt ma'lumotlari - shartnoma muddati davomida + 5 yil
                </li>
                <li>Loyiha hujjatlari - 10 yil</li>
                <li>Moliyaviy ma'lumotlar - 7 yil</li>
                <li>Ijtimoiy media ma'lumotlari - 3 yil</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Muddat tugagach, ma'lumotlar xavfsiz ravishda o'chiriladi.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-600" />
                5. Ma'lumotlarni himoya qilish
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Biz quyidagi choralarni ko'ramiz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>SSL shifrlash texnologiyasidan foydalanamiz</li>
                <li>Serverlarni muntazam ravishda yangilaymiz</li>
                <li>Xodimlar maxfiylik shartnomasini imzolaydilar</li>
                <li>Kirish huquqini cheklaymiz</li>
                <li>Muntazam xavfsizlik tekshiruvlarini o'tkazamiz</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Huquqlaringiz
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Siz quyidagi huquqlarga egasiz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>O'z ma'lumotlaringizni ko'rish huquqi</li>
                <li>Noto'g'ri ma'lumotlarni to'g'rilash huquqi</li>
                <li>
                  Ma'lumotlarni o'chirish huquqi (ma'lum shartlar asosida)
                </li>
                <li>Ma'lumotlarni ko'chirish huquqi (portability)</li>
                <li>Qayta ishlashga qarshi etiroz bildirish huquqi</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                7. Aloqa ma'lumotlari
              </h2>
              <p className="text-blue-800 leading-relaxed">
                Maxfiylik siyosati bo'yicha savollaringiz bo'lsa, biz bilan
                quyidagi manzillar orqali bog'laning:
              </p>
              <div className="mt-4 space-y-2 text-blue-800">
                <p>
                  <strong>Email:</strong> privacy@uzgrow.uz
                </p>
                <p>
                  <strong>Telefon:</strong> +998 93 435-23-13
                </p>
                <p>
                  <strong>Manzil:</strong> Toshkent sh. Rayhona ko'chasi 107-uy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

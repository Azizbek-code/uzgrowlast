import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, CheckCircle, AlertCircle, Scale, Users, Shield } from "lucide-react"

export const metadata = {
  title: 'Foydalanish shartlari - UZ-GROW | Xizmatlar shartnomasi',
  description: 'UZ-GROW foydalanish shartlari. Veb-saytimizdan foydalanish qoidalari, xizmatlar shartlari va huquqiy majburiyatlar.',
  keywords: 'UZ-GROW foydalanish shartlari, xizmatlar shartnomasi, huquqiy shartlar, veb-sayt qoidalari',
  openGraph: {
    title: 'Foydalanish shartlari - UZ-GROW | Xizmatlar shartnomasi',
    description: 'UZ-GROW foydalanish shartlari. Veb-saytimizdan foydalanish qoidalari va xizmatlar shartlari.',
    images: ['/images/logo.png'],
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Foydalanish shartlari
            </h1>
            <p className="text-xl text-gray-600">
              Oxirgi yangilanish: 5-aprel, 2026-yil
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                1. Umumiy qoidalar
              </h2>
              <p className="text-gray-600 leading-relaxed">
                UZ-GROW veb-saytidan foydalanish quyidagi shartlarga bo'ysunadi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Siz 18 yoshga to'lgan va huquqiy jihatdan to'liq qobiliyatli bo'lishingiz kerak</li>
                <li>Veb-saytdan faqat qonunga zid ravishda foydalanishingiz mumkin</li>
                <li>Boshqa foydalanuvchilarning huquqlariga hurmat ko'rsating</li>
                <li>Shaxsiy ma'lumotlaringizni to'g'ri kiritishingiz kerak</li>
                <li>Bizning xizmatlarimizdan qonunga zid foydalanmang</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                2. Xizmatlar
              </h2>
              <p className="text-gray-600 leading-relaxed">
                UZ-GROW quyidagi xizmatlarni taqdim etadi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Issiqxona loyihalash va qurish bo'yicha konsalting</li>
                <li>Agro-injiniring xizmatlari</li>
                <li>Texnik yechimlar va maslahatlar</li>
                <li>Loyihalarni boshqarish</li>
                <li>Materiallar va uskunalar tanlash</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>Eslatma:</strong> Biz xizmatlarni bajarish kafolatini bermaymiz, 
                    faqat maslahat va konsalting xizmatlarini ko'rsatamiz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-purple-600" />
                3. To'lovlar
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To'lov shartlari va tartibi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Konsalting xizmatlari oldindan to'lanadi</li>
                <li>To'lov naqd pul yoki bank orqali amalga oshiriladi</li>
                <li>To'lov qilingan xizmatlar qaytarilmaydi</li>
                <li>Qo'shimcha xizmatlar uchun alohida to'lov talab qilinadi</li>
                <li>Barcha to'lovlar hujjatlashtiriladi</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-600" />
                4. Mas'uliyatni cheklash
              </h2>
              <p className="text-gray-600 leading-relaxed">
                UZ-GROW quyidagi holatlarda mas'uliyatni cheklaydi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Force majeure holatlarida (tabiiy ofatlar, urushlar)</li>
                <li>Mijoz tomonidan noto'g'ri ma'lumot berilganda</li>
                <li>Uchinchi tomonlar aybiganda</li>
                <li>Qonun o'zgarishi sababli</li>
                <li>Texnik nosozliklar tufayli (bizning aybimiz bo'lmasa)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellektual mulk</h2>
              <p className="text-gray-600 leading-relaxed">
                Veb-sayt materiallari bizning intellektual mulkimiz:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Barcha matnlar, rasmlar, dizaynlar bizga tegishli</li>
                <li>Ruxsatsiz foydalanish taqiqlanadi</li>
                <li>Materiallardan tijorat maqsadida foydalanish mumkin emas</li>
                <li>Bizning roziligimiz bilan qayta nashr qilish mumkin</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Shartnomani bekor qilish</h2>
              <p className="text-gray-600 leading-relaxed">
                Quyidagi holatlarda shartnoma bekor qilinadi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Ikkala tomon ham rozilik bildirganda</li>
                <li>Bir tomon shartlarni buzganda</li>
                <li>Qonunga zid faoliyat qilganda</li>
                <li>15 kun oldin xabardor qilganda</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Nizolarni hal qilish</h2>
              <p className="text-gray-600 leading-relaxed">
                Barcha nizolar quyidagi tartibda hal qilinadi:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 mt-4">
                <li>Suhbat orqali kelishuvga harakat qilish</li>
                <li>Tegishli vositalar orqali hal qilish</li>
                <li>Toshkent shahar sudiga murojaat qilish</li>
                <li>O'zbekiston Respublikasi qonunlari asosida</li>
              </ol>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h2 className="text-2xl font-bold text-green-900 mb-4">8. Qo'shimcha shartlar</h2>
              <ul className="list-disc list-inside text-green-800 space-y-2">
                <li>Bu shartnoma O'zbekiston Respublikasi qonunlariga muvofiq tuzilgan</li>
                <li>Shartnomaga o'zgartirish kiritish huquqi bizda saqlanadi</li>
                <li>Veb-saytdan foydalanish bilan siz ushbu shartlarni qabul qilasiz</li>
                <li>Savollaringiz bo'lsa biz bilan bog'laning</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-green-300">
                <p className="text-green-800 font-medium">
                  UZ-GROW Agro-Injiniring kompaniyasi
                </p>
                <p className="text-green-600 text-sm mt-1">
                  Toshkent shahri, Rayhona ko'chasi 107-uy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

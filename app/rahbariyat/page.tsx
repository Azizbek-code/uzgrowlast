import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CEO } from "@/components/ceo"

export const metadata = {
  title: 'Rahbariyat - UZ-GROW | CEO Rustamjon Rahmonov',
  description: 'UZ-GROW kompaniyasi rahbariyati. CEO Rustamjon Rahmonov - 8+ yillik tajribaga ega agro-injiniring sohasi mutaxassisi. Kompaniya viziyasi va filosofiyasi.',
  keywords: 'UZ-GROW CEO, Rustamjon Rahmonov, rahbariyat, agro-injiniring, biznes lider, O\'zbekiston tadbirkori',
  openGraph: {
    title: 'Rahbariyat - UZ-GROW | CEO Rustamjon Rahmonov',
    description: 'UZ-GROW kompaniyasi rahbariyati. CEO Rustamjon Rahmonov - 8+ yillik tajribaga ega agro-injiniring sohasi mutaxassisi.',
    images: ['/images/logo.png'],
  },
}

export default function RahbariyatPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CEO />
      <Footer />
    </main>
  )
}

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export const metadata = {
  title: "Biz haqimizda | UZ-GROW",
  description: "UZ-GROW kompaniyasi haqida batafsil ma'lumot. 15+ yillik tajriba, 100+ muvaffaqiyatli loyiha va professionallik.",
  keywords: "UZ-GROW haqida, issiqxona kompaniyasi, agro-injiniring, tajriba",
  openGraph: {
    title: "Biz haqimizda | UZ-GROW",
    description: "UZ-GROW kompaniyasi haqida batafsil ma'lumot. 15+ yillik tajriba, 100+ muvaffaqiyatli loyiha.",
    images: ["/images/logo.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}

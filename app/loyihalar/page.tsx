import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { heading1, bodyLarge } from "@/styles/typography";

export default function LoyihalarPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}


        {/* Projects Section */}
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export const metadata = {
  title: "Loyihalar - UZ-GROW",
  description: "UZ-GROW kompaniyasining muvaffaqiyatli issiqxona loyihalari. Prezident tashriflari va qishloq xo'jaligi loyihalari.",
  keywords: ["UZ-GROW", "loyihalar", "issiqxona", "qurilish", "prezident tashrifi", "qishloq xo'jaligi"],
};

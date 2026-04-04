import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { International } from "@/components/international";
import { Regional } from "@/components/regional";
import { SamarqandVideo } from "@/components/samarqand-video";
import { Gallery } from "@/components/gallery";
import { AssoDesignMedia } from "@/components/asso-design-media";
import { Technology } from "@/components/technology";
import { Investors } from "@/components/investors";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <International />
      <Regional />
      <SamarqandVideo />
      <Gallery />
      <AssoDesignMedia />
      <Technology />
      <Investors />
      <Contact />
      <Footer />
    </main>
  );
}

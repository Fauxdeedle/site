import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Your Name"
          description="Full-stack developer building things that matter"
        />
        <About />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

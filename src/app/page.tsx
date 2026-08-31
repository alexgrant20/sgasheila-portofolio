import { projectImages } from "@/lib/project-images";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  // Read once on the server; projects without a screenshot fall back to art.
  const images = projectImages();

  return (
    <div className="mx-auto max-w-[1600px] p-3 sm:p-5">
      {/* No overflow-hidden here: it would break the sticky nav. Corners are
          rounded on the panel and repeated on the footer instead. */}
      <div className="rounded-[2rem] bg-cream shadow-[0_24px_80px_-40px_rgba(27,27,27,0.5)]">
        <Nav />
        <main>
          <Hero />
          <Services />
          <Stats />
          <Experience />
          <Work images={images} />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

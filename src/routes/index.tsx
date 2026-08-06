import { createFileRoute } from "@tanstack/react-router";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Creations } from "@/components/Creations";
import { Achievements } from "@/components/Achievements";
import { Documentaries } from "@/components/Documentaries";
import { Memories } from "@/components/Memories";
import { Footer } from "@/components/Footer";

const title = "Rituparno Ghosh — A Creative Soul";
const description =
  "A cinematic editorial tribute to the Bengali filmmaker, writer, actor, and cultural figure.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Creations />
        <Achievements />
        <Documentaries />
        <Memories />
      </main>
      <Footer />
    </div>
  );
}

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
  "An elegant, monochrome tribute to Rituparno Ghosh — one of India's most celebrated filmmakers. Discover his films, national awards, documentaries, and memories.";
const url = "https://rudra-da.vercel.app/";
const image = "https://rudra-da.vercel.app/og-image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Shohail Mahmud" },
      // Open Graph (Facebook, WhatsApp, LinkedIn, iMessage)
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "RUDRA DA" },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
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

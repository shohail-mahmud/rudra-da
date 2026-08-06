import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Creations", href: "#creations" },
  { label: "Achievements", href: "#achievements" },
  { label: "Documentaries", href: "#documentaries" },
  { label: "Memories", href: "#memories" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        {/* Top divider and nav */}
        <div className="border-t border-stone pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <nav className="flex flex-wrap gap-6 sm:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="link-underline font-body text-xs uppercase tracking-[0.15em] text-ash hover:text-ink transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-ash hover:text-ink transition-colors"
            >
              Back to top
              <ArrowUp size={14} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Closing composition: portrait + typography */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="my-16 sm:my-20 lg:my-24 grid gap-10 lg:grid-cols-12 items-end"
        >
                    <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="overflow-hidden bg-warm max-w-xs lg:max-w-sm mx-auto lg:mx-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Rituparno_Ghosh_alongwith_actor_Shefali_Shah_%28cropped%29.jpg"
                alt="Rituparno Ghosh"
                className="w-full object-cover mono-image"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-10">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-ink leading-[0.9]">
              Rituparno Ghosh
            </h2>
            <div className="mt-8 sm:mt-10 pt-6 border-t border-stone">
              <p className="font-display text-2xl sm:text-3xl tracking-tight text-charcoal">
                1963 — 2013
              </p>
              <p className="mt-3 font-body text-sm uppercase tracking-[0.3em] text-ash">
                A Creative Soul
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom credits */}
        <div className="border-t border-stone pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-[11px] uppercase tracking-[0.1em] text-fog">
            A cinematic editorial tribute
          </p>
          <p className="font-body text-[11px] uppercase tracking-[0.1em] text-fog">
            Designed & built by{" "}
            <a
              href="https://www.instagram.com/shohailmahmud09/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-white/30 hover:decoration-ink transition-colors"
            >
              Shohail Mahmud
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

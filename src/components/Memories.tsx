import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { memories } from "../data/memories";

export function Memories() {
  return (
    <section id="memories" className="bg-ink py-24 sm:py-32 lg:py-28 text-paper">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <SectionHeading className="text-paper">Memories</SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-white/60"
          >
            Fragments of a life in cinema — words, images, and quiet recollections from collaborators, friends, and the city that shaped him.
          </motion.p>
        </div>

        <div className="space-y-20 sm:space-y-28 lg:space-y-24">
          {memories.map((memory, index) => {
            if (memory.type === "quote") {
              return (
                <motion.div
                  key={memory.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.05 }}
                  className={`grid gap-8 lg:grid-cols-12 ${
                    index === 0 ? "" : "lg:text-center"
                  }`}
                >
                  <div className={`lg:col-span-8 ${index === 0 ? "" : "lg:col-span-8 lg:col-start-3"}`}>
                    <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug tracking-tight text-white">
                      “{memory.text}”
                    </blockquote>
                    <div className={`mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 ${index === 0 ? "" : "lg:justify-center"}`}>
                      <span className="font-body text-sm uppercase tracking-[0.15em] text-white/70">
                        {memory.attribution}
                      </span>
                      {memory.source && (
                        <>
                          <span className="hidden sm:inline text-white/30">—</span>
                          <span className="font-body text-xs uppercase tracking-[0.1em] text-white/40">
                            {memory.source}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (memory.type === "image") {
              return (
                <motion.figure
                  key={memory.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid gap-6 lg:grid-cols-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-7 ${
                      index % 2 === 1 ? "lg:col-start-6" : ""
                    }`}
                  >
                    {memory.image ? (
                      <img
                        src={memory.image}
                        alt={memory.caption || "Memory"}
                        className="w-full object-cover mono-image"
                      />
                    ) : (
                      <ImagePlaceholder label={memory.caption || "IMAGE PLACEHOLDER"} aspectRatio="aspect-[4/3]" className="w-full" />
                    )}
                  </div>
                  <figcaption
                    className={`lg:col-span-4 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1 lg:text-right" : "lg:col-start-9"
                    }`}
                  >
                    {memory.year && (
                      <span className="block mb-3 font-display text-4xl sm:text-5xl tracking-tight text-white/20">
                        {memory.year}
                      </span>
                    )}
                    <p className="font-body text-sm uppercase tracking-[0.15em] text-white/50">
                      {memory.caption}
                    </p>
                  </figcaption>
                </motion.figure>
              );
            }

            return (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12"
              >
                <div className="lg:col-span-6 lg:col-start-4 border-l border-white/20 pl-6 sm:pl-8">
                  <p className="font-body text-base sm:text-lg leading-relaxed text-white/70">
                    {memory.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

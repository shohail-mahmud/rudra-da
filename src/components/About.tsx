import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const labels = ["Filmmaker", "Writer", "Actor", "Cultural Figure"];

export function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-32 lg:py-28">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left column: heading + labels */}
          <div className="lg:col-span-6">
            <SectionHeading className="mb-8 sm:mb-12">About</SectionHeading>
            <div className="mt-8 sm:mt-10">
              <p className="mb-5 font-body text-[10px] uppercase tracking-[0.2em] text-fog">
                Roles
              </p>
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
                {labels.map((label, index) => (
                  <div
                    key={label}
                    className="flex items-baseline gap-4 border-t border-stone pt-4"
                  >
                    <span className="font-body text-[10px] uppercase tracking-[0.15em] text-fog w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl sm:text-2xl tracking-tight text-charcoal">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: biography */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="space-y-6 sm:space-y-8"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight text-charcoal">
                Rituparno Ghosh was a singular force in Indian cinema — a writer-director who returned the Bengali middle class to the theatre with stories of emotional precision and social daring.
              </p>

              <div className="h-px w-24 bg-stone" />

                <div className="space-y-5 text-base sm:text-lg leading-relaxed text-ash font-body">
                <p>
                  Born in Kolkata in 1963, Ghosh came of age in a city steeped in literature, theatre, and the films of Satyajit Ray. He began his career as a copywriter before making his directorial debut with <em>Hirer Angti</em> (1992). Two years later, <em>Unishe April</em> announced a major talent: a filmmaker unafraid to slow time, listen to women, and expose the fault lines within families.
                </p>
                <p>
                  Over the next two decades he directed nineteen feature films in Bengali, Hindi, and English — including <em>Dahan</em>, <em>Bariwali</em>, <em>Utsab</em>, <em>Chokher Bali</em>, <em>Raincoat</em>, <em>Dosar</em>, <em>The Last Lear</em>, <em>Abohoman</em>, and <em>Chitrangada</em>. His cinema was literary without being literal, classical without being antique. He had an extraordinary ear for dialogue and an even deeper gift for silence.
                </p>
                <p>
                  Ghosh was also a prolific writer — of screenplays, lyrics, short stories, profiles, and editorials. In the final years of his life he stepped in front of the camera, acting with the same vulnerability he had long drawn from others. His work remains a boundary-crossing archive of modern Bengal: its hierarchies, its desires, and its quiet revolutions.
                </p>
              </div>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              <div className="overflow-hidden bg-warm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Rituparno_Ghosh_and_Amitabh_Bachchan_at_the_set_of_The_Last_Lear.jpg"
                  alt="Rituparno Ghosh with Amitabh Bachchan on the set of The Last Lear"
                  className="w-full object-cover mono-image"
                />
              </div>
              <figcaption className="mt-3 font-body text-xs uppercase tracking-[0.15em] text-fog">
                On the set of The Last Lear with Amitabh Bachchan, 2007
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}

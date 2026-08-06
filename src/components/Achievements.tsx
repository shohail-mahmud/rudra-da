import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { awards } from "../data/awards";

export function Achievements() {
  return (
    <section id="achievements" className="bg-paper py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <SectionHeading>Achievements</SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-ash"
          >
            Ghosh won twelve National Film Awards across direction, screenplay, and feature film categories, alongside recognition at Berlin, Cannes, Locarno, Karlovy Vary, and festivals across Asia.
          </motion.p>
        </div>

        <div className="mb-16 sm:mb-20 grid gap-4 sm:grid-cols-2">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden bg-warm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Pratibha_Devisingh_Patil_presenting_the_Swarna_Kamal_Award_to_Shri_Rituparno_Gosh_for_the_Best_Direction_%28Bengali_Film_Abohomaan%29%2C_at_the_57th_National_Film_Awards_function%2C_in_New_Delhi_on_October_22%2C_2010.jpg"
                alt="Rituparno Ghosh receiving the National Award for Best Direction for Abohoman from President Pratibha Patil"
                className="aspect-[4/3] w-full object-cover mono-image"
              />
            </div>
            <figcaption className="mt-3 font-body text-[10px] uppercase tracking-[0.15em] text-fog">
              Receiving the National Award for Best Direction for Abohoman, 2010
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="overflow-hidden bg-warm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Pranab_Mukherjee_presenting_the_Rajat_Kamal_Special_Jury_Award_to_Ms._Rituparno_Ghosh%2C_for_Chitrangada_%28Bengali%29%2C_at_the_60th_National_Film_Awards_function.jpg"
                alt="Rituparno Ghosh receiving the Special Jury Award for Chitrangada from President Pranab Mukherjee"
                className="aspect-[4/3] w-full object-cover mono-image"
              />
            </div>
            <figcaption className="mt-3 font-body text-[10px] uppercase tracking-[0.15em] text-fog">
              Receiving the Special Jury Award for Chitrangada, 2012
            </figcaption>
          </motion.figure>
        </div>

        <div className="border-t border-stone">
          {awards.map((award, index) => (
            <motion.div
              key={`${award.film}-${award.category}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="grid grid-cols-12 gap-4 border-b border-stone py-5 sm:py-6 items-baseline"
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-display text-lg sm:text-xl tracking-tight text-ink">
                  {award.year}
                </span>
              </div>
              <div className="col-span-10 sm:col-span-4 lg:col-span-3">
                <h3 className="font-display text-lg sm:text-xl tracking-tight text-charcoal">
                  {award.film}
                </h3>
              </div>
              <div className="col-span-12 sm:col-span-4 lg:col-span-4 sm:col-start-6 lg:col-start-5">
                <p className="font-body text-sm sm:text-base text-ash">
                  {award.award}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3 lg:col-span-4 sm:text-right">
                <p className="font-body text-xs sm:text-sm uppercase tracking-[0.1em] text-fog">
                  {award.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

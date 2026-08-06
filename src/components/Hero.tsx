import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Portrait background */}
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/Rituparno.jpg"
          alt="Rituparno Ghosh"
          className="h-full w-full object-cover object-top mono-image opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/80" />
      </div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-[1800px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[clamp(1.35rem,7.2vw,2.75rem)] sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.85] tracking-tighter text-white whitespace-nowrap"
          >
            RITUPARNO <br className="hidden sm:block" /> GHOSH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 sm:mt-6 font-body text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] text-white/80"
          >
            A Creative Soul
          </motion.p>
        </div>
      </div>
    </section>
  );
}

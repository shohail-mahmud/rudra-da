import { motion } from "framer-motion";
import type { Film } from "../data/films";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface FilmCardProps {
  film: Film;
  onSelect: (film: Film) => void;
  index: number;
}

export function FilmCard({ film, onSelect, index }: FilmCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-pointer"
      onClick={() => onSelect(film)}
    >
      <div className="relative overflow-hidden bg-ink">
        {film.poster ? (
          <img
            src={film.poster}
            alt={`${film.title} poster`}
            loading="lazy"
            decoding="async"
            className="aspect-[2/3] w-full object-cover mono-image transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder label={film.title} className="w-full" />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="p-5 sm:p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.15em] text-white/60">
              {film.year} · {film.language}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl leading-none tracking-tight text-white mb-3">
              {film.title}
            </h3>
            <p className="line-clamp-3 font-body text-sm leading-relaxed text-white/80 mb-5">
              {film.description}
            </p>
            {film.streamingUrl ? (
              <a
                href={film.streamingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block border border-white/40 px-5 py-2 font-body text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-ink touch-target"
              >
                Watch Now
              </a>
            ) : (
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-white/50">
                Not available for free streaming.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Static title below card */}
      <div className="mt-4">
        <h3 className="font-display text-lg sm:text-xl tracking-tight text-ink group-hover:text-ash transition-colors">
          {film.title}
        </h3>
        <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-fog">
          {film.year}
        </p>
      </div>
    </motion.article>
  );
}

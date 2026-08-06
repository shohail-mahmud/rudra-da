import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Film } from "../data/films";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface FilmModalProps {
  film: Film | null;
  onClose: () => void;
}

export function FilmModal({ film, onClose }: FilmModalProps) {
  useEffect(() => {
    if (!film) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [film, onClose]);

  return (
    <AnimatePresence>
      {film && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink/95 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-paper"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 p-2 text-ink hover:text-ash transition-colors"
              aria-label="Close"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <div className="grid md:grid-cols-[1fr_1.4fr]">
              {/* Poster */}
              <div className="bg-ink">
                {film.poster ? (
                  <img
                    src={film.poster}
                    alt={`${film.title} poster`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover mono-image"
                  />
                ) : (
                  <ImagePlaceholder label={film.title} className="h-full min-h-[400px] w-full" />
                )}
              </div>

              {/* Details */}
              <div className="p-6 sm:p-10 lg:p-12">
                <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-fog">
                  {film.year} · {film.language}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink mb-2">
                  {film.title}
                </h2>
                {film.originalTitle && (
                  <p className="font-body text-sm text-ash mb-6">{film.originalTitle}</p>
                )}

                <p className="font-body text-base sm:text-lg leading-relaxed text-charcoal mb-8">
                  {film.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-fog mb-3">
                    Cast
                  </h4>
                  <p className="font-body text-sm sm:text-base text-ash">
                    {film.cast.join(", ")}
                  </p>
                </div>

                {film.awards && film.awards.length > 0 && (
                  <div className="mb-10">
                    <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-fog mb-3">
                      Recognition
                    </h4>
                    <ul className="space-y-2">
                      {film.awards.map((award) => (
                        <li key={award} className="font-body text-sm text-ash">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href={film.streamingUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-ink px-8 py-3 font-body text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-charcoal"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

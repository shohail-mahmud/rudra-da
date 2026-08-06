import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { FilmCard } from "./FilmCard";
import { FilmModal } from "./FilmModal";
import { films, type Film } from "../data/films";

export function Creations() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  return (
    <section id="creations" className="bg-warm py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="mb-12 sm:mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading>Creations</SectionHeading>
          <p className="max-w-md font-body text-sm leading-relaxed text-ash">
            A streaming-library view of nineteen feature films across Bengali, Hindi, and English — each one a study in restraint, desire, and the architecture of feeling.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {films.map((film, index) => (
            <FilmCard
              key={film.id}
              film={film}
              onSelect={setSelectedFilm}
              index={index}
            />
          ))}
        </div>
      </div>

      <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />
    </section>
  );
}

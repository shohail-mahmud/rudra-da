import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

interface DocumentaryFeatureProps {
  title: string;
  year: string;
  director: string;
  description: string;
  note: string;
  videoUrl: string;
  videoTitle: string;
  action?: {
    label: string;
    href: string;
  };
  index: number;
}

function DocumentaryFeature({
  title,
  year,
  director,
  description,
  note,
  videoUrl,
  videoTitle,
  action,
  index,
}: DocumentaryFeatureProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="mb-16 sm:mb-20 last:mb-0"
    >
      <div className="relative mb-6 overflow-hidden bg-ink">
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-2 font-body text-xs uppercase tracking-[0.2em] text-white/50">
            {year} · Directed by {director}
          </p>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-paper">
            {title}
          </h3>
          <p className="mt-4 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-white/70">
            {description}
          </p>
        </div>
        <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/10">
          <div className="space-y-4">
            <p className="font-body text-sm leading-relaxed text-white/60">
              {note}
            </p>
            {action && (
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/30 px-6 py-3 font-body text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-paper hover:text-ink"
              >
                {action.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Documentaries() {
  return (
    <section id="documentaries" className="bg-charcoal py-14 sm:py-16 lg:py-20 text-paper">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <SectionHeading className="text-paper">Beyond the Films</SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-white/70"
          >
            Documentaries and essay films that extend Ghosh’s own inquiry into literature, identity, and the lives of artists.
          </motion.p>
        </div>

        <DocumentaryFeature
          index={0}
          title="Bird of Dusk"
          year="2018"
          director="Sangeeta Datta"
          description="The first critical documentary on Rituparno Ghosh, drawing upon his own interviews, conversations, and personal memoirs. Through the voices of Soumitra Chatterjee, Sharmila Tagore, Aparna Sen, Konkona Sen Sharma, and others, the film traces a life lived between cinema, literature, and the search for self."
          note="Featuring archive footage, conversations with collaborators, and readings from Ghosh’s own writings, Bird of Dusk offers an intimate portrait of an artist who reshaped Bengali cinema."
          videoUrl="https://www.youtube.com/embed/y9AlHd7XuQw"
          videoTitle="Bird of Dusk documentary"
          action={{ label: "Also on Prime Video", href: "https://www.primevideo.com/detail/Bird-of-Dusk" }}
        />

        <DocumentaryFeature
          index={1}
          title="Jeevan Smriti"
          year="2013"
          director="Rituparno Ghosh"
          description="Ghosh’s own documentary on Rabindranath Tagore, composed from the poet’s letters and writings. A meeting of two kindred artistic sensibilities across a century of Bengali culture."
          note="Through Tagore’s correspondence and verse, Jeevan Smriti explores the inner life of a poet who shaped Bengal’s cultural imagination — a fitting subject for a filmmaker equally attuned to memory and longing."
          videoUrl="https://www.youtube.com/embed/5TfPoq3lkso"
          videoTitle="Jeevan Smriti documentary"
        />
      </div>
    </section>
  );
}

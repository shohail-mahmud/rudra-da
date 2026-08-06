export interface Documentary {
  id: string;
  title: string;
  year: number;
  director: string;
  description: string;
  poster: string | null;
  streamingUrl?: string;
}

export const documentaries: Documentary[] = [
  {
    id: "bird-of-dusk",
    title: "Bird of Dusk",
    year: 2018,
    director: "Sangeeta Datta",
    description:
      "The first critical documentary on Rituparno Ghosh, drawing upon his own interviews, conversations, and personal memoirs. Through the voices of Soumitra Chatterjee, Sharmila Tagore, Aparna Sen, Konkona Sen Sharma, and others, the film traces a life lived between cinema, literature, and the search for self.",
    poster: null,
    streamingUrl: "https://www.primevideo.com/detail/Bird-of-Dusk",
  },
  {
    id: "jeevan-smriti",
    title: "Jeevan Smriti",
    year: 2013,
    director: "Rituparno Ghosh",
    description:
      "Ghosh’s own documentary on Rabindranath Tagore, composed from the poet’s letters and writings. A meeting of two kindred artistic sensibilities across a century of Bengali culture.",
    poster: null,
  },
];

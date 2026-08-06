export interface Film {
  id: string;
  title: string;
  originalTitle?: string;
  year: number;
  language: string;
  poster: string | null;
  description: string;
  cast: string[];
  awards?: string[];
  streamingUrl?: string;
}

export const films: Film[] = [
  {
    id: "hirer-angti",
    title: "Hirer Angti",
    originalTitle: "হীরের আংটি",
    year: 1992,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c6/Hirer_Angti.jpg",
    description:
      "Ghosh’s directorial debut, a family film about a young boy who inherits a magician’s ring and the strange happenings that follow. Based on the Shirshendu Mukhopadhyay novel.",
    cast: ["Moon Moon Sen", "Basanta Choudhury", "Pradip Mukherjee"],
  },
  {
    id: "unishe-april",
    title: "Unishe April",
    originalTitle: "উনিশে এপ্রিল",
    year: 1994,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/54/Unishe_April.jpg",
    description:
      "A celebrated dancer and her estranged daughter confront two decades of silence, resentment, and unspoken love during a single April evening. A landmark chamber drama that announced Ghosh as a major voice in Bengali cinema.",
    cast: ["Aparna Sen", "Debashree Roy", "Prosenjit Chatterjee"],
    awards: ["National Film Award for Best Feature Film"],
  },
  {
    id: "dahan",
    title: "Dahan",
    originalTitle: "দহন",
    year: 1997,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a5/Dahan_DVD.jpg",
    description:
      "A brutal street assault on a young woman exposes the moral fractures of middle-class Kolkata. Ghosh traces the ripple effects of courage, complicity, and compromise across two women’s lives.",
    cast: ["Rituparna Sengupta", "Indrani Halder", "Suman Faulkner"],
    awards: ["National Film Award for Best Screenplay", "National Film Award for Best Feature Film in Bengali"],
  },
  {
    id: "asukh",
    title: "Asukh",
    originalTitle: "অসুখ",
    year: 1999,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/Asukh.jpg",
    description:
      "A young actress faces a private health crisis while her mother grapples with the cost of ambition. Ghosh draws an intimate portrait of vulnerability within a family of performers.",
    cast: ["Debashree Roy", "Soumitra Chatterjee", "Silajit Majumder"],
    awards: ["National Film Award for Best Feature Film in Bengali"],
  },
  {
    id: "bariwali",
    title: "Bariwali",
    originalTitle: "বাড়িওয়ালি",
    year: 2000,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cf/Bariwali.gif",
    description:
      "A lonely landlord’s quiet life is disrupted when a film crew rents her ancestral home. A meditation on longing, solitude, and the performance of everyday life.",
    cast: ["Kirron Kher", "Roopa Ganguly", "Chiranjeet Chakraborty"],
    awards: ["NETPAC Award, Berlin International Film Festival"],
  },
  {
    id: "utsab",
    title: "Utsab",
    originalTitle: "উৎসব",
    year: 2000,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/0/05/Utsab_DVD_Cover.jpg",
    description:
      "During the rituals of Durga Puja, a family gathers in their decaying mansion and confronts old wounds, hidden debts, and the fragile bonds that still hold them together.",
    cast: ["Madhabi Mukherjee", "Mamata Shankar", "Prasenjit Chatterjee"],
    awards: ["National Film Award for Best Direction"],
  },
  {
    id: "titli",
    title: "Titli",
    originalTitle: "তিতলি",
    year: 2002,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/Dvd_titli.jpg",
    description:
      "An adolescent girl idolises a matinee idol while navigating her own awakening. Ghosh captures the tenderness and turbulence of growing up with remarkable restraint.",
    cast: ["Konkona Sen Sharma", "Aparna Sen", "Mithun Chakraborty"],
    awards: ["FIPRESCI Prize, Bombay International Film Festival"],
  },
  {
    id: "shubho-mahurat",
    title: "Shubho Mahurat",
    originalTitle: "শুভ মহরত",
    year: 2003,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/82/Shubho_Mahurat.jpg",
    description:
      "A Bengal reimagining of Agatha Christie’s Miss Marple mystery, set inside the world of cinema. An elegant whodunit where every character carries a shadow.",
    cast: ["Sharmila Tagore", "Rakhee Gulzar", "Nandita Das"],
    awards: ["National Film Award for Best Feature Film in Bengali", "National Film Award for Best Supporting Actress"],
  },
  {
    id: "chokher-bali",
    title: "Chokher Bali",
    originalTitle: "চোখের বালি",
    year: 2003,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/Chokher_Bali_%282003_film%29.jpg",
    description:
      "Rabindranath Tagore’s widow Binodini enters a household of desire, deceit, and repressed longing. Ghosh’s first collaboration with Aishwarya Rai became a milestone in literary adaptation.",
    cast: ["Aishwarya Rai", "Prosenjit Chatterjee", "Raima Sen", "Tota Roy Chowdhury"],
    awards: ["National Film Award for Best Feature Film in Bengali"],
  },
  {
    id: "raincoat",
    title: "Raincoat",
    year: 2004,
    language: "Hindi",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/Raincoat_Movie_Poster.jpg",
    description:
      "Two former lovers meet again on a rainy afternoon in Kolkata, each hiding the truth of their lives. A chamber piece of unspoken emotions, adapted from O. Henry’s The Gift of the Magi.",
    cast: ["Ajay Devgn", "Aishwarya Rai", "Annu Kapoor"],
    awards: ["National Film Award for Best Feature Film in Hindi"],
  },
  {
    id: "antarmahal",
    title: "Antarmahal",
    originalTitle: "অন্তর্মহল",
    year: 2005,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a6/Antarmahal_dvd_cover.jpg",
    description:
      "In 19th-century Bengal, a zamindar exploits two wives in his quest for a male heir. A stark, sensual drama about power, patriarchy, and female resistance.",
    cast: ["Jackie Shroff", "Roopa Ganguly", "Soha Ali Khan", "Abhishek Bachchan"],
  },
  {
    id: "dosar",
    title: "Dosar",
    originalTitle: "দোসর",
    year: 2006,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6a/Dosar.jpg",
    description:
      "Filmed in black and white, a man survives a car accident that kills his lover and must face the wreckage of his marriage. An unflinching study of guilt and forgiveness.",
    cast: ["Prosenjit Chatterjee", "Konkona Sen Sharma"],
    awards: ["National Film Award – Special Mention"],
  },
  {
    id: "the-last-lear",
    title: "The Last Lear",
    year: 2007,
    language: "English",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/ea/TheLastLear.jpg",
    description:
      "An ageing Shakespearean actor returns to the stage for one final, demanding role. Ghosh’s English-language film is a luminous tribute to theatre, memory, and mortality.",
    cast: ["Amitabh Bachchan", "Preity Zinta", "Arjun Rampal"],
    awards: ["National Film Award for Best Feature Film in English"],
  },
  {
    id: "mumbai-cutting",
    title: "Mumbai Cutting",
    year: 2008,
    language: "Hindi",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a3/Mumbai_Cutting_poster.jpg",
    description:
      "An anthology film of eleven short stories on life in Mumbai, featuring Ghosh’s segment among contributions from Anurag Kashyap, Sudhir Mishra, Rahul Dholakia, Revathy, and others.",
    cast: ["Soha Ali Khan", "Vikas Kumar", "Sachin Khedekar"],
  },
  {
    id: "khela",
    title: "Khela",
    originalTitle: "খেলা",
    year: 2008,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a6/Khela.jpg",
    description:
      "A filmmaker struggling with his next project forms an unexpected bond with a young boy. Ghosh reflects on the innocence and artifice of cinema itself.",
    cast: ["Prasenjit Chatterjee", "Manisha Koirala"],
  },
  {
    id: "shob-charitro-kalponik",
    title: "Shob Charitro Kalponik",
    originalTitle: "সব চরিত্র কল্পনিক",
    year: 2009,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e0/Shob_Charitro_Kalponik.jpg",
    description:
      "After a poet’s death, his widow journeys into his past and discovers the women who shaped his art. A film about memory, betrayal, and the fictions we live by.",
    cast: ["Prosenjit Chatterjee", "Bipasha Basu", "Jisshu Sengupta"],
    awards: ["National Film Award for Best Feature Film in Bengali"],
  },
  {
    id: "abohoman",
    title: "Abohoman",
    originalTitle: "অবহমান",
    year: 2010,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a6/Abohomaan_%282010%29.jpg",
    description:
      "An ageing director falls for an actress who recalls his first love, blurring past and present. Ghosh’s most autobiographical work, and his second National Award for direction.",
    cast: ["Dipankar Dey", "Mamata Shankar", "Jisshu Sengupta", "Ananya Chatterjee"],
    awards: ["National Film Award for Best Direction", "National Film Award for Best Feature Film in Bengali"],
  },
  {
    id: "noukadubi",
    title: "Noukadubi",
    originalTitle: "নৌকাডুবি",
    year: 2011,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/commons/4/41/Noukadubi.png",
    description:
      "A stormy night, a boat wreck, and a case of mistaken identity set the stage for this Tagore adaptation about love, duty, and the accidents that shape our lives.",
    cast: ["Prosenjit Chatterjee", "Raima Sen", "Jisshu Sengupta", "Riya Sen"],
  },
  {
    id: "chitrangada",
    title: "Chitrangada: The Crowning Wish",
    originalTitle: "চিত্রাঙ্গদা",
    year: 2012,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/58/Chitrangada_The_Crowning_Wish.jpg",
    description:
      "A choreographer undergoes a gender transition to become the parent he wishes to be. Ghosh’s final, fearless work weaves personal longing with the Mahabharata myth of Chitrangada.",
    cast: ["Rituparno Ghosh", "Jisshu Sengupta", "Raima Sen"],
    awards: ["National Film Award – Special Jury Award"],
  },
  {
    id: "satyanweshi",
    title: "Satyanweshi",
    originalTitle: "সত্যান্বেষী",
    year: 2013,
    language: "Bengali",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/58/Satyanweshi_movie_poster.jpg",
    description:
      "Ghosh’s final film brings Byomkesh Bakshi to the screen in a moody investigation of murder and moral ambiguity. Released posthumously, it stands as a poignant farewell.",
    cast: ["Sujoy Ghosh", "Indraneil Sengupta"],
  },
  {
    id: "sunglass",
    title: "Sunglass",
    originalTitle: "টাক ঝাঁক",
    year: 2013,
    language: "Bengali / Hindi",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cd/Sunglass_poster.jpg",
    description:
      "A bilingual satirical comedy about a married couple whose life turns upside down when a pair of antique sunglasses seems to reveal hidden truths. Shot in 2006, it premiered posthumously at the 19th Kolkata International Film Festival.",
    cast: ["Konkona Sen Sharma", "R. Madhavan", "Jaya Bachchan", "Naseeruddin Shah", "Tota Roy Chowdhury"],
  },
];

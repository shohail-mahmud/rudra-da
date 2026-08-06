export interface Memory {
  id: string;
  type: "quote" | "image" | "note";
  text?: string;
  attribution?: string;
  source?: string;
  image?: string | null;
  caption?: string;
  year?: string;
}

export const memories: Memory[] = [
  {
    id: "quote-ray",
    type: "quote",
    text: "I felt like making films after I watched Satyajit Ray’s films. Many aspects of his filmmaking are also my favourites. The structure, dialogue, economy and gravity of his films are also inimitable.",
    attribution: "Rituparno Ghosh",
    source: "on the influence of Satyajit Ray",
  },
  {
    id: "image-portrait",
    type: "image",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Rituparno.jpg",
    caption: "Rituparno Ghosh at MAMI, 2010",
    year: "2010",
  },
  {
    id: "image-noukadubi",
    type: "image",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Rituparno_Ghosh_at_the_audio_release_of_Noukadubi.jpg",
    caption: "At the audio release of Noukadubi, 2011",
    year: "2011",
  },
  {
    id: "image-last-lear-premiere",
    type: "image",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Director_Rituparno_Ghosh_along_with_actors_Shefali_Shah_and_Divya_Dutta_at_a_Premeire_of_the_film_%22The_Last_Lear%22_at_IFFI_2007_at_Panaji%2C_Goa_on_november_30.jpg",
    caption: "With Shefali Shah and Divya Dutta at the premiere of The Last Lear, IFFI 2007",
    year: "2007",
  },
  {
    id: "image-last-lear-group",
    type: "image",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Director_Rituparno_Ghosh_alongwith_actors_Shefali_Shah_and_Divya_Dutta_at_a_Premiere_of_the_film_%22The_Last_Lear%22_at_IFFI_2007_at_Panaji%2C_Goa_on_November_30%2C_2007._also_seen_is_the_Director_of_film_festival_Mrs_Neelam_Kapur.jpg",
    caption: "At the IFFI 2007 premiere of The Last Lear with Shefali Shah, Divya Dutta, and festival director Neelam Kapur",
    year: "2007",
  },
  {
    id: "quote-pace",
    type: "quote",
    text: "I once had a fight with a European film jury; they were criticising our films for being too slow, and I said yes, but that’s our lifestyle!",
    attribution: "Rituparno Ghosh",
    source: "Platform Magazine interview",
  },
  {
    id: "note-collaborators",
    type: "note",
    text: "Across two decades, Ghosh collaborated with actors who became family: Prosenjit Chatterjee, Konkona Sen Sharma, Aparna Sen, Raima Sen, Jisshu Sengupta. He moved between Bengal, Bombay, and the world, yet his eye remained fixed on the interior lives of women and the silences between people.",
  },
  {
    id: "quote-city",
    type: "quote",
    text: "My city, I know, can neither handle me, nor ignore me.",
    attribution: "Rituparno Ghosh",
    source: "on Kolkata",
  },
  {
    id: "image-award",
    type: "image",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pratibha_Devisingh_Patil_presenting_the_Swarna_Kamal_Award_to_Shri_Rituparno_Gosh_for_the_Best_Direction_%28Bengali_Film_Abohomaan%29%2C_at_the_57th_National_Film_Awards_function%2C_in_New_Delhi_on_October_22%2C_2010.jpg",
    caption: "Receiving the National Award for Best Direction for Abohoman, 2010",
    year: "2010",
  },
  {
    id: "quote-writing",
    type: "quote",
    text: "Writing is my greatest point of engagement with my film. When I write a line, I know exactly how it should be directed.",
    attribution: "Rituparno Ghosh",
    source: "Chhotahazri interview",
  },
  {
    id: "note-legacy",
    type: "note",
    text: "He wrote profiles, short stories, song lyrics, and editorials. He hosted television conversations. He challenged conventions of gender and identity on screen and in public life. His work endures as an archive of modern Bengal — its tenderness, its cruelty, and its refusal to be silent.",
  },
];

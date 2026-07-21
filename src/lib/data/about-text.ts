export interface AboutSection {
  id: "our-story" | "our-values" | "work-with-us";
  navLabel: string;
  title: string;
  img?: string;
  content: string;
  subtext: string;
}

export const aboutSection: AboutSection[] = [
  {
    id: "our-story",
    navLabel: "Our Story",
    title: "The origin story of Haiku Coffee",
    content: "We started out as a small coffee shop in the heart of the city. Basically a 'hole-in-the-wall' kind of situation.",
    subtext: "This is the additional text about Haiku Coffee.",
  },
  {
    id: "our-values",
    navLabel: "Our Values",
    title: "Our values and how we keep them",
    content: "We started out as a small coffee shop in the heart of the city. Basically a 'hole-in-the-wall' kind of situation.",
    subtext: "This is the additional text in 'our values'.",
  },
  {
    id: "work-with-us",
    navLabel: "Work with Us",
    title: "Work with us",
    content: "Either you're a farmer or a coffee enthusiast, we're always on the lookout for the right colabs and people to join our team.",
    subtext: "This is the additional text in 'work with us'.",
  }
];

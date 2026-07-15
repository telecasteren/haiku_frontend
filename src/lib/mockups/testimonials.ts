export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Haiku Coffee turned my morning routine into a small ceremony. Every cup feels intentional.",
    name: "John Doe",
    title: "PhD, Franklyn University",
  },
  {
    id: 2,
    quote:
      "The single-origin beans are unbelievably fresh. I've never tasted coffee this balanced.",
    name: "Maria Chen",
    title: "Barista Champion, Portland",
  },
  {
    id: 3,
    quote:
      "Subtle, aromatic, and never bitter. Haiku Coffee is now the only brand I keep at home.",
    name: "Ahmed Al-Farsi",
    title: "Food Critic, The Daily Brew",
  },
  {
    id: 4,
    quote:
      "Their attention to detail shows in every bag. It's like poetry in a cup, hence the name.",
    name: "Sophie Laurent",
    title: "Head Chef, Maison Laurent",
  },
];

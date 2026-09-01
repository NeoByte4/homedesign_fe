export interface IReviewCard {
  id: number;
  review: string;
  author: string;
  authorImage: string;
  date: string;
  rating: number;
}

const authorImages = [
  "/temp/ai-person-1.jpeg",
  "/temp/ai-person-2.jpeg",
  "/temp/ai-person-3.jpeg",
  "/temp/ai-person-4.jpeg",
];

export const reviews: IReviewCard[] = [
  {
    id: 1,
    review:
      "Prestige Tours curated an unforgettable journey through the Amalfi Coast. Every detail, from accommodations to excursions, was flawless.",
    author: "Isabella Rossi",
    authorImage: authorImages[0],
    date: "2 months ago",
    rating: 5.0,
  },
  {
    id: 2,
    review:
      "The Santorini trip exceeded our expectations. Private transfers, boutique hotels, and expert local guides made all the difference.",
    author: "Liam Johnson",
    authorImage: authorImages[1],
    date: "1 month ago",
    rating: 4.8,
  },
  {
    id: 3,
    review:
      "A truly seamless experience exploring the Greek islands. Prestige Tours handled every request promptly and with professionalism.",
    author: "Sophia Martinez",
    authorImage: authorImages[2],
    date: "3 weeks ago",
    rating: 4.9,
  },
  {
    id: 4,
    review:
      "Our private villa in Provence was breathtaking. The itinerary balanced relaxation and sightseeing perfectly. Highly recommend Prestige.",
    author: "Ethan Brown",
    authorImage: authorImages[3],
    date: "2 weeks ago",
    rating: 4.7,
  },
  {
    id: 5,
    review:
      "From Naples to Capri, the trip was curated to perfection. Local experiences, fine dining, and luxury accommodations made it unforgettable.",
    author: "Olivia Clark",
    authorImage: authorImages[0],
    date: "1 week ago",
    rating: 5.0,
  },
  {
    id: 6,
    review:
      "Prestige Tours made our honeymoon in the Mediterranean magical. Every suggestion was tailored to our interests and lifestyle.",
    author: "Noah Wilson",
    authorImage: authorImages[1],
    date: "5 days ago",
    rating: 4.9,
  },
  {
    id: 7,
    review:
      "Exceptional service throughout our journey. The team anticipated every need and created moments we’ll remember forever.",
    author: "Emma Davis",
    authorImage: authorImages[2],
    date: "3 days ago",
    rating: 4.8,
  },
  {
    id: 8,
    review:
      "Luxury meets authenticity with Prestige Tours. Our trip combined iconic destinations with hidden gems only locals know about.",
    author: "William Lee",
    authorImage: authorImages[3],
    date: "2 days ago",
    rating: 4.7,
  },
  {
    id: 9,
    review:
      "The attention to detail is unmatched. We felt supported at every step, from planning to the end of our journey.",
    author: "Charlotte Young",
    authorImage: authorImages[0],
    date: "1 day ago",
    rating: 5.0,
  },
  {
    id: 10,
    review:
      "Prestige Tours truly understands luxury travel. Every hotel, meal, and excursion felt personalized and carefully curated.",
    author: "James Anderson",
    authorImage: authorImages[1],
    date: "12 hours ago",
    rating: 4.9,
  },
];

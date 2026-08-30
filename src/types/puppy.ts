export interface Puppy {
  id: string;
  name: string;
  breed: string;
  location: string;
  images: string[];
  description: string;
  temperament: string[];
}

export interface BreedInfo {
  id: string;
  name: string;
  image: string;
  temperament: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  dogName: string;
  dogBreed: string;
  authorAvatar: string;
  dogImage: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

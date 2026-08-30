export type BreedCategory = 'all' | 'popular' | 'toy' | 'large' | 'hypoallergenic';

export interface Breeder {
  name: string;
  location: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  verified: boolean;
  avatar: string;
}

export interface Puppy {
  id: string;
  name: string;
  breed: string;
  category: BreedCategory;
  age: string; // e.g., "10 Weeks"
  gender: 'Male' | 'Female';
  color: string;
  weight: string;
  location: string;
  price: number;
  currency: string;
  available: boolean;
  images: string[];
  description: string;
  temperament: string[];
  healthStatus: {
    vaccinated: boolean;
    dewormed: boolean;
    microchipped: boolean;
    vetChecked: boolean;
    healthGuaranteeMonths: number;
    kciRegistered?: boolean;
  };
  breeder: Breeder;
  parents: {
    father: string;
    mother: string;
  };
}

export interface BreedInfo {
  id: string;
  name: string;
  image: string;
  availableCount: number;
  energyLevel: 'Low' | 'Medium' | 'High';
  size: 'Toy' | 'Small' | 'Medium' | 'Large' | 'Giant';
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
  category: 'Health & Verification' | 'Adoption Process' | 'Delivery & Travel' | 'Breeder Standards';
}

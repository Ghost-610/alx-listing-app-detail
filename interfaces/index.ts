export interface CardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit";
  className?: string;
}

// interfaces/index.ts

export interface PropertyProps {
  id: number;
  name: string;
  address: string;
  rating: number;
  category: string;
  price: number;
  offers: string[];
  imageUrl: string;
}

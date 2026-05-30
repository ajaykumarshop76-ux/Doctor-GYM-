export interface MembershipPlan {
  id: string;
  name: string; // "Basic", "Premium", "Personal Training"
  category: string; // "Basic Membership", "Premium Membership", "Personal Training"
  duration: string; // "1 Month", "3 Months", "6 Months", "12 Months"
  price: number;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  imageUrl: string;
  title: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  category: string;
  duration: string;
  planName: string;
  price: number;
  status: 'pending' | 'confirmed';
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
}

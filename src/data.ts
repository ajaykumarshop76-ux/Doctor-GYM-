import { MembershipPlan, Trainer, GalleryItem, Review } from './types';

export const BUSINESS_INFO = {
  name: "Doctor GYM",
  subName: "Vedant Fitness Club",
  googleRating: 4.7,
  reviewsCount: 574,
  address: "601 & 616,617 Center Point, Vandematram Rd, Opposite Vrundavan Heights, Gota, Ahmedabad, Gujarat 382470",
  phone: "+91 7859915024",
  instagram: "@doctor_gym__",
  instagramUrl: "https://www.instagram.com/doctor_gym__",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.119001321045!2d72.53239851496929!3d23.111003484909855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830ee307d811%3A0x6739943440e53a3e!2sDoctor%20Gym!5e0!3m2!1sen!2sin!4v1685361000000!5m2!1sen!2sin"
};

export const GYM_HIGHLIGHTS = [
  {
    title: "World-Class Equipment",
    description: "Equipped with state-of-the-art strength and cardio machinery to maximize your workout efficiency.",
    icon: "Dumbbell"
  },
  {
    title: "Expert Supervision",
    description: "Highly certified and motivating fitness experts dedicated to tracking your daily progression.",
    icon: "Users"
  },
  {
    title: "Vast Workout Space",
    description: "Spacious, air-conditioned, and sanitized training zones designed for focused and hygienic sessions.",
    icon: "Maximize"
  },
  {
    title: "Dynamic Class Schedules",
    description: "From premium cardio classes to high-intensity CrossFit programs fitting your busy routine.",
    icon: "Calendar"
  }
];

export const MEMBERSHIP_CATEGORIES = [
  "Basic Membership",
  "Premium Membership",
  "Personal Training"
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  // Basic Membership
  {
    id: "basic_1m",
    name: "Basic",
    category: "Basic Membership",
    duration: "1 Month",
    price: 999,
    features: ["Gym Access", "Weight Training", "Locker Access"]
  },
  {
    id: "basic_3m",
    name: "Basic",
    category: "Basic Membership",
    duration: "3 Months",
    price: 2499,
    features: ["Gym Access", "Weight Training", "Locker Access"]
  },
  {
    id: "basic_6m",
    name: "Basic",
    category: "Basic Membership",
    duration: "6 Months",
    price: 3999,
    features: ["Gym Access", "Weight Training", "Locker Access"]
  },
  {
    id: "basic_12m",
    name: "Basic",
    category: "Basic Membership",
    duration: "12 Months",
    price: 6999,
    features: ["Gym Access", "Weight Training", "Locker Access"]
  },

  // Premium Membership
  {
    id: "premium_1m",
    name: "Premium",
    category: "Premium Membership",
    duration: "1 Month",
    price: 1999,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support"]
  },
  {
    id: "premium_3m",
    name: "Premium",
    category: "Premium Membership",
    duration: "3 Months",
    price: 3499,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support"]
  },
  {
    id: "premium_6m",
    name: "Premium",
    category: "Premium Membership",
    duration: "6 Months",
    price: 4999,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support"]
  },
  {
    id: "premium_12m",
    name: "Premium",
    category: "Premium Membership",
    duration: "12 Months",
    price: 8999,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support"]
  },

  // Personal Training
  {
    id: "pt_1m",
    name: "Personal Training",
    category: "Personal Training",
    duration: "1 Month",
    price: 4999,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support", "Diet Consultation", "Personal Training"]
  },
  {
    id: "pt_3m",
    name: "Personal Training",
    category: "Personal Training",
    duration: "3 Months",
    price: 11999,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support", "Diet Consultation", "Personal Training"]
  },
  {
    id: "pt_6m",
    name: "Personal Training",
    category: "Personal Training",
    duration: "6 Months",
    price: 19999,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support", "Diet Consultation", "Personal Training"]
  },
  {
    id: "pt_12m",
    name: "Personal Training",
    category: "Personal Training",
    duration: "12 Months",
    price: 34999,
    features: ["Gym Access", "Cardio Zone", "Weight Training", "Locker Access", "Trainer Support", "Diet Consultation", "Personal Training"]
  }
];

export const COMPARISON_FEATURES = [
  { name: "Gym Access", basic: true, premium: true, pt: true },
  { name: "Weight Training", basic: true, premium: true, pt: true },
  { name: "Locker Access", basic: true, premium: true, pt: true },
  { name: "Cardio Zone", basic: false, premium: true, pt: true },
  { name: "Trainer Support", basic: false, premium: true, pt: true },
  { name: "Diet Consultation", basic: false, premium: false, pt: true },
  { name: "Personal Training", basic: false, premium: false, pt: true },
];

export const TRAINERS: Trainer[] = [
  {
    id: "trainer_1",
    name: "Vedant Patel",
    role: "Head Coach & Founder",
    specialties: ["Powerlifting", "Bodybuilding Coach", "Posture Correction"],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500"
  },
  {
    id: "trainer_2",
    name: "Meet Jadav",
    role: "Strength & Conditioning Spec.",
    specialties: ["Functional Training", "Crossfit Level-2", "Injury Rehab"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500"
  },
  {
    id: "trainer_3",
    name: "Kruti Shah",
    role: "Certified Nutritionist & Trainer",
    specialties: ["Diet Optimization", "Cardio Circuit Training", "Women Fitness"],
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=500"
  }
];

export const GALLERY_CATEGORIES = [
  "All",
  "Cardio Equipment",
  "Strength Machines",
  "Free Weight Section",
  "Functional Training Area",
  "Gym Interior",
  "Personal Training Sessions",
  "Group Training",
  "Transformation Results"
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Cardio
  {
    id: "cardio_1",
    category: "Cardio Equipment",
    title: "High-End Cardio Alignment",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    id: "cardio_2",
    category: "Cardio Equipment",
    title: "Premium Running Decks",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600"
  },
  {
    id: "cardio_3",
    category: "Cardio Equipment",
    title: "Interactive Spin Section",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600"
  },

  // Strength Machines
  {
    id: "strength_1",
    category: "Strength Machines",
    title: "Heavy Plate Isolated Press",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600"
  },
  {
    id: "strength_2",
    category: "Strength Machines",
    title: "Mechanical Lat Station",
    imageUrl: "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=600"
  },
  {
    id: "strength_3",
    category: "Strength Machines",
    title: "Ergonomic Shoulder Press",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600"
  },

  // Free Weights
  {
    id: "free_1",
    category: "Free Weight Section",
    title: "Pro Rubberized Dumbbells",
    imageUrl: "https://images.unsplash.com/photo-1637666062717-1c6bcab4a4ed?q=80&w=600"
  },
  {
    id: "free_2",
    category: "Free Weight Section",
    title: "Heavy Olympic Barbells",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600"
  },
  {
    id: "free_3",
    category: "Free Weight Section",
    title: "Squat Racks & Bench Row",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=60&w=600"
  },

  // Functional Area
  {
    id: "func_1",
    category: "Functional Training Area",
    title: "Suspension Training Rig",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600"
  },
  {
    id: "func_2",
    category: "Functional Training Area",
    title: "Medicine Ball Station",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    id: "func_3",
    category: "Functional Training Area",
    title: "Ropes & Sled Zone",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600"
  },

  // Gym Interior
  {
    id: "int_1",
    category: "Gym Interior",
    title: "Spacious Training Arena",
    imageUrl: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600"
  },
  {
    id: "int_2",
    category: "Gym Interior",
    title: "Modern Welcoming Lounge",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
  },
  {
    id: "int_3",
    category: "Gym Interior",
    title: "Hygienic Secure Locker Area",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600"
  },

  // Personal Sessions
  {
    id: "pt_sess_1",
    category: "Personal Training Sessions",
    title: "Form-Specific Deadlift Coaching",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600"
  },
  {
    id: "pt_sess_2",
    category: "Personal Training Sessions",
    title: "Mobility & Stretch Counseling",
    imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600"
  },
  {
    id: "pt_sess_3",
    category: "Personal Training Sessions",
    title: "Assisted Strength Lift Checks",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600"
  },

  // Group training
  {
    id: "group_tr_1",
    category: "Group Training",
    title: "Cardio Kickboxing Group",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600"
  },
  {
    id: "group_tr_2",
    category: "Group Training",
    title: "Dynamic HIIT Boot Camp",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    id: "group_tr_3",
    category: "Group Training",
    title: "Power Yoga Morning Energy",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600"
  },

  // Transformations
  {
    id: "trans_1",
    category: "Transformation Results",
    title: "6-Month Body Recomp",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    id: "trans_2",
    category: "Transformation Results",
    title: "12-Week Absolute Shred",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600"
  },
  {
    id: "trans_3",
    category: "Transformation Results",
    title: "Lean Mass Upgrade",
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600"
  }
];

export const TRANSFORMATION_CARDS = [
  {
    id: "tc_1",
    name: "Krutik Patel",
    beforeWeight: "94 kg",
    afterWeight: "78 kg",
    duration: "6 Months",
    achievement: "Lost 16kg of fat, gained pure functional power.",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=300"
  },
  {
    id: "tc_2",
    name: "Akshat Shah",
    beforeWeight: "65 kg",
    afterWeight: "75 kg",
    duration: "4 Months",
    achievement: "Added 10kg of solid dry lean athletic mass.",
    beforeImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=300",
    afterImg: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=300"
  }
];

export const GOOGLE_REVIEWS_STATS = {
  rating: 4.7,
  count: 574,
  highlights: [
    "Great premium strength equipment",
    "Extremely friendly and knowledgeable staff",
    "Motivating, energizing music & atmosphere",
    "Advanced modern biomechanical machines",
    "Supportive, hands-on personal trainers",
    "Super affordable, tiered, budget pricing plans"
  ]
};

export const REVIEWS_LIST: Review[] = [
  {
    id: "rev_1",
    author: "Krutik Patel",
    rating: 5,
    text: "Budget Good Gym is an absolute gem! I've been a member for 1 year now, and I couldn't be happier with my experience. The trainers are highly supportive and know exactly how to guide you based on your body type.",
    date: "1 Month ago"
  },
  {
    id: "rev_2",
    author: "Akshat Shah",
    rating: 5,
    text: "Great gym with a positive and motivating environment. Trainers are knowledgeable team players. The equipment selection from standard strength to unique plate load ranges is outstanding for Gota!",
    date: "2 Months ago"
  },
  {
    id: "rev_3",
    author: "Smit Prajapati",
    rating: 5,
    text: "Best gym experience in Ahmedabad! Extremely neat, clean lockers, brilliant air conditioning, and top tier coaching. High performance is guaranteed here.",
    date: "3 Months ago"
  },
  {
    id: "rev_4",
    author: "Nisha Rathod",
    rating: 5,
    text: "Beautiful layout, dedicated cardio section on high floor, and highly secured lockers. Especially secure for female members with skilled supportive trainer guidance.",
    date: "1 Week ago"
  }
];

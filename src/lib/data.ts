// Mock data for the MedLearn frontend.
// Replace these with real data from Prisma / the API later.

export type Lecture = {
  id: string;
  title: string;
  category: string;
  instructor: string;
  durationHours: number;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  students: number;
  accent: string; // tailwind gradient classes for the cover
  free: boolean;
};

export const categories = [
  "Anatomy",
  "Physiology",
  "Pharmacology",
  "Pathology",
  "Cardiology",
  "Neurology",
] as const;

export const lectures: Lecture[] = [
  {
    id: "human-anatomy",
    title: "Complete Human Anatomy",
    category: "Anatomy",
    instructor: "Dr. Sarah Whitmore",
    durationHours: 18,
    lessons: 64,
    level: "Beginner",
    rating: 4.9,
    students: 12450,
    accent: "from-teal-500 to-emerald-600",
    free: true,
  },
  {
    id: "cardiovascular-physiology",
    title: "Cardiovascular Physiology",
    category: "Physiology",
    instructor: "Dr. James Okafor",
    durationHours: 12,
    lessons: 42,
    level: "Intermediate",
    rating: 4.8,
    students: 8920,
    accent: "from-rose-500 to-red-600",
    free: false,
  },
  {
    id: "clinical-pharmacology",
    title: "Clinical Pharmacology",
    category: "Pharmacology",
    instructor: "Dr. Mei Lin",
    durationHours: 22,
    lessons: 78,
    level: "Advanced",
    rating: 4.9,
    students: 10310,
    accent: "from-indigo-500 to-violet-600",
    free: false,
  },
  {
    id: "general-pathology",
    title: "General Pathology Essentials",
    category: "Pathology",
    instructor: "Dr. Robert Hale",
    durationHours: 16,
    lessons: 55,
    level: "Intermediate",
    rating: 4.7,
    students: 7640,
    accent: "from-amber-500 to-orange-600",
    free: false,
  },
  {
    id: "ecg-mastery",
    title: "ECG Interpretation Mastery",
    category: "Cardiology",
    instructor: "Dr. James Okafor",
    durationHours: 9,
    lessons: 31,
    level: "Advanced",
    rating: 5.0,
    students: 5980,
    accent: "from-cyan-500 to-blue-600",
    free: false,
  },
  {
    id: "neuroanatomy",
    title: "Clinical Neuroanatomy",
    category: "Neurology",
    instructor: "Dr. Sarah Whitmore",
    durationHours: 14,
    lessons: 48,
    level: "Intermediate",
    rating: 4.8,
    students: 6720,
    accent: "from-fuchsia-500 to-purple-600",
    free: false,
  },
];

export type Note = {
  id: string;
  title: string;
  instructor: string;
  durationHours: number;
  pages: number;
  students: number;
  accent: string; // tailwind gradient classes for the cover
  free: boolean;
};

export const notes: Note[] = [
  {
    id: "chapter-1",
    title: "Chapter 1",
    instructor: "Dr. Sarah Whitmore",
    durationHours: 18,
    pages: 64,
    students: 12450,
    accent: "from-teal-500 to-emerald-600",
    free: true,
  },
  {
    id: "cahpter-2",
    title: "Chapter 2",
    instructor: "Dr. James Okafor",
    durationHours: 12,
    pages: 42,
    students: 8920,
    accent: "from-rose-500 to-red-600",
    free: false,
  },
  {
    id: "chapter-3",
    title: "Chapter 3",
    instructor: "Dr. Mei Lin",
    durationHours: 22,
    pages: 78,
    students: 10310,
    accent: "from-indigo-500 to-violet-600",
    free: false,
  },
  {
    id: "chapter-4",
    title: "Chapter 4",
    instructor: "Dr. Robert Hale",
    durationHours: 16,
    pages: 55,
    students: 7640,
    accent: "from-amber-500 to-orange-600",
    free: false,
  },
  {
    id: "chapter-5",
    title: "Chapter 5",
    instructor: "Dr. James Okafor",
    durationHours: 9,
    pages: 31,
    students: 5980,
    accent: "from-cyan-500 to-blue-600",
    free: false,
  },
  {
    id: "chapter-6",
    title: "Chapter 6",
    instructor: "Dr. Sarah Whitmore",
    durationHours: 14,
    pages: 48,
    students: 6720,
    accent: "from-fuchsia-500 to-purple-600",
    free: false,
  },
];

export type Plan = {
  name: string;
  price: number;
  period: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    tagline: "Sample the platform with select free lectures.",
    features: [
      "Access to 3 free lectures",
      "Community Q&A access",
      "Mobile & desktop streaming",
      "Limited lecture notes",
    ],
    highlighted: false,
    cta: "Start for free",
  },
  {
    name: "Pro",
    price: 19,
    period: "month",
    tagline: "Everything a serious medical student needs.",
    features: [
      "Unlimited access to all lectures",
      "Downloadable notes & summaries",
      "Practice questions & quizzes",
      "Completion certificates",
      "New content every week",
    ],
    highlighted: true,
    cta: "Subscribe to Pro",
  },
  {
    name: "Institution",
    price: 49,
    period: "month / seat",
    tagline: "For universities, hospitals and study groups.",
    features: [
      "Everything in Pro",
      "Team dashboards & analytics",
      "Bulk seat management",
      "Priority instructor support",
      "Custom learning paths",
    ],
    highlighted: false,
    cta: "Contact sales",
  },
];

export const stats = [
  { label: "Active students", value: "60k+" },
  { label: "Hours of lectures", value: "1,200+" },
  { label: "Expert instructors", value: "85" },
  { label: "Average rating", value: "4.9/5" },
];

export const testimonials = [
  {
    quote:
      "MedLearn got me through my second year. The pathology lectures are clearer than anything in my textbooks.",
    name: "Aisha Khan",
    role: "Medical Student, Year 2",
  },
  {
    quote:
      "The ECG course alone is worth the subscription. I finally feel confident reading rhythms on the ward.",
    name: "Daniel Ortega",
    role: "Resident, Internal Medicine",
  },
  {
    quote:
      "We rolled out the Institution plan across our cohort. The analytics help us spot who needs support early.",
    name: "Prof. Helen Adams",
    role: "Faculty, St. Mary's Medical School",
  },
];

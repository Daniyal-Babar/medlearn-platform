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
  image: string; // image url for the cover
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
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
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
  image: string; // image url for the cover
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
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: true,
  },
  {
    id: "cahpter-2",
    title: "Chapter 2",
    instructor: "Dr. James Okafor",
    durationHours: 12,
    pages: 42,
    students: 8920,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-3",
    title: "Chapter 3",
    instructor: "Dr. Mei Lin",
    durationHours: 22,
    pages: 78,
    students: 10310,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-4",
    title: "Chapter 4",
    instructor: "Dr. Robert Hale",
    durationHours: 16,
    pages: 55,
    students: 7640,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-5",
    title: "Chapter 5",
    instructor: "Dr. James Okafor",
    durationHours: 9,
    pages: 31,
    students: 5980,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-6",
    title: "Chapter 6",
    instructor: "Dr. Sarah Whitmore",
    durationHours: 14,
    pages: 48,
    students: 6720,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
];


export type Mcq = {
  id: string;
  title: string;
  number_of_mcqs: number;
  students: number;
  image: string; // image url for the cover
  free: boolean;
};

export const mcqs: Mcq[] = [
  {
    id: "chapter-1",
    title: "Chapter 1",
    number_of_mcqs: 64,
    students: 12450,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: true,
  },
  {
    id: "cahpter-2",
    title: "Chapter 2",
    number_of_mcqs: 42,
    students: 8920,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-3",
    title: "Chapter 3",
    number_of_mcqs: 78,
    students: 10310,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-4",
    title: "Chapter 4",
    number_of_mcqs: 55,
    students: 7640,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-5",
    title: "Chapter 5",
    number_of_mcqs: 31,
    students: 5980,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
  {
    id: "chapter-6",
    title: "Chapter 6",
    number_of_mcqs: 48,
    students: 6720,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2071&auto=format&fit=crop",
    free: false,
  },
];

// A single multiple-choice question.
export type McqQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

// Placeholder question bank. Swap for chapter-specific questions once available.
export const sampleMcqQuestions: McqQuestion[] = [
  {
    id: "q1",
    question: "Which of the following is the primary mechanism of action of aspirin?",
    options: [
      "Reversible inhibition of cyclooxygenase",
      "Irreversible inhibition of cyclooxygenase",
      "Blockade of beta-adrenergic receptors",
      "Inhibition of angiotensin-converting enzyme",
    ],
    correctIndex: 1,
    explanation:
      "Aspirin irreversibly acetylates cyclooxygenase (COX-1 and COX-2), which is why its antiplatelet effect lasts for the life of the platelet.",
  },
  {
    id: "q2",
    question: "A patient on warfarin has an elevated INR. Which agent is used to reverse its effect?",
    options: ["Protamine sulfate", "Vitamin K", "Naloxone", "Flumazenil"],
    correctIndex: 1,
    explanation:
      "Warfarin inhibits vitamin K–dependent clotting factors, so vitamin K (phytonadione) reverses its anticoagulant effect. Protamine reverses heparin.",
  },
  {
    id: "q3",
    question: "Which class of drugs is first-line for a hypertensive patient with diabetic nephropathy?",
    options: [
      "Calcium channel blockers",
      "Thiazide diuretics",
      "ACE inhibitors",
      "Alpha blockers",
    ],
    correctIndex: 2,
    explanation:
      "ACE inhibitors reduce intraglomerular pressure and slow progression of diabetic nephropathy, making them first-line in this population.",
  },
  {
    id: "q4",
    question: "The therapeutic effect of beta-2 agonists like salbutamol in asthma is due to:",
    options: [
      "Bronchial smooth muscle relaxation",
      "Increased mucus secretion",
      "Vasoconstriction of pulmonary vessels",
      "Inhibition of histamine release only",
    ],
    correctIndex: 0,
    explanation:
      "Beta-2 agonists stimulate beta-2 receptors on bronchial smooth muscle, raising cAMP and causing bronchodilation.",
  },
  {
    id: "q5",
    question: "Which antibiotic is contraindicated in pregnancy due to effects on fetal cartilage and teeth?",
    options: ["Amoxicillin", "Tetracycline", "Erythromycin", "Cephalexin"],
    correctIndex: 1,
    explanation:
      "Tetracyclines chelate calcium and deposit in developing bones and teeth, causing discoloration and impaired growth; they are avoided in pregnancy and young children.",
  },
  {
    id: "q6",
    question: "Digoxin toxicity is potentiated by which electrolyte abnormality?",
    options: ["Hyperkalemia", "Hypokalemia", "Hypernatremia", "Hypercalcemia"],
    correctIndex: 1,
    explanation:
      "Hypokalemia increases digoxin binding to the Na+/K+-ATPase, enhancing its effect and the risk of toxicity.",
  },
  {
    id: "q7",
    question: "Which drug is the antidote for opioid overdose?",
    options: ["Flumazenil", "Naloxone", "Atropine", "N-acetylcysteine"],
    correctIndex: 1,
    explanation:
      "Naloxone is a competitive opioid receptor antagonist that rapidly reverses opioid-induced respiratory depression.",
  },
  {
    id: "q8",
    question: "Statins lower cholesterol primarily by inhibiting which enzyme?",
    options: [
      "Lipoprotein lipase",
      "HMG-CoA reductase",
      "Acetyl-CoA carboxylase",
      "Squalene synthase",
    ],
    correctIndex: 1,
    explanation:
      "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis.",
  },
  {
    id: "q9",
    question: "Which of the following is a common adverse effect of ACE inhibitors?",
    options: ["Dry cough", "Hyperglycemia", "Tachycardia", "Weight gain"],
    correctIndex: 0,
    explanation:
      "ACE inhibitors reduce bradykinin breakdown, leading to accumulation and a characteristic dry, persistent cough.",
  },
  {
    id: "q10",
    question: "Acetaminophen (paracetamol) overdose is treated with:",
    options: ["Naloxone", "N-acetylcysteine", "Vitamin K", "Deferoxamine"],
    correctIndex: 1,
    explanation:
      "N-acetylcysteine replenishes hepatic glutathione, detoxifying the reactive metabolite NAPQI that causes liver injury in overdose.",
  },
  {
    id: "q11",
    question: "Which diuretic acts on the ascending limb of the loop of Henle?",
    options: ["Spironolactone", "Hydrochlorothiazide", "Furosemide", "Acetazolamide"],
    correctIndex: 2,
    explanation:
      "Furosemide is a loop diuretic that inhibits the Na+/K+/2Cl- cotransporter in the thick ascending limb of the loop of Henle.",
  },
  {
    id: "q12",
    question: "The main site of drug metabolism in the body is the:",
    options: ["Kidney", "Liver", "Lung", "Spleen"],
    correctIndex: 1,
    explanation:
      "The liver, via the cytochrome P450 enzyme system, is the principal organ for phase I and phase II drug metabolism.",
  },
];

// Returns a deterministic subset of the sample bank for a given chapter so the
// server and client render the same questions (no hydration mismatch).
export function getMcqQuestions(chapterId: string, count = 8): McqQuestion[] {
  const offset =
    Math.abs(
      chapterId.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
    ) % sampleMcqQuestions.length;
  const bank = sampleMcqQuestions;
  return Array.from({ length: Math.min(count, bank.length) }, (_, i) => {
    const q = bank[(offset + i) % bank.length];
    return { ...q, id: `${chapterId}-${i + 1}` };
  });
}

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

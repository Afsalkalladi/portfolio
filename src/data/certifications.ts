// src/data/certifications.ts

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  icon: string;
  type: string;
}

export const certificationsData: CertificationEntry[] = [
  {
    id: "c1",
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "March 2024",
    description:
      "Comprehensive course covering Python basics, data structures, web access, databases, and visualization.",
    icon: "/icons/django.svg",
    type: "Online",
  },
  {
    id: "c2",
    title: "Machine Learning",
    issuer: "Stanford University (via Coursera)",
    date: "January 2024",
    description:
      "Taught by Andrew Ng, covered supervised/unsupervised learning, best practices, and real-world applications.",
    icon: "/icons/stanford.png",
    type: "Specialization",
  },
];

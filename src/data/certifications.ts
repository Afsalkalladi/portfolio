// src/data/certifications.ts

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  icon: string;
  type: string;
  link?: string; // Added optional link property
}

export const certificationsData: CertificationEntry[] = [
  {
    id: "c1",
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "March 2024",
    description:
      "Comprehensive course covering Python basics, data structures, web access, databases, and visualization.",
    icon: "/icons/python.svg", // Updated to use a Python icon instead of Django
    type: "Online",
    link: "https://www.coursera.org/account/accomplishments/verify/example1", // Added example link
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
    link: "https://www.coursera.org/account/accomplishments/verify/example2", // Added example link
  },
];
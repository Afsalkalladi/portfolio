// src/data/education.ts

export interface EducationEntry {
    id: string;
    institution: string;
    degree: string;
    period: string;
    details?: string;
  }
  
  export const educationData: EducationEntry[] = [
    {
      id: "e1",
      institution: "School of Engineering, CUSAT (Cochin University of Science and Technology)",
      degree: "B.Tech in Electrical and Electronics Engineering",
      period: "2022 – Present",
      details:
        "",
    },
    {
      id: "e2",
      institution: "Kalladi HSS, Kumarumputhur",
      degree: "Higher Secondary (Class 12) – Science Stream",
      period: "2020 – 2022",
      details: " 91%.",
    },
    {
      id: "e3",
      institution: "GHS Karakurissi",
      degree: "SSLC (Class 10)",
      period: "2020",
      details: " 96%.",
    },
  ];
  
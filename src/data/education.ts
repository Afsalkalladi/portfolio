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
      institution: "School of Engineering, CUSAT ",
      degree: "B.Tech in Electrical and Electronics Engineering",
      period: "2022 – Present",
      details:
        "",
    },
    {
      id: "e2",
      institution: "Kalladi HSS, Kumarumputhur",
      degree: "Higher Secondary",
      period: "2020 - 2022",
      details: " 91%.",
    },
    {
      id: "e3",
      institution: "GHS Karakurissi",
      degree: "SSLC ",
      period: "2019 - 2020",
      details: " 96%.",
    },
  ];
  
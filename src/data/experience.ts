export interface ExperienceEntry {
    id: string;
    company: string;
    role: string;
    period: string;
    details: string;
  }
  
  export const experienceData: ExperienceEntry[] = [
    {
      id: "1",
      company: "Acme Corp",
      role: "Frontend Engineer",
      period: "2023 – Present",
      details: "Building responsive React applications and improving performance by 30%."
    },
    {
      id: "2",
      company: "Startup XYZ",
      role: "Web Intern",
      period: "2022 – 2023",
      details: "Developed landing pages and integrated APIs with Next.js."
    },
    // add more entries as needed
  ];
  
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "buffalo",
    degree: "Master's in Computer Science",
    institution: "University at Buffalo",
    location: "Buffalo, New York, USA",
    startDate: "January 2025",
    endDate: "May 2027",
    gpa: "4.00/4.00",
  },
  {
    id: "iiit",
    degree: "Bachelor of Science in Computer Science",
    institution: "Indian Institute of Technology of Information Technology",
    location: "Pune, India",
    startDate: "June 2020",
    endDate: "June 2024",
    gpa: "3.91/4.00",
  },
];

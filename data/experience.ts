// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  {
    id: "software-intern-nomura",
    title: "Software Development Intern",
    company: "Nomura",
    location: "Mumbai, India",
    startDate: "January 2024",
    endDate: "July 2024",
    description:
      "Developed a dependency upgrade tool, upgraded database instances, and constructed a trade reporting application.",
    achievements: [
      "Developed a dependency upgrade tool using TypeScript, orchestrating seamless integration via GitLab pipelines, significantly reducing manual intervention and ensuring consistent updates.",
      "Upgraded three Oracle database instances, achieving a 40% increase in data processing speed.",
      "Constructed a robust Spring Boot application utilizing JMS, JDBC, and Oracle SQL for trade reporting achieving a 25% reduction in trade processing time.",
      "Improved documentation accessibility by scraping Confluence pages to generate vectorized word embeddings, successfully training GPT-based language models that achieved an average BLEU score of 51%.",
    ],
    type: "work",
  },
  {
    id: "software-intern-microsoft",
    title: "Software Development Intern",
    company: "Microsoft",
    location: "Bangalore, India",
    startDate: "May 2023",
    endDate: "July 2023",
    description:
      "Managed the ingestion and processing of radiology reports and developed solutions for semantic highlighting and text summarization.",
    achievements: [
      "Managed the ingestion, caching, and processing of over 1 million radiology reports using Azure Redis Cache, significantly reducing retrieval and processing latency by over 50%.",
      "Implemented and evaluated solutions for semantic highlighting of critical medical text, substantially enhancing the readability and accuracy of radiology reports.",
      "Developed NLP-driven text summarization methods, enabling rapid synthesis of medical data from detailed reports, thus accelerating clinical review processes.",
    ],
    type: "work",
  },
  {
    id: "student-council-affiliate",
    title: "Leader",
    company: "Indian Institute of Information Technology",
    location: "Pune, India",
    startDate: "January 2021",
    endDate: "June 2024",
    description:
      "Lead the dramatics club and served as a student council affiliate, organizing events and managing team activities.",
    achievements: [
      "Assisted in the organization and execution of student events",
      "Supported the dramatics team with website and digital content",
      "Contributed to planning and logistics for university programs",
      "Participated in student engagement activities and feedback collection",
    ],
    type: "leadership",
  },
  {
    id: "gdsc-president-mumbai",
    title: "President",
    company: "Google Developer Student Club",
    location: "Mumbai, India",
    startDate: "August 2022",
    endDate: "May 2023",
    description:
      "Led the Google Developer Student Club, organizing technical workshops, managing community projects, and fostering a collaborative environment for student developers.",
    achievements: [
      "Directed a team of 20 core members to organize over 15 workshops and events on technologies like Android, Web, and Cloud.",
      "Grew club membership by 40% through targeted outreach campaigns and engaging introductory sessions.",
      "Spearheaded participation in the Google Solution Challenge, resulting in two teams from the chapter advancing to the national level.",
      "Established partnerships with local tech startups to provide mentorship and internship opportunities for club members.",
    ],
    type: "leadership",
  },
];

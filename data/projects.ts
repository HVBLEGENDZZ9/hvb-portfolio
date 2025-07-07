export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "enigma",
    title: "Enigma",
    description:
      "A realtime chat application with end to end encryption built using web sockets",
    longDescription:
      "Developed a real-time chat application to send and receive messages including text and media in realtime.",
    technologies: [
      "MondoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "HTML",
      "JWT",
      "Daisy-UI",
      "Web Sockets",
      "OAuth",
      "Render",
      "Vite",
    ],
    achievements: [
      "Engineered a full-stack, real-time chat application using the MERN stack and Socket.IO for instant, bidirectional communication.",
      "Architected a scalable backend with robust APIs and a resilient MongoDB schema to ensure seamless message delivery and persistence.",
      "Optimized performance for concurrent users through efficient data handling and state management, ensuring a responsive user experience.",
    ],
    image: "/images/projects/enigma/enigma.png",
    github: "https://github.com/HVBLEGENDZZ9/chat-app",
    liveUrl: "",
    featured: true,
  },
  {
    id: "Javank",
    title: "Javank",
    description:
      "A feature-loaded bank application built using Java with focus on security",
    longDescription: "",
    technologies: [
      "Java",
      "Spring Framework",
      "MySQL",
      "Spring Security",
      "Spring JPA",
      "Redux",
      "JWT",
      "React",
      "TypeScript",
      "Node.js",
    ],
    achievements: [
      "Developed a secure RESTful API using Spring Security, featuring robust JWT-based authentication and authorization mechanisms.",
      "Integrated dynamic, self-updating charts and graphs for intuitive visualization of transaction history and financial data.",
      "Engineered the backend following SOLID principles, resulting in a highly maintainable, scalable, and testable codebase.",
    ],
    image: "/images/projects/onlinebank/loginPage.png",
    github: "https://github.com/HVBLEGENDZZ9/Banking-Application",
    featured: true,
  },
  {
    id: "nbearts",
    title: "NBEARTS",
    description:
      "A novel ensemble deep learning model to predict stock market trends using historical data and public opinion.",
    longDescription: "",
    technologies: [
      "Python",
      "Tensorflow",
      "Pytorch",
      "Matplotlib",
      "R",
      "Pandas",
      "Keras",
    ],
    achievements: [
      "Designed a novel ensemble model combining N-BEATS for time-series analysis with social media sentiment for trend prediction.",
      "Built a data pipeline to process over 1 million social media posts, using BERT for advanced sentiment analysis.",
      "Achieved high predictive accuracy, with a Mean Absolute Error (MAE) of 27 on the S&P 500 and a classification accuracy of 0.8.",
    ],
    image: "/images/projects/nbearts/download.png",
    github: "https://github.com/HVBLEGENDZZ9/N-BEATS-BERT-for-stock-market-",
    featured: true,
  },
  {
    id: "dsa-cp-solutions",
    title: "Advanced Algorithms & Data Structures",
    description:
      "A collection of solutions to challenging competitive programming problems from platforms like Codeforces and AtCoder, focusing on advanced algorithms and data structures.",
    longDescription:
      "This repository is a comprehensive resource for competitive programmers, containing optimized solutions for a wide range of difficult problems. It showcases the implementation of advanced data structures and algorithms, serving as a reference for tackling complex programming challenges on platforms such as Codeforces and AtCoder. The project's goal is to provide elegant and efficient solutions to problems that test the limits of algorithmic thinking.",
    technologies: ["C++", "Python", "Java", "Algorithms", "Data Structures"],
    achievements: [
      "Contains solutions to over 200 challenging problems from Codeforces and AtCoder, with a focus on 'hard' difficulty levels.",
      "Implemented a wide array of advanced data structures from scratch, including Segment Trees, Fenwick Trees, and Tries.",
      "Developed a library of common algorithms and templates to accelerate the process of solving competitive programming problems.",
      "The repository is structured to be a learning resource, with well-commented code and explanations of the underlying logic for complex problems.",
    ],
    image: "/images/projects/dsa/image.png",
    github: "https://github.com/HVBLEGENDZZ9/DSA",
    featured: true,
  },
];

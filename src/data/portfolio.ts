import resumePdf from "@/assets/Lavanya_A_Resume_Combined.pdf.asset.json";

// Edit this file to update portfolio content.
export const profile = {
  name: "Lavanya A",
  title: "Aspiring Software Developer",
  roles: ["Software Developer", "Python Full Stack Developer", "Data Analytics Enthusiast", "Generative AI Enthusiast"],
  intro:
    "I'm a Computer Science and Engineering graduate passionate about software development, data analytics, and artificial intelligence. I enjoy building practical projects, learning new technologies, and solving real-world problems through technology.",
  phone: "+91 9663199408",
  email: "lavanyashekhar909@gmail.com",
  linkedin: "https://linkedin.com/in/lavanya-a-b0759b2a0",
  github: "https://github.com/Lavanyashekhar",
  resume: resumePdf.url,
  resumeFileName: "Lavanya_A_Resume_Combined.pdf",
  paper: "https://jetir.org/papers/JETIRGX06046.pdf",
};

export const nav = ["Home", "About", "Skills", "Education", "Internships", "Projects", "Certifications", "Achievements", "Contact"];

export const stats = [
  { value: "8.51", label: "CGPA" },
  { value: "3", label: "Virtual Internships" },
  { value: "2", label: "Main Projects" },
  { value: "1", label: "Published Paper" },
];

export const skills = [
  { group: "Programming Languages", icon: "code", items: ["Python", "SQL", "C", "JavaScript", "Java (Basic)"] },
  { group: "Web Development", icon: "globe", items: ["HTML5", "CSS3", "Flask", "REST APIs", "Frontend & Backend Development"] },
  { group: "Database", icon: "db", items: ["MySQL", "SQL", "DBMS"] },
  { group: "Data Analytics", icon: "chart", items: ["Power BI", "Advanced Excel", "Pivot Tables", "VLOOKUP/XLOOKUP", "Power Query", "VBA and Macros", "Dashboard Development"] },
  { group: "Tools & Practices", icon: "tools", items: ["Git", "GitHub", "Visual Studio Code", "Version Control", "Debugging", "SDLC", "Object-Oriented Programming"] },
] as const;

export const education = [
  { degree: "Bachelor of Engineering — Computer Science and Engineering", school: "Srinivas Institute of Technology, Mangalore", years: "2022 – 2026", score: "CGPA: 8.51/10" },
  { degree: "Class XII — Science", school: "Shri Gurudeva PU College, Belthangady", years: "2020 – 2022", score: "Percentage: 87.16%" },
  { degree: "Class X", school: "St. Mary's High School, Mardala", years: "2017 – 2020", score: "Percentage: 86.56%" },
];

export const internships = [
  { role: "Android App Development using Generative AI", org: "Mindmatrix", desc: "Practical exposure to applying Generative AI tools in Android application development.", tags: ["Android", "Generative AI"] },
  { role: "Python Full Stack Developer", org: "EduSkills", desc: "Frontend-backend integration and REST API fundamentals with a full Python web stack.", tags: ["Python", "HTML", "CSS", "JavaScript", "SQL", "Flask"] },
  { role: "Python Programming", org: "InternPe", desc: "Python fundamentals, data structures, functions, file handling, OOP, and practical mini-project assignments.", tags: ["Python", "OOP", "Data Structures"] },
];

export type Project = {
  name: string;
  tech: readonly string[];
  desc: string;
  features: readonly string[];
  link?: string;
  visual: "audio" | "phone" | "chart";
};

export const projects: readonly Project[] = [
  {
    name: "Emotion-Based Music Recommendation System",
    tech: ["Python", "Machine Learning", "React", "Vite", "Audio Processing"],
    desc: "A machine learning application that analyzes audio input and identifies emotional states using speech features such as MFCC, pitch, and energy, then recommends music that fits the detected mood. The React interface lets you upload a clip, read the detected emotion on a gauge, and steer the playlist toward a target mood.",
    features: ["Audio upload with MFCC/spectrogram emotion detection", "Emotion gauge with confidence score", "Mood path: detected mood toward a chosen target mood", "Mood-matched playlist with thumbs-up feedback signals"],
    link: "https://github.com/Lavanyashekhar/Emotion-based-music-recommandation-system",
    visual: "audio",
  },
  {
    name: "Kutira-Kone",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Gemini AI", "Google Maps SDK"],
    desc: "A GenAI-powered Android app that cuts textile waste by connecting tailors, boutique owners, artisans and crafters through a hyper-local fabric scrap exchange marketplace.",
    features: ["Upload and list fabric scraps to swap, give away or sell", "Gemini AI fabric classification and upcycling ideas", "Radius-based discovery on Google Maps (1–25 km)", "In-app buyer–seller chat and trade notifications"],
    link: "https://github.com/Lavanyashekhar/Kutira-Kone",
    visual: "phone",
  },
  {
    name: "Data Analytics Case Studies",
    tech: ["Power BI", "Advanced Excel", "SQL", "Python"],
    desc: "Business case studies solved during the Mindcreative School data analytics course, turning retail, healthcare, HR and e-commerce data into interactive Power BI dashboards and presentation-ready insight decks.",
    features: [
      "Five case studies: RetailMart India sales, CityLife hospital patient analytics, HR analytics, e-commerce and BrightFuture student",
      "Power Query data cleaning and DAX measures for revenue, cost and profit",
      "Interactive Power BI dashboards, each published with a PDF summary",
      "Insights presented through PowerPoint decks for each case study",
    ],
    link: "https://github.com/Lavanyashekhar/Data-Analyst-project",
    visual: "chart",
  },
];

export const certifications = [
  { name: "Data Analytics Course", issuer: "Mindcreative School", note: "2 months" },
  { name: "Python Full Stack Developer", issuer: "EduSkills", note: "Virtual Internship Certification" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", note: "Networking Academy" },
];

export const achievements = [
  { title: "Published Research Paper", desc: "Co-authored \u201cMusic Emotion Recognition System\u201d, published in JETIR.", link: "https://jetir.org/papers/JETIRGX06046.pdf" },
  { title: "Agentblazer Champion 2026", desc: "Achieved Agentblazer Champion status through Salesforce Trailhead." },
  { title: "Swachh Bharat Abhiyan", desc: "Participated in the Clean India Mission." },
];

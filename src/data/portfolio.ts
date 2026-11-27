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

export const projects = [
  {
    name: "Emotion-Based Music Recommendation System",
    tech: ["Python", "Machine Learning", "Signal Processing", "Audio Processing"],
    desc: "A machine learning application that analyzes audio input and identifies emotional states using speech features such as MFCC, pitch, and energy, then recommends music that fits the detected mood.",
    features: ["Audio input and processing", "Emotion classification", "Mood-based music recommendation", "Personalized suggestions"],
    link: "https://github.com/Lavanyashekhar",
    visual: "audio",
  },
  {
    name: "Android App Development using Generative AI",
    tech: ["Android Development", "Generative AI"],
    desc: "An Android application built during the Mindmatrix virtual internship, using Generative AI tools within the Android app development workflow.",
    features: ["Built in the Mindmatrix internship", "Generative AI–assisted workflow", "Android application development"],
    link: "https://github.com/Lavanyashekhar",
    visual: "phone",
  },
] as const;

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

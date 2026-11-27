export const profile = {
  name: "Yevhenii Lymarenko",
  role: "React-focused Front-End Developer",
  location: "Girona, Spain",
  email: "wellgardy@hotmail.com",
  github: "https://github.com/YevheniiLi",
  linkedin: "https://www.linkedin.com/in/lymarenko/",
  telegram: "https://t.me/eyeije",
  whatsapp: "https://wa.me/34692142247",
  cv: "https://drive.google.com/uc?export=download&id=18YoAw962WatK2moG4QQr7CeGAJySSPGu",
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    eyebrow: "01 / Core interface",
    title: "Front-end craft",
    description:
      "The tools I reach for when shaping responsive, accessible product interfaces.",
    skills: ["React", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Redux Toolkit"],
    featured: ["React", "JavaScript ES6+", "TypeScript"],
  },
  {
    eyebrow: "02 / Product foundations",
    title: "Full-stack fluency",
    description:
      "Enough back-end context to collaborate well across an application and keep user flows connected.",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Firebase", "Authentication"],
    featured: [],
  },
  {
    eyebrow: "03 / Delivery workflow",
    title: "Team-ready workflow",
    description:
      "Practical tools for integrating services, maintaining quality, and moving work through a shared codebase.",
    skills: ["GraphQL", "Apollo Client", "Git", "GitHub", "Responsive design", "Code review"],
    featured: [],
  },
];

export const projects = [
  {
    index: "01",
    title: "chatapp.next",
    kind: "Real-time messaging",
    image: "/images/project-chatapp-next.png",
    imageAlt: "Editorial illustration of a real-time chat interface",
    description:
      "A modern real-time chat application built with Next.js, TypeScript, and Firebase.",
    focus: "Real-time conversations with Firebase",
    stack: ["Next.js", "TypeScript", "Firebase"],
    repository: "https://github.com/YevheniiLi/chatapp.next",
    tone: "chat",
  },
  {
    index: "02",
    title: "Lumiere",
    kind: "Travel planning platform",
    image: "/images/project-lumiere.png",
    imageAlt: "Editorial illustration of a travel planning platform",
    description:
      "A fictional travel platform that brings discovery, routes, and trip ideas into one considered experience.",
    focus: "Travel discovery and route design",
    stack: ["TypeScript", "Travel platform"],
    repository: "https://github.com/YevheniiLi/Lumiere",
    tone: "travel",
  },
  {
    index: "03",
    title: "turi-bot-tg",
    kind: "Telegram trip planner",
    image: "/images/project-turi-bot.png",
    imageAlt: "Editorial illustration of a Telegram trip planning bot",
    description:
      "A Telegram bot created to make trip planning feel more direct, useful, and conversational.",
    focus: "Conversational trip planning",
    stack: ["Telegram", "Trip planning"],
    repository: "https://github.com/YevheniiLi/turi-bot-tg",
    tone: "bot",
  },
];

export const experience = [
  {
    period: "Apr 2023 — Mar 2024",
    title: "Front-End Developer Intern",
    organisation: "Lentii ApS · Aarhus, Denmark",
    type: "Internship",
    summary:
      "Contributed to the UI of a Danish technology startup's web platform using Angular, TypeScript, Bootstrap, and Tailwind CSS.",
    points: [
      "Worked with REST APIs as part of product-facing interface work.",
      "Took part in regular code reviews and a team-based development workflow.",
    ],
  },
  {
    period: "Dec 2021 — Jan 2023",
    title: "Full-Stack Development Training",
    organisation: "GoIT",
    type: "Training",
    summary:
      "Completed practical full-stack development training with hands-on React, JavaScript, Redux, REST API, HTML, CSS, and Git work.",
    points: [
      "Built web-project coursework that connected front-end interfaces with APIs.",
      "Developed a foundation for continuing growth in both front-end and junior full-stack roles.",
    ],
  },
];

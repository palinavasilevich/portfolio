interface Technology {
  icon: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  githubLink: string;
  deployLink: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mighty Verbs",
    description:
      "Mighty Verbs is a modern full-stack web application for learning German irregular verbs. The project focuses on clean architecture, scalable structure, and a distraction-free learning experience.",
    technologies: [
      { icon: "SiReact", name: "React" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
      { icon: "SiShadcnui", name: "ShadCN UI" },
    ],
    githubLink:
      "https://github.com/palinavasilevich/german-irregular-verbs-app",
    deployLink: "https://german-irregular-verbs-app.onrender.com",
    imageUrl: "/images/projects/mighty-verbs.png",
  },
];

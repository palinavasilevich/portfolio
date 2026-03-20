interface Technology {
  icon: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  githubLink: string;
  deployLink: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: crypto.randomUUID(),
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

  {
    id: crypto.randomUUID(),
    title: "The Light Of Memory",
    description:
      "The Light Of Memory is an interactive text-and-graphics game where the player goes through story scenes, solves puzzles, and makes decisions that affect the story outcome.",
    technologies: [
      { icon: "SiReact", name: "React" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
    ],
    githubLink: "https://github.com/palinavasilevich/the-light-of-memory-game",
    deployLink: "https://the-light-of-memory-game.onrender.com/",
    imageUrl: "/images/projects/the-light-of-memory.png",
  },

  {
    id: crypto.randomUUID(),
    title: "Miro Clone",
    description:
      "A Miro-inspired boards application for creating and managing interactive workspaces. Built with scalable Feature-Sliced Design architecture, it includes reusable UI components, flexible layouts, and state-driven interactions for working with boards and their content.",
    technologies: [
      { icon: "SiReact", name: "React" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
    ],
    githubLink: "https://github.com/palinavasilevich/react-miro-app",
    deployLink: "",
    imageUrl: "/images/projects/miro.png",
  },
];

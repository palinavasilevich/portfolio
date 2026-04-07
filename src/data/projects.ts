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
  deployLink?: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "mighty-verbs",
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
    id: "the-light-of-memory",
    title: "The Light Of Memory",
    description:
      "The Light Of Memory is an interactive text-and-graphics game where the player goes through story scenes, solves puzzles, and makes decisions that affect the story outcome.",
    technologies: [
      { icon: "SiReact", name: "React" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
      { icon: "SiShadcnui", name: "ShadCN UI" },
    ],
    githubLink: "https://github.com/palinavasilevich/the-light-of-memory-game",
    deployLink: "https://the-light-of-memory-game.onrender.com/",
    imageUrl: "/images/projects/the-light-of-memory.png",
  },

  {
    id: "miro-clone",
    title: "Miro Clone",
    description:
      "A Miro-inspired boards application for creating and managing interactive workspaces. Built with scalable Feature-Sliced Design architecture, it includes reusable UI components, flexible layouts, and state-driven interactions for working with boards and their content.",
    technologies: [
      { icon: "SiReact", name: "React" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiReactquery", name: "TanStack Query" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
      { icon: "SiShadcnui", name: "ShadCN UI" },
    ],
    githubLink: "https://github.com/palinavasilevich/react-miro-app",
    deployLink: "https://react-miro-app.onrender.com/login",
    imageUrl: "/images/projects/miro.png",
  },

  {
    id: "what-to-read",
    title: "What can I read today?",
    description: `"What can I read today?" is a web application that helps users discover their next favorite book through personalized recommendations. By exploring books based on language, genre, author, and more, readers can easily find titles that match their interests. The app provides a clean, intuitive interface and a seamless way to explore new reads, making book discovery simple and enjoyable.`,
    technologies: [
      { icon: "SiNextdotjs", name: "Next.js" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiReactquery", name: "TanStack Query" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
      { icon: "SiShadcnui", name: "ShadCN UI" },
    ],
    githubLink: "https://github.com/palinavasilevich/book-app",
    deployLink: "https://book-app-mu-smoky.vercel.app",
    imageUrl: "/images/projects/what-to-read.png",
  },

  {
    id: "mighty-articles",
    title: "Mighty Articles",
    description:
      "Mighty Articles is an interactive web app designed for learning and practicing German noun articles.",
    technologies: [
      { icon: "SiReact", name: "React" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
      { icon: "SiOpenai", name: "Groq API" },
    ],
    githubLink: "https://github.com/palinavasilevich/mighty-articles",
    deployLink: "https://mighty-articles.onrender.com/",
    imageUrl: "/images/projects/mighty-articles.png",
  },
];

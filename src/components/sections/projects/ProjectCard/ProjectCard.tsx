import React from "react";

import { Project } from "@/data/projects";
import Image from "next/image";

import { FaExternalLinkAlt, FaGithub, FaGlobe } from "react-icons/fa";

import {
  SiExpo,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { imageUrl, title, description, technologies, githubLink, deployLink } =
    project;

  const icons: Record<string, React.ElementType> = {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiShadcnui,
    SiReactquery,
    SiNodedotjs,
    SiStyledcomponents,
    SiExpo,
    SiVite,
    SiRedux,
    SiMui,
    SiZod,
    default: FaGlobe,
  };

  return (
    <div
      data-testid="project-card"
      className="group relative rounded-xl transition-colors-custom bg-white dark:bg-zinc-800/50 shadow-sm hover:shadow-md border border-gray-200 dark:border-zinc-700 flex flex-col"
    >
      <div className="aspect-video relative mt-6">
        <a
          href={deployLink}
          target="_BLANK"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="transition-transform duration-500 group-hover:scale-105 object-contain"
          />
        </a>
      </div>

      <div className="flex flex-col grow p-8">
        <div className="grow">
          <h3 className="text-2xl font-medium text-primary-dark dark:text-zinc-50 mb-4">
            {title}
          </h3>
          <p className="text-secondary dark:text-zinc-300 mb-6">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="flex items-center gap-1"
              >
                {React.createElement(icons[tech.icon] || icons.default, {
                  className: "w-5 h-5 text-secondary dark:text-zinc-300",
                })}
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                       text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                       transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                       text-secondary dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80
                       transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

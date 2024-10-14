import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectsData from "../data/projects.json";

interface ProjectsProps {
  locales: {
    projects: string;
    year: string;
    project: string;
    stack: string;
    link: string;
  };
}

export default function Projects({ locales }: ProjectsProps) {
  return (
    <div
      className="py-6 sm:py-12 md:py-20 bg-purple-500/5 drop-shadow-2xl border-[2px] border-purple-500/10 rounded-md px-6"
      id="projects"
    >
      <h2 className="font-bold text-3xl sm:text-5xl uppercase">
        {locales.projects}
      </h2>
      <table className="w-full mt-4 sm:mt-12">
        <thead>
          <tr className="text-sm font-bold uppercase">
            <td className="py-4 pr-4">{locales.year}</td>
            <td className="py-4 pr-4">{locales.project}</td>
            <td className="py-4 pr-4 hidden lg:table-cell">{locales.stack}</td>
            <td className="py-4 pr-4 hidden sm:table-cell">{locales.link}</td>
          </tr>
        </thead>
        <tbody>
          {ProjectsData.projects.map((project) => (
            <tr
              key={`${project.name}`}
              className="border-b-[1px] border-neutral-400/10"
            >
              <td className="py-4 pr-4 text-sm text-neutral-400">
                {project.year}
              </td>
              <td className="py-4 pr-4 font-bold capitalize">
                <div className="hidden sm:block">{project.name}</div>
                <div className="sm:hidden">
                  {project.link ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="hover:text-purple-400 transition-all flex items-center gap-2"
                    >
                      <span>{project.name}</span>
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div className="hover:text-purple-400 transition-all">
                      <span>{project.name}</span>
                    </div>
                  )}
                </div>
              </td>
              <td className="py-4 pr-4 hidden lg:table-cell">
                <ul className="flex flex-wrap gap-2 font-medium text-sm">
                  {project.stack.map((stack) => (
                    <li
                      key={`${project.name}-${stack}`}
                      className="flex items-center bg-purple-500/10 rounded-2xl text-purple-400 px-3 py-1"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden sm:table-cell">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="hover:text-purple-400 transition-all tracking-tight text-neutral-400 flex items-center gap-2"
                  >
                    <span className="font-medium text-nowrap">
                      {project.link_text}
                    </span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

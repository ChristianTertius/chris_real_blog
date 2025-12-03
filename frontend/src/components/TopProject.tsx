import type { Project } from "@/types";
import { ChevronRight, Presentation } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import projectsData from '@/datas/projects.json'

const TopProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const top3 = (projectsData as Project[]).slice(-3).reverse()
    setProjects(top3)
  }, []);

  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <Presentation className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Projects</h1>
      </div>

      <div className="mt-5 space-y-7">
        {projects.map((project) => (
          <a href={`${project.link_github}`} target="_blank" className="block rounded-md space-y-2 group cursor-pointer">
            <div className="space-y-1">
              <h1 className="text-xl group-hover:text-third transition-colors duration-150">{project.name}</h1>
              <p className="opacity-80 text-sm">{project.type} • {project.year}</p>
            </div>
            <p>{project.achievement}</p>
          </a>
        ))}

        <Link to="/projects" className="text-third text-shadow-amber-950 text-sm items-center flex gap-1 group hover:underline underline-offset-8">
          See More
          <ChevronRight className="size-4 group-hover:translate-x-1 transition-all duration-150" /></Link>
      </div>
    </div>
  )
}

export default TopProject;

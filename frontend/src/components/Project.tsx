import { ArrowUpRight, ChevronLeft, ChevronRight, GithubIcon } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useGSAPTyping } from "../hooks/useGSAPTyping";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react";
import type { Project } from "@/types";
import projectsData from '@/datas/projects.json'

const Project = () => {
  useDocumentTitle('Projects - Chris')
  const [hasTyped, setHasTyped] = useState(() => {
    return sessionStorage.getItem('projectTypingComplete') === 'true'
  })

  const { elementRef, isComplete } = useGSAPTyping('Project', {
    speed: 0.02,
    delay: 0.3,
    skip: hasTyped,
    cursor: true,
    onComplete: () => {
      console.log('Typing Complete')
      sessionStorage.setItem('projectTypingComplete', 'true')
      setHasTyped(true)
    }
  })

  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5

  useEffect(() => {
    const sortedProjects = (projectsData as Project[]).sort((a, b) => {
      return b.year - a.year
    })
    setProjects(sortedProjects);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProject = projects.slice(indexOfFirstProject, indexOfLastProject)

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="px-5 mt-5 sm:px-0">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          <span ref={elementRef}>{hasTyped ? 'Project' : ''}</span>
          {!isComplete && !hasTyped && (
            <span className="inline-block ml-1 text-third">|</span>
          )}
        </h1>
      </div>

      {currentProject.map((project) => (
        <div className="block my-5 hover:bg-third/5 space-y-5 border border-secondary/20 p-5 rounded-md group hover:border-third transition-all duration-150">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold group-hover:text-third transition-all duration-150">{project.name}</h1>
              </div>
              <p className="opacity-80">{project.type} • {project.year}</p>
            </div>
            {project.link_website && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={`${project.link_website}`} target="_blank" >
                    <ArrowUpRight className="hover:text-third" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to the website</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          <div>
            <h1 className="text-xl font-bold mb-2">Achievement</h1>
            {project.achievement}
          </div>

          <div>
            <h1 className="text-xl font-bold mb-2">Technologies</h1>
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 flex-wrap">
                {project.techs.map((tech) => (
                  <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">{tech}</p>
                ))}
              </div>

              {/*TODO:: bekeng ini reusable*/}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={`${project.link_github}`} target="_blank">
                    <GithubIcon className="cursor-pointer" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Go to the Code</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls*/}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-secondary/20 hover:bg-third/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`px-4 py-2 rounded-md border transition-all ${currentPage === pageNum
                  ? 'bg-third text-white border-third'
                  : 'border-secondary/20 hover:bg-third/10'
                  }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-secondary/20 hover:bg-third/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}

      <p className="text-center mt-5 text-sm opacity-70">
        Showing {indexOfFirstProject + 1} - {Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
      </p>
    </div>
  )
}

export default Project;

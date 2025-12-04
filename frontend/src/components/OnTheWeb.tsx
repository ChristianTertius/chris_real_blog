import { FileDown, GithubIcon, InstagramIcon, Linkedin } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const OnTheWeb = () => {
  return (
    <div className="my-5 flex gap-2 mx-auto items-center">
      <a href="/CV - Fullstack Developer - Christian Carlos Tertius .pdf" className="border border-third/20 hover:bg-third/10 hover:border-third dark:border dark:border-third/30 flex items-center gap-2 transition-all size-full duration-150 rounded-sm p-2 block gap-2 text-sm">
        <FileDown className="size-4" /> Download CV
      </a>

      <Tooltip>
        <TooltipTrigger>
          <a href="https://github.com/ChristianTertius" className="hover:bg-third/70 transition-all duration-150 rounded-sm p-2 flex gap-2" target="_blank">
            <GithubIcon />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Go to Github</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <a href="https://www.instagram.com/kevinppxs/" className="hover:bg-third/70 transition-all duration-150 rounded-sm p-2 flex gap-2" target="_blank">
            <InstagramIcon />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Go to Instagram</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <a href="https://www.linkedin.com/in/christian-carlos-tertius/" className="hover:bg-third/70 transition-all duration-150 rounded-sm p-2 flex gap-2" target="_blank">
            <Linkedin />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Go to LinkedIn</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default OnTheWeb

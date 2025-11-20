import { Edit2, GithubIcon, InstagramIcon, Linkedin, Mail, PinIcon, UserRound } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const OnTheWeb = () => {
  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <UserRound className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">On the web</h1>
        <Tooltip>
          <TooltipTrigger>
            <Edit2 className="ml-1 size-5 cursor-pointer hover:text-third" />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Add new social</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="mt-5 space-y-2">

        {/* TODO: fix this!!!! */}
        <a href="mailto:christian160103@gmail.com" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2">
          <Mail />
          christian160103@gmail.com
        </a>
        <a href="https://github.com/ChristianTertius?tab=repositories" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2" target="_blank">
          <GithubIcon />
          ChristianTertius
        </a>
        <a href="https://www.instagram.com/kevinppxs/" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2" target="_blank">
          <InstagramIcon />
          christian_christer
        </a>
        <a href="https://www.linkedin.com/in/christian-carlos-tertius/" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2" target="_blank">
          <Linkedin />
          Christian Carlos Tertius
        </a>

      </div>
    </div>
  )
}

export default OnTheWeb

import { Edit2, GithubIcon, InstagramIcon, Linkedin, Mail, PinIcon, PlusIcon, UserRound } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

const OnTheWeb = () => {
  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <UserRound className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">On the web</h1>
        <Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <PlusIcon className="hover:text-third cursor-pointer" />
              </DialogTrigger>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p>Add New Social</p>
            </TooltipContent>
          </Tooltip>

          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Add New Social</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="icon">Icon</Label>
                <Input id="icon" name="icon" placeholder="input icon" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" placeholder="input username" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="link">Link</Label>
                <Input id="link" name="link" placeholder="input link" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-main cursor-pointer">Cancel</Button>
              </DialogClose>
              <Button type="submit" variant="outline" className="bg-main cursor-pointer">Add Social</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-5 space-y-2">

        {/* TODO: fix this!!!! */}
        <a href="mailto:christian160103@gmail.com" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2 sm:max-w-sm">
          <Mail />
          christian160103@gmail.com
        </a>
        <a href="https://github.com/ChristianTertius?tab=repositories" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2 sm:max-w-sm" target="_blank">
          <GithubIcon />
          ChristianTertius
        </a>
        <a href="https://www.instagram.com/kevinppxs/" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2 sm:max-w-sm" target="_blank">
          <InstagramIcon />
          christian_christer
        </a>
        <a href="https://www.linkedin.com/in/christian-carlos-tertius/" className="hover:bg-third transition-all duration-150 rounded-sm p-2 flex gap-2 sm:max-w-sm" target="_blank">
          <Linkedin />
          Christian Carlos Tertius
        </a>

      </div>
    </div>
  )
}

export default OnTheWeb

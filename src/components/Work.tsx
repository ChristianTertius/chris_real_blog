import { BicepsFlexed, PlusIcon } from "lucide-react"
import TagInput from "./TagInput";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import WorkCard from "./Work/WorkCard"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

const Work = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <BicepsFlexed className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Work</h1>
        <Dialog>
          <Tooltip>
            <TooltipTrigger>
              <DialogTrigger>
                <PlusIcon className="hover:text-third cursor-pointer" />
              </DialogTrigger>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p>Add New Work</p>
            </TooltipContent>
          </Tooltip>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Work</DialogTitle>
              <DialogDescription className="text-white/50 text-sm">Input your Career here :)</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="role">Role</Label>
                <Input id="role" name="role" placeholder="input role" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="place">Place</Label>
                  <Input id="place" name="place" placeholder="input place" />
                </div>
                <div className="grid gap-3 w-1/4">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" name="year" placeholder="year" />
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" placeholder="input description" />
              </div>
              <div className="grid gap-3">
                <TagInput />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-main cursor-pointer">Cancel</Button>
              </DialogClose>
              <Button type="submit" variant="outline" className="bg-main cursor-pointer">Add Work</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <WorkCard />
    </div>
  )
}

export default Work

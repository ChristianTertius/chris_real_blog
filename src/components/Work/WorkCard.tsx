import { Edit2, PlusIcon } from "lucide-react";
import WorkTechStack from "./WorkTechStack";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import TagInput from "./../TagInput";
import { Textarea } from "../ui/textarea";

const WorkCard = () => {
  return (
    <div className="border border-secondary/20 rounded-sm p-5">

      <div className="flex gap-2 items-center">
        <h1 className="text-xl">Fullstack Developer Intern </h1>
        <Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Edit2 className="size-4 hover:text-third cursor-pointer" />
              </DialogTrigger>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p>Edit Your Work</p>
            </TooltipContent>
          </Tooltip>

          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Edit Your Work</DialogTitle>
              <DialogDescription className="text-white/50 text-sm">Edit your work</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="role">Role</Label>
                <Input id="role" name="role" placeholder="input role" defaultValue={"Fullstack Developer"} />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="place">Place</Label>
                  <Input id="place" name="place" placeholder="input place" defaultValue={"PT Prodia Widyahusada Tbk"} />
                </div>
                <div className="grid gap-3 w-1/4">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" name="year" placeholder="year" defaultValue={"2024"} />
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" placeholder="input description" defaultValue={`- Developed and maintained three internal systems using PHP (Laravel & CodeIgniter), collaborating with IT teams and optimizing MySQL databases for better performance.\n-Independently developed a referral application and a data parsing tool from scratch, handling frontend, backend, and database design, successfully deployed for internal use, improving workflow efficiency and reducing manual workload.\n-Assisted in debugging, testing, and implementing new features across systems, enhancing internal operations and user experience.`} />
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

      <h1 className="opacity-80">PT Prodia Widyahusada Tbk (Feb 2024 - Feb 2025)</h1>
      <div className="mt-3">
        <p>- Developed and maintained three internal systems using PHP (Laravel & CodeIgniter), collaborating with IT teams and
          optimizing MySQL databases for better performance. </p>
        <p>- Independently developed a referral application and a data parsing tool from scratch, handling frontend, backend, and database
          design, successfully deployed for internal use, improving workflow efficiency and reducing manual workload. </p>
        <p>- Assisted in debugging, testing, and implementing new features across systems, enhancing internal operations and user
          experience.</p>
        <WorkTechStack />
      </div>
    </div>
  )
}

export default WorkCard;

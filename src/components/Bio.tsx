import { ClosedCaptionIcon, Cross, PinIcon, PlusIcon } from "lucide-react"
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
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"

const Bio = () => {
  return (

    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <PinIcon className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Bio</h1>
        <Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <PlusIcon className="hover:text-third cursor-pointer" />
              </DialogTrigger>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p>Add new Bio</p>
            </TooltipContent>
          </Tooltip>

          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Add new Bio</DialogTitle>
              <DialogDescription className="text-white mt-2">Input Your Journey Here :)</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <div className="border p-2 rounded-md">
                  <p>2023 | Born in Manado, Indonesia</p>
                </div>
                <div className="border p-2 rounded-md">
                  <p>2025 | Complete Bachelor Degree in Binus University</p>
                </div>
                <div className="border p-2 rounded-md">
                  <p>2023 | Work on lalala</p>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="year">Year</Label>
                <Input id="year" name="year" placeholder="input year" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" name="bio" placeholder="input bio" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-main cursor-pointer">Cancel</Button>
              </DialogClose>
              <Button type="submit" variant="outline" className="bg-main cursor-pointer">Add Bio</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-5 space-y-2">
        <h1>2003 Born in Manado, Indonesia</h1>
        <h1>2025 Completed the Bachelor's Program in the School of Commputer Science at Bina Nusantara University</h1>
        <h1>2025 Work on lalala</h1>
      </div>
    </div>

  )
}

export default Bio;

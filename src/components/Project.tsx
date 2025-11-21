import { ArrowUpRight, Edit2, GithubIcon, PlusIcon } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useGSAPTyping } from "../hooks/useGSAPTyping";
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
import { Textarea } from "./ui/textarea";
import TagInput from "./TagInput";

const Project = () => {
  useDocumentTitle('Projects - Chris')

  const { elementRef, isComplete } = useGSAPTyping('Projects', {
    speed: 0.08,
    delay: 0.3,
    cursor: true,
    onComplete: () => console.log('Typing Complete')
  })

  return (
    <div className="px-5 mt-5 sm:px-0">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          <span ref={elementRef}></span>
          {!isComplete && (
            <span className="inline-block ml-1 text-third">|</span>
          )}
        </h1>
        <div className="flex items-center justify-between gap-2">
          <Dialog>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <PlusIcon className="hover:text-third cursor-pointer" />
                </DialogTrigger>
              </TooltipTrigger>

              <TooltipContent side="bottom">
                <p>Add New Project</p>
              </TooltipContent>
            </Tooltip>

            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader className="mb-3" >
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="projectname">Project Name</Label>
                  <Input id="projectname" name="projectname" placeholder="input projectname" />
                </div>
                <div className="flex items-center justify-between gap-5">
                  <div className="grid gap-3 w-1/2">
                    <Label htmlFor="about">About</Label>
                    <Input id="about" name="about" placeholder="input about" />
                  </div>
                  <div className="grid gap-3 w-1/2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" name="year" placeholder="input year" />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="achievement">Achievement</Label>
                  <Textarea id="achievement" name="achievement" placeholder="input achievement" />
                </div>
                <div className="grid gap-3">
                  <TagInput />
                </div>
                <div className="flex gap-5 justify-between">
                  <div className="grid gap-3 w-full">
                    <Label htmlFor="link_github">Link Github</Label>
                    <Input id="link_github" name="link_github" placeholder="input link_github" />
                  </div>
                  <div className="grid gap-3 w-full">
                    <Label htmlFor="link_web">Link_web</Label>
                    <Input id="link_web" name="link_web" placeholder="input link_web" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="bg-main cursor-pointer">Cancel</Button>
                </DialogClose>
                <Button type="submit" variant="outline" className="bg-main cursor-pointer">Add Project</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="block my-5 space-y-5 border border-secondary/20 p-5 rounded-md group hover:border-third transition-all duration-150">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-extrabold group-hover:text-third transition-all duration-150">StockSense</h1>
              <Dialog>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                      <Edit2 className="size-5 hover:text-third cursor-pointer" />
                    </DialogTrigger>
                  </TooltipTrigger>

                  <TooltipContent side="bottom">
                    <p>Edit Project</p>
                  </TooltipContent>
                </Tooltip>

                <DialogContent className="sm:max-w-[900px]">
                  <DialogHeader className="mb-3" >
                    <DialogTitle>Edit Project</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="projectname">Project Name</Label>
                      <Input id="projectname" name="projectname" placeholder="input projectname" defaultValue={"Stocksense"} />
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <div className="grid gap-3 w-1/2">
                        <Label htmlFor="about">About</Label>
                        <Input id="about" name="about" placeholder="input about" defaultValue={"Inventory Management"} />
                      </div>
                      <div className="grid gap-3 w-1/2">
                        <Label htmlFor="year">Year</Label>
                        <Input id="year" name="year" placeholder="input year" defaultValue={"June 2025 - Oct 2025"} />
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="achievement">Achievement</Label>
                      <Textarea id="achievement" name="achievement" placeholder="input achievement" defaultValue={`- Handle more then 50 data user realtime\n- Data Report for the userr\n-Achievement\n-Achievement`} />
                    </div>
                    <div className="grid gap-3">
                      <TagInput />
                    </div>
                    <div className="flex gap-5 justify-between">
                      <div className="grid gap-3 w-full">
                        <Label htmlFor="link_github">Link Github</Label>
                        <Input id="link_github" name="link_github" placeholder="input link_github" defaultValue={"https://stocksense.site/"} />
                      </div>
                      <div className="grid gap-3 w-full">
                        <Label htmlFor="link_web">Link_web</Label>
                        <Input id="link_web" name="link_web" placeholder="input link_web" defaultValue={"https://github.com/Xynno22/InventoryManagement"} />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="bg-main cursor-pointer">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" variant="outline" className="bg-main cursor-pointer">Edit Project</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <p className="opacity-80">Inventory Management System (June 2025 - Oct 2025)</p>
          </div>
          <Tooltip >
            <TooltipTrigger asChild>
              <a href="https://stocksense.site/" target="_blank" >
                <ArrowUpRight className="hover:text-third" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Go to the website</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Achievement</h1>
          <p>- Handle more then 50 data user realtime</p>
          <p>- Data Report for the user</p>
          <p>- Achievement</p>
          <p>- Achievement</p>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Technologies</h1>
          <div className="flex justify-between items-center ">
            <div className="flex gap-2 flex-wrap">
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Laravel</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">MySQL</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Tailwind</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">PHP Breeze</p>
            </div>

            {/*TODO:: bekeng ini reusable*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/Xynno22/InventoryManagement" target="_blank">
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

      {/* <div className="block my-5 space-y-5 border border-secondary/20 p-5 rounded-md group hover:border-third transition-all duration-150"> */}
      {/*   <div className="flex justify-between"> */}
      {/*     <div> */}
      {/*       <h1 className="text-3xl font-extrabold group-hover:text-third transition-all duration-150">Pisonz Store</h1> */}
      {/*       <p className="opacity-80">Top Up Online Games </p> */}
      {/*     </div> */}
      {/*     <Tooltip> */}
      {/*       <TooltipTrigger> */}
      {/*         <a href="https://stocksense.site/" target="_blank" > */}
      {/*           <ArrowUpRight className="hover:text-third" /> */}
      {/*         </a> */}
      {/*       </TooltipTrigger> */}
      {/**/}
      {/*       <TooltipContent side="bottom"> */}
      {/*         <p>Go to the website</p> */}
      {/*       </TooltipContent> */}
      {/*     </Tooltip> */}
      {/*   </div> */}
      {/**/}
      {/*   <div> */}
      {/*     <h1 className="text-xl font-bold mb-2">Achievement</h1> */}
      {/*     <p>- Handle more then 50 data user realtime</p> */}
      {/*     <p>- Data Report for the user</p> */}
      {/*     <p>- Achievement</p> */}
      {/*     <p>- Achievement</p> */}
      {/*   </div> */}
      {/**/}
      {/*   <div> */}
      {/*     <h1 className="text-xl font-bold mb-2">Technologies</h1> */}
      {/*     <div className="flex justify-between items-center "> */}
      {/*       <div className="flex gap-2 flex-wrap"> */}
      {/*         <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Laravel</p> */}
      {/*         <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">MySQL</p> */}
      {/*         <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Tailwind</p> */}
      {/*         <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">PHP Breeze</p> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}

    </div>
  )
}

export default Project;

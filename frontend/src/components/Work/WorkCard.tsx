import { Edit2 } from "lucide-react";
// import WorkTechStack from "./WorkTechStack";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { workService } from "@/services/workService";
import type { Work } from "@/types";
import WorkFormDialog from "./WorkFormDialog";
import { toast } from "sonner";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const WorkCard = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const data = await workService.getAll();
      setWorks(data);
    } catch (err) {
      console.log("failed to fetch works", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateWork = async (workData: Partial<Work>) => {
    try {
      await workService.update(workData.id!, workData);
      toast.success("Work updated successfully!");
      fetchWorks(); // Refresh data
    } catch (err) {
      toast.error("Failed to update work");
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (!works || works.length === 0) {
    return null;
  }

  return (
    <>
      {works.map((work) => (
        <div className="border border-secondary/20 rounded-sm p-5">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl">{work.role}</h1>
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
                    <Input id="role" name="role" placeholder="input role" defaultValue={work.role} />
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="grid gap-3 w-full">
                      <Label htmlFor="place">Place</Label>
                      <Input id="place" name="place" placeholder="input place" defaultValue={work.place} />
                    </div>
                    <div className="grid gap-3 w-1/4">
                      <Label htmlFor="year">Year</Label>
                      <Input id="year" name="year" placeholder="year" defaultValue={"2024"} />
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" placeholder="input description" defaultValue={work.description} />
                  </div>
                  <div className="grid gap-3">
                    {/* <TagInput /> */}
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

          <h1 className="opacity-80">{work.place}</h1>
          <div className="mt-3">
            {work.description}
            <div className="flex gap-2 mt-5 justify-end flex-wrap">
              {work.techs.map((tech) => (
                <div className="border rounded-full px-2 text-sm">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default WorkCard;

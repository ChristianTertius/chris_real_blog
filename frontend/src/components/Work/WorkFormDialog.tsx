import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import TagInput from "../TagInput";
import type { Work } from "@/types";

interface WorkFormDialogProps {
  trigger: React.ReactNode;
  work?: Work;
  onSubmit: (data: Partial<Work>) => void;
  mode: "add" | "edit";
}

export default function WorkFormDialog({ trigger, work, onSubmit, mode }: WorkFormDialogProps) {
  const [formData, setFormData] = useState({
    role: work?.role || "",
    place: work?.place || "",
    description: work?.description || "",
    techs: work?.techs || [],
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{mode === "edit" ? "Edit Your Work" : "Add New Work"}</DialogTitle>
          <DialogDescription className="text-white/50 text-sm">
            {mode === "edit" ? "Edit your work details" : "Add a new work experience"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              name="role"
              placeholder="input role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-between gap-5">
            <div className="grid gap-3 w-full">
              <Label htmlFor="place">Place</Label>
              <Input
                id="place"
                name="place"
                placeholder="input place"
                value={formData.place}
                onChange={(e) => setFormData({ ...formData, place: e.target.value })}
              />
            </div>
            {/* <div className="grid gap-3 w-1/4"> */}
            {/*   <Label htmlFor="year">Year</Label> */}
            {/*   <Input */}
            {/*     id="year" */}
            {/*     name="year" */}
            {/*     placeholder="year" */}
            {/*     value={formData.year} */}
            {/*     onChange={(e) => setFormData({ ...formData, year: e.target.value })} */}
            {/*   /> */}
            {/* </div> */}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="input description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid gap-3">
            {/* <TagInput */}
            {/*   value={formData.techs} */}
            {/*   onChange={(techs) => setFormData({ ...formData, tags })} */}
            {/* /> */}
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="bg-main cursor-pointer">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              variant="outline"
              className="bg-main cursor-pointer"
              onClick={handleSubmit}
            >
              {mode === "edit" ? "Save Changes" : "Add Work"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { ClosedCaptionIcon, Cross, PinIcon, PlusIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import type React from "react"
import { useEffect, useState } from "react"
import type { Bio } from "@/types"
import { bioService } from "@/services/bioService"

const Bio: React.FC = () => {
  const [bios, setBios] = useState<Bio[]>([])
  const [loading, setLoading] = useState(true); // Set true dulu

  useEffect(() => {
    fetchBios();
  }, []);

  const fetchBios = async () => {
    try {
      setLoading(true); // Tambahkan ini
      const data = await bioService.getAll();
      const sortedBios = data.sort((a, b) => a.year - b.year);
      setBios(sortedBios);
    } catch (error) {
      console.error('Failed to fetch bios:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure?')) return;
    try {
      await bioService.delete(id);
      setBios(bios.filter(bio => bio.id !== id));
    } catch (err: any) {
      alert('Failed to delete bio');
    }
  };

  // if (loading) return <div>Loading Bio...</div>; // Lebih jelas

  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <PinIcon className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Bio</h1>

        {/* Dialog */}
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
        {loading && <div>Loading Bio...</div>}
        {bios.map((bio) => (
          <h1 key={bio.id}>{bio.year} | {bio.description}</h1>
        ))}
      </div>
    </div>
  )
}

export default Bio;

import { PinIcon } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import type { Bio } from "@/types"
import biosData from '@/datas/bios.json'

const Bio: React.FC = () => {
  const [bios, setBios] = useState<Bio[]>([])

  useEffect(() => {
    setBios(biosData as Bio[])
  }, []);

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 ">
        <PinIcon className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Bio</h1>
      </div>
      <div className="mt-5 space-y-2">
        {bios.map((bio) => (
          <h1 key={bio.id}>{bio.year} | {bio.description}</h1>
        ))}
      </div>
    </div>
  )
}

export default Bio;

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
      <div className="flex items-center gap-2">
        <PinIcon className="sm:size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Bio</h1>
      </div>
      <div className="mt-5 space-y-3">
        {bios.map((bio) => (
          <div className="flex gap-2 items-top">
            <h1 key={bio.id} className="text-sm sm:text-base">{bio.year}</h1>
            <div>|</div>
            <h1 key={bio.id} className="text-sm sm:text-base">{bio.description}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bio;

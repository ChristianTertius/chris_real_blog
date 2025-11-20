import { PinIcon, PlusIcon } from "lucide-react"

const Bio = () => {
  return (

    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <PinIcon className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Bio</h1>
        <PlusIcon className="hover:text-third cursor-pointer" />
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

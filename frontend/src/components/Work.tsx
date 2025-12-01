import { BicepsFlexed, PlusIcon } from "lucide-react"
import WorkCard from "./Work/WorkCard"

const Work = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <BicepsFlexed className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Work</h1>
      </div>
      <WorkCard />
    </div>
  )
}

export default Work

import { HeartIcon } from "lucide-react"

const ILove = () => {
  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <HeartIcon className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">What I Love to Do</h1>
      </div>

      <div className="mt-5 space-y-2">
        Music, Badminton, Playing Guitar, Web and Mobile Development
      </div>
    </div>
  )
}

export default ILove

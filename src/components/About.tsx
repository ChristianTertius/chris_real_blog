import { Computer, MapPin } from "lucide-react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import Work from "./Work"
import Bio from "./Bio"
import ILove from "./ILove"
import OnTheWeb from "./OnTheWeb"

const About = () => {
  useDocumentTitle('About Me - Chris')
  return (
    <div className="mt-5 font-inter">
      <div className="my-3 space-y-3">
        <div>
          <h1 className="text-4xl font-bold">Christian Carlos Tertius</h1>
          <h3 className="text-lg">Software Engineer || Developer</h3>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin className="size-4" />
          <h1 className="font-thin">West Jakarta, Indonesia</h1>
        </div>
        <div className="flex gap-2 items-center">
          <Computer className="size-4" />
          <h1 className="font-thin">Software Developer at lalalala</h1>
        </div>
      </div>
      <p className="tracking-normal">Hi, I’m Christian! I build things for the web and love exploring how technology can make life and work more efficient. Every day, I challenge myself to learn something new—whether it’s backend development, system design, or improving the way I manage and understand complex systems. I also enjoy creating content in my free time, sharing moments, thoughts, and things I’m passionate about.</p>

      <Bio />
      <Work />
      <ILove />
      <OnTheWeb />
    </div>
  )

}

export default About

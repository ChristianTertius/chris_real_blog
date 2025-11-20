import { Computer, MapPin } from "lucide-react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import Work from "./Work"
import Bio from "./Bio"
import ILove from "./ILove"
import OnTheWeb from "./OnTheWeb"
import TopProject from "./TopProject"
import TopBlog from "./TopBlog"
import { useGSAPTyping } from "../hooks/useGSAPTyping"

const About = () => {
  useDocumentTitle('About Me - Chris')

  const { elementRef, isComplete } = useGSAPTyping('Christian Carlos Tertius', {
    speed: 0.08,
    delay: 0.3,
    cursor: true,
    onComplete: () => console.log('Typing Complete')
  })
  return (
    <div className="px-5 mt-5 sm:px-0">
      <div className="my-3 space-y-3">
        <div>
          <h1 className="text-4xl font-bold"><span ref={elementRef}></span>
            {!isComplete && (
              <span className="inline-block ml-1 text-third">|</span>
            )}</h1>
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
      <p className="tracking-wider">Hi, I’m Christian! I build things for the web and love exploring how technology can make life and work more efficient. Every day, I challenge myself to learn something new—whether it’s backend development, system design, or improving the way I manage and understand complex systems. I also enjoy creating content in my free time, sharing moments, thoughts, and things I’m passionate about.</p>

      <Bio />
      <Work />
      <ILove />
      <TopProject />
      <TopBlog />
      <OnTheWeb />
    </div>
  )

}

export default About

import { Computer, MailIcon, MapPin } from "lucide-react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import Work from "./Work"
import Bio from "./Bio"
import ILove from "./ILove"
import OnTheWeb from "./OnTheWeb"
import TopProject from "./TopProject"
import TopBlog from "./TopBlog"
import { useGSAPTyping } from "../hooks/useGSAPTyping"
import { useEffect, useState } from "react"
import type { User } from "@/types"
import Footer from "./Footer"
import usersData from '@/datas/user.json'

const About = () => {
  useDocumentTitle('About Me - Chris');

  const [hasTyped, setHasTyped] = useState(() => {
    return sessionStorage.getItem('aboutTypingComplete') === 'true'
  })

  const { elementRef, isComplete } = useGSAPTyping('Christian Carlos Tertius', {
    speed: 0.01,
    delay: 0.3,
    skip: hasTyped,
    cursor: true,
    onComplete: () => {
      console.log('Typing Complete')
      sessionStorage.setItem('aboutTypingComplete', 'true')
      setHasTyped(true)
    }
  })
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(usersData as User)
  }, []);

  if (!user) { return }

  return (
    <div className="px-5 mt-5 sm:px-0">

      <div className="my-3 space-y-3 relative">
        <div>
          <h1 className="text-4xl font-bold">
            <span ref={elementRef}>{hasTyped ? 'Christian Carlos Tertius' : ''}</span>
            {!isComplete && !hasTyped && (
              <span className="inline-block ml-1 text-third">|</span>
            )}
          </h1>
          <h3 className={`text-lg items-center`}>Software Engineer | Developer</h3>
        </div>

        <div className="flex gap-2 items-center">
          <MailIcon className="size-4" />
          <h1 className="font-thin">{user.email}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin className="size-4" />
          <h1 className="font-thin">{user.current_location}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <Computer className="size-4" />
          <h1 className="font-thin">{user.current_role}</h1>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-left">👋 {user.description}</p>

        <OnTheWeb />
      </div>

      <Bio />
      <Work />
      <ILove lovetodo={user.lovetodo} />
      <TopProject />
      <TopBlog />
    </div>
  )

}

export default About

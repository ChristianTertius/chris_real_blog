import { Computer, MailIcon, MapPin } from "lucide-react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import Work from "./Work"
import Bio from "./Bio"
import ILove from "./ILove"
import OnTheWeb from "./OnTheWeb"
import TopProject from "./TopProject"
import TopBlog from "./TopBlog"
import { useGSAPTyping } from "../hooks/useGSAPTyping"
import { useEffect, useState, useRef, useCallback } from "react"
import gsap from "gsap"
import type { User } from "@/types"
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
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setUser(usersData as User)
  }, []);

  useEffect(() => {
    if (!imgRef.current) return
    gsap.set(imgRef.current, { x: -80, opacity: 0 })
  }, [user])

  const handleMouseEnter = useCallback(() => {
    gsap.to(imgRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    gsap.to(imgRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    })
  }, [])

  if (!user) { return }

  return (
    <div className="px-5 sm:mt-5 sm:px-0">
      <div className="sm:my-3 space-y-3 relative">
        <div>
          <h1 className="text-xl sm:text-4xl font-bold">
            <span ref={elementRef}>{hasTyped ? 'Christian Carlos Tertius' : ''}</span>
            {!isComplete && !hasTyped && (
              <span className="inline-block ml-1 text-third">|</span>
            )}
          </h1>
          <h3 className={`text-xs sm:text-lg items-center font-thin`}>Software Engineer</h3>
        </div>

        <div className="flex gap-2 items-center text-xs sm:text-base">
          <MailIcon className="size-4" />
          <h1 className="">{user.email}</h1>
        </div>
        <div className="flex gap-2 items-center text-xs sm:text-base">
          <MapPin className="size-4" />
          <h1 className="">{user.current_location}</h1>
        </div>
        {user.current_role && (
          <div className="flex gap-2 items-center text-xs sm:text-base">
            <Computer className="size-4" />
            <h1 className="">{user.current_role}</h1>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-2 sm:mt-0 text-xs sm:text-base leading-6">
        <div className="relative inline-block">
          <p className="text-left">
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer"
            >👋</span> {user.description}
          </p>
          <img
            ref={imgRef}
            src="/foto_comp.png"
            alt="Foto"
            className="absolute top-0 size-44 sm:size-60 object-cover rounded-full border-2 border-white/50"
            style={{ right: "100%", marginRight: "12px" }}
          />
        </div>

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

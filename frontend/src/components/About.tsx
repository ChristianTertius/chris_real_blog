import { Computer, MapPin } from "lucide-react"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import Work from "./Work"
import Bio from "./Bio"
import ILove from "./ILove"
import OnTheWeb from "./OnTheWeb"
import TopProject from "./TopProject"
import TopBlog from "./TopBlog"
import { useGSAPTyping } from "../hooks/useGSAPTyping"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import type { User } from "@/types"
import { authService } from "@/services/authService"

const About = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useDocumentTitle(user?.fullname ? `(CHRIS HERE) About Me - ${user.fullname}` : 'About Me - Chris');
  const { elementRef, isComplete } = useGSAPTyping('Christian Carlos Tertius', {
    speed: 0.08,
    delay: 0.3,
    cursor: true,
    onComplete: () => console.log('Typing Complete')
  })

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const userData = await authService.me();
      setUser(userData);
    } catch (error) {
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  if (loading) { return (<div className="flex items-center justify-center min-h-screen"> <div>Loading...</div> </div>); }
  if (!user) { return null; }

  return (
    <div className="px-5 mt-5 sm:px-0">
      <div className="my-3 space-y-3">
        <div>
          <h1 className="text-4xl font-bold"><span ref={elementRef}></span>
            {!isComplete && (
              <span className="inline-block ml-1 text-third">|</span>
            )}</h1>

          {/* Popover user current role */}
          <Popover>
            <PopoverTrigger>
              <h3 className={`text-lg items-center`}>{user.current_role}</h3>
            </PopoverTrigger>
            <PopoverContent>
              <Input defaultValue={user.current_role} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex gap-2 items-center">
          <MapPin className="size-4" />
          <Popover>
            <PopoverTrigger>
              <h1 className="font-thin">{user.current_location}</h1>
            </PopoverTrigger>
            <PopoverContent>
              <Input defaultValue={user.current_location} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex gap-2 items-center">
          <Computer className="size-4" />
          <Popover>
            <PopoverTrigger>
              <h1 className="font-thin">Software Engineer at lalalala</h1>
            </PopoverTrigger>
            <PopoverContent>
              <Input defaultValue={"Software Engineer at lalalala"} />
            </PopoverContent>
          </Popover>
        </div>

      </div>

      {/* Display user description */}
      <Popover>
        <PopoverTrigger>
          <p className="tracking-wider text-left">{user.description}</p>
        </PopoverTrigger>

        <PopoverContent className="sm:w-[900px]">
          <Textarea defaultValue={user.description} />
        </PopoverContent>
      </Popover>

      <Bio user={user} />
      <Work />
      <ILove />
      <TopProject />
      <TopBlog />
      <OnTheWeb />
    </div>
  )

}

export default About

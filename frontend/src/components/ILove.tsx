import { HeartIcon } from "lucide-react"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import type { User } from "@/types";
import { useEffect, useState } from "react";
import { authService } from "@/services/authService";
import { useNavigate } from "react-router";

const ILove = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [])

  const fetchUser = async () => {
    try {
      const userData = await authService.me();
      setUser(userData);
    } catch (error) {
      navigate('/login');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <HeartIcon className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">What I Love to Do</h1>
      </div>

      <div className="mt-5 space-y-2">
        <Popover>
          <PopoverTrigger>
            {user?.lovetodo}
          </PopoverTrigger>
          <PopoverContent className="sm:w-[580px]">
            <Input defaultValue={"Music, Badminton, Playing Guitar, Web and Mobile Development"} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default ILove

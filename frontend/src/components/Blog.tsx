import { Link, useNavigate } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useGSAPTyping } from "../hooks/useGSAPTyping";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { User } from "@/types";
import { authService } from "@/services/authService";

const Blog = () => {
  useDocumentTitle("Blog - Chris")

  const { elementRef, isComplete } = useGSAPTyping('Blog', {
    speed: 0.08,
    delay: 0.3,
    cursor: true,
    onComplete: () => console.log('Typing Complete')
  })


  // take user email
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const userData = await authService.me();
      setUser(userData);
    } catch (error) {
      // Kalau gagal (token invalid), redirect ke login
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }
  return (
    <div className="px-5 mt-5 sm:px-0">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          <span ref={elementRef}></span>
          {!isComplete && (
            <span className="inline-block ml-1 text-third">|</span>
          )}
        </h1>
        <div className="flex items-center justify-between gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={'/blog/addnewblog'}>
                <PlusIcon className="cursor-pointer hover:text-third" />
              </Link>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p>Add new Blog</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>


      <div className="my-5 rounded-md duration-50 flex gap-2 items-center justify-between group flex-wrap">
        <Link to="/blog/blogdetail" className="text-lg group-hover:text-third transition-all duration-50 group-hover:underline underline-offset-10">Why i choose neovim instead of VSCode for fullstack development?</Link>
        <p className="group-hover:text-third transition-all duration-50 group-hover:underline underline-offset-10">June, 2025</p>
      </div>
    </div>
  )
}

export default Blog;

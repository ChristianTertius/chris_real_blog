import { ChevronRight, ExternalLink } from "lucide-react"
import { Link } from "react-router"

const TopBlog = () => {
  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <ExternalLink className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Blogs</h1>
      </div>

      <a href="/blog/blogDetail" className="group mt-5 flex justify-between items-center">
        <h1 className="text-lg group-hover:text-third transition-all duration-150">Neovim &gt; VSCode for fullstack?</h1>
        <p className="group-hover:text-third transition-all duration-150">Nov, 2025</p>
      </a>
      <a href="/blog/blogDetail" className="group mt-3 flex justify-between items-center">
        <h1 className="text-lg group-hover:text-third transition-all duration-150">React Native better than Flutter?</h1>
        <p className="group-hover:text-third transition-all duration-150">Des, 2025</p>
      </a>
      <Link to="/blogs" className="text-third text-shadow-amber-950 text-sm items-center mt-5 flex gap-1 group hover:underline underline-offset-8">
        See More
        <ChevronRight className="size-4 group-hover:translate-x-1 transition-all duration-150" /></Link>

    </div>
  )
}
export default TopBlog

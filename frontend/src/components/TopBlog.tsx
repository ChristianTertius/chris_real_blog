import type { Blog } from "@/types"
import { ChevronRight, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import blogsData from '@/datas/blogs.json'

const TopBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const latestBlog = (blogsData as Blog[]).slice(-3).reverse()
    setBlogs(latestBlog)
  }, [])

  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <ExternalLink className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Blogs</h1>
      </div>
      {blogs.map((blog) => (
        <a href="/blog/blogDetail" className="group mt-5 flex justify-between items-center flex-wrap">
          <h1 className="text-lg group-hover:text-third transition-all duration-150">{blog.title}</h1>
          <p className="group-hover:text-third transition-all duration-150">{blog.date}</p>
        </a>
      ))}
      <Link to="/blogs" className="text-third text-shadow-amber-950 text-sm items-center mt-5 flex gap-1 group hover:underline underline-offset-8">
        See More
        <ChevronRight className="size-4 group-hover:translate-x-1 transition-all duration-150" /></Link>

    </div>
  )
}
export default TopBlog

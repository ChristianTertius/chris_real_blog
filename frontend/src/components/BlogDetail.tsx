import type { Blog } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import blogsData from '@/datas/blogs.json'
import { ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null)

  useEffect(() => {
    const foundBlog = blogsData.find((b: Blog) => b.id === id)
    if (foundBlog) {
      setBlog(foundBlog as Blog)
    } else {
      navigate('/blogs')
    }
  }, [id, navigate])

  return (
    <div className="mt-5">
      <button
        onClick={() => navigate('/blogs')}
        className="flex items-center cursor-pointer gap-2 mb-5 hover:text-third transition-all"
      >
        <ArrowLeft className="size-5" />
        Back to Blogs
      </button>
      <h1 className="text-2xl">{blog?.title}</h1>
      <p className="opacity-60">{blog?.date}</p>

      <div className="text-justify my-5 rounded-md duration-50 flex gap-2 items-center justify-between group">
        {blog?.content}
      </div>



    </div>
  )
}

export default BlogDetail

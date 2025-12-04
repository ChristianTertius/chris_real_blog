import type { Blog } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import blogsData from '@/datas/blogs.json'
import { ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

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
  useDocumentTitle(blog ? `Blog - ${blog.title} - Chris` : "Blog - Chris");
  return (
    <div className="mt-5">
      <button
        onClick={() => navigate('/blogs')}
        className="flex items-center cursor-pointer gap-2 mb-5 hover:text-third transition-all"
      >
        <ArrowLeft className="size-5" />
        Back to Blogs
      </button>
      <h1 className="text-2xl font-bold">{blog?.title}</h1>
      <p className="opacity-60">{blog?.date}</p>

      <div className="text-justify my-5 rounded-md duration-50 gap-2 items-center justify-between group text-base/loose">
        <h1 className="text-third inline-block text-lg">Summary:</h1> <br />
        <p className="mb-3">
          {blog?.content}
        </p>
        {blog?.content_image && (
          <img src={`/${blog?.content_image}`} alt="content_image" />
        )}
      </div>
    </div>
  )
}

export default BlogDetail

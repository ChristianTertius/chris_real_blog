import { Link } from "react-router";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useGSAPTyping } from "../hooks/useGSAPTyping";
import { useEffect, useState } from "react";
import type { Blog } from "@/types";
import blogsData from '@/datas/blogs.json'
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog = () => {
  useDocumentTitle("Blog - Chris")

  const [hasTyped, setHasTyped] = useState(() => {
    return sessionStorage.getItem('blogTypingComplete') === 'true'
  })

  const { elementRef, isComplete } = useGSAPTyping('Blog', {
    speed: 0.01,
    delay: 0.3,
    cursor: true,
    skip: hasTyped,
    onComplete: () => {
      console.log('Typing Complete')
      sessionStorage.setItem('blogTypingComplete', 'true')
      setHasTyped(true)
    }
  })
  const [blogs, setBlog] = useState<Blog[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 15

  useEffect(() => {
    setBlog(blogsData as Blog[])
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="px-5 mt-5 sm:px-0">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          <span ref={elementRef}>{hasTyped ? 'Blog' : ''}</span>
          {!isComplete && !hasTyped && (
            <span className="inline-block ml-1 text-third">|</span>
          )}
        </h1>
      </div>


      {currentBlog.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className="text-sm flex-wrap sm:text-lg my-3 flex justify-between group items-center group-hover:text-third transition-all duration-50 group-hover:underline underline-offset-10">
          <h1 className="group-hover:text-third group-hover:underline">
            {blog.title}
          </h1>

          <p className="group-hover:text-third text-sm transition-all duration-50 group-hover:underline underline-offset-10">{blog.date}</p>

        </Link>
      ))}
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="cusor-pointer p-2 rounded-md border border-secondary/20 hover:bg-third/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`cursor-pointer px-4 py-2 rounded-md border transition-all ${currentPage === pageNum
                  ? 'bg-third text-white border-third'
                  : 'border-secondary/20 hover:bg-third/10'
                  }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="cursor-pointer p-2 rounded-md border border-secondary/20 hover:bg-third/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}

      <p className="text-center mt-5 text-sm opacity-70">
        Showing {indexOfFirstBlog + 1} - {Math.min(indexOfLastBlog, blogs.length)} of {blogs.length} blogs
      </p>
    </div>
  )
}

export default Blog;

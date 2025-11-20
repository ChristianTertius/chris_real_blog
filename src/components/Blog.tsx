import { Link } from "react-router";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useGSAPTyping } from "../hooks/useGSAPTyping";

const Blog = () => {
  useDocumentTitle("Blog - Chris")

  const { elementRef, isComplete } = useGSAPTyping('Blog', {
    speed: 0.08,
    delay: 0.3,
    cursor: true,
    onComplete: () => console.log('Typing Complete')
  })
  return (
    <div className="px-5 mt-5 sm:px-0">
      <h1 className="text-4xl font-bold">
        <span ref={elementRef}></span>
        {!isComplete && (
          <span className="inline-block ml-1 text-third">|</span>
        )}
      </h1>

      <div className="my-5 rounded-md duration-50 flex gap-2 items-center justify-between group flex-wrap">
        <Link to="/blog/blogdetail" className="text-lg group-hover:text-third transition-all duration-50 group-hover:underline underline-offset-10">Why i choose neovim instead of VSCode for fullstack development?</Link>
        <p className="group-hover:text-third transition-all duration-50 group-hover:underline underline-offset-10">June, 2025</p>
      </div>
    </div>
  )
}

export default Blog;

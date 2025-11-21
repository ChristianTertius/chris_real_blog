import { Link } from "lucide-react"
import { useGSAPTyping } from "../hooks/useGSAPTyping"

const BlogDetail = () => {
  const { elementRef, isCompleted } = useGSAPTyping('Why i choose neovim instead of VSCode for fullstack development?', {
    speed: 0.03,
    delay: 0.3,
    cursor: true,
    onComplete: () => console.log('Typing Complete')
  })

  return (
    <div className="mt-5">
      <h1 className="text-4xl font-bold">
        <span ref={elementRef}></span>
        {!isCompleted && (
          <span className="inline-block ml-1 text-third">|</span>
        )}
      </h1>
      <p className="opacity-60 mt-2">June, 2025</p>

      <div className="my-5 rounded-md duration-50 flex gap-2 items-center justify-between group">

      </div>



    </div>
  )
}

export default BlogDetail

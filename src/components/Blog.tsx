import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Blog = () => {
  useDocumentTitle("Blog - Chris")
  return (
    <h1> Blog</h1>
  )
}

export default Blog;

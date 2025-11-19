import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="bg-main py-5 gap-5 flex">
      <Link to="/">About</Link>
      <Link to="/project">Project</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}
export default Navbar

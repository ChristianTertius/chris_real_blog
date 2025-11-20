import { Link, useLocation } from "react-router"

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-main py-5 gap-5 flex p-5 sm:px-0">
      <Link to="/" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/' ? 'underline underline-offset-10 text-third' : ''}`}>About</Link>
      <Link to="/projects" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/projects' ? 'underline underline-offset-10 text-third' : ''}`}>Project</Link>
      <Link to="/blogs" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/blogs' ? 'underline underline-offset-10 text-third' : ''}`}>Blog</Link>
    </nav>
  )
}
export default Navbar

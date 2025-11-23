import { authService } from "@/services/authService";
import { Link, Navigate, useLocation, useNavigate } from "react-router"
import { Button } from "./ui/button";
import type { User } from "@/types";
import { useEffect, useState } from "react";
// import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();

  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logout();
    navigate('/login');
  }

  return (
    <nav className="bg-main py-5 flex justify-between p-5 sm:px-0">
      {user?.fullname}
      <div className="gap-5 flex">
        <Link to="/" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/' ? 'underline underline-offset-10 text-third' : ''}`}>About</Link>
        <Link to="/projects" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/projects' ? 'underline underline-offset-10 text-third' : ''}`}>Project</Link>
        <Link to="/blogs" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/blogs' ? 'underline underline-offset-10 text-third' : ''}`}>Blog</Link>
      </div>
      {/* <ThemeToggle /> */}
      <Button onClick={handleLogout}>Logout</Button>
    </nav>
  )
}
export default Navbar

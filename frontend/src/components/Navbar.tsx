import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router"

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      if (!savedTheme) {
        localStorage.setItem('theme', 'dark');
      }
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="py-5 flex justify-between p-5 sm:px-0">
      <div className="gap-5 flex">
        <Link to="/" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/' ? 'underline underline-offset-10 text-third' : ''}`}>About</Link>
        <Link to="/projects" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname == '/projects' ? 'underline underline-offset-10 text-third' : ''}`}>Project</Link>
        <Link to="/blogs" className={`hover:text-third transition-colors duration-150 hover:underline underline-offset-10 decoration-2 ${location.pathname.startsWith('/blogs') ? 'underline underline-offset-10 text-third' : ''}`}>Blog</Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="relative p-2 rounded-lg cursor-pointer hover:bg-third/70 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Toggle dark mode"
      >
        <div className="relative w-6 h-6">
          <Sun
            className={`absolute inset-0 transition-all duration-300 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            size={24}
          />
          <Moon
            className={`absolute inset-0 transition-all duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`}
            size={24}
          />
        </div>
      </button>
    </nav>
  )
}

export default Navbar

import './App.css'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import { Route, Routes, ScrollRestoration, useLocation, useNavigate } from 'react-router'
import Navbar from './components/Navbar'
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'
import { useEffect } from 'react'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className='flex flex-col min-h-screen max-w-4xl mx-auto bg-main text-secondary'>
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blogs/:id' element={<BlogDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App

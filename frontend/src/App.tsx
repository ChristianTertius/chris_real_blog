import './App.css'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import Navbar from './components/Navbar'
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'
import AddNewBlog from './components/AddNewBlog'
import LoginModal from './components/LoginModal'
import { Toaster } from './components/ui/sonner'
import { useEffect, useState } from 'react'

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/login') {
      setIsLoginModalOpen(true)
    }
  }, [location])

  const handleCloseModal = () => {
    setIsLoginModalOpen(false)
    navigate(-1) // kembali ke halaman sebelumnya
  }

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false)
    navigate(-1)
  }

  return (

    <div className='max-w-4xl mx-auto bg-main text-secondary'>
      <Navbar />

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blog/blogdetail' element={<BlogDetail />} />
        <Route path='/blog/addnewblog' element={<AddNewBlog />} />
        <Route path='/login' element={<div />} /> {/* dummy route*/}
        <Route path='*' element={<NotFound />} />
      </Routes>

      {isLoginModalOpen && (
        <LoginModal onClose={handleCloseModal} onLoginSuccess={handleLoginSuccess} open={isLoginModalOpen} />
      )}

      <Toaster />
    </div>

  )
}

export default App

import './App.css'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'

function App() {
  return (

    <div className='max-w-4xl mx-auto bg-main text-secondary'>
      <Navbar />

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blog/blogdetail' element={<BlogDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  )
}

export default App

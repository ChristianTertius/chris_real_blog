import './App.css'
import About from './components/About'
import Project from './components/Project'
import Blog from './components/Blog'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'

function App() {
  return (

    <div className='max-w-4xl mx-auto bg-main text-secondary'>
      <Navbar />

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>

  )
}

export default App

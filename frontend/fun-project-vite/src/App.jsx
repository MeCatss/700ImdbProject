import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Home from './pages/Home'
import Charts from './pages/Charts'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'
import Navbar from './components/Navbar'


// const api = axios.create({
//   baseURL: 'http://127.0.0.1:8000/movies/',
//   },
// )

function App() {
  return (
      <div className="bg-black min-h-screen pt-4">
        <Router>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path ="/" element={<Home />}  />
            <Route path ="/movies" element={<Movies />}  />
            <Route path ="/charts" element={<Charts />}  />
            <Route path ="/movies/:rank" element={<MovieDetail />}  />
            <Route path ="*" element ={<h1>404 Not Found</h1>}  />
          </Routes>
        </Router>
        <footer className="text-center py-6 mt-12 border-t border-zinc-800 flex justify-center gap-50">
          <a href="https://github.com/MeCatss" target="_blank" className="text-zinc-500 hover:text-cyan-400 text-xl"><FaGithub /></a>
          <a href="https://linkedin.com/in/akmalfaiq" target="_blank" className="text-zinc-500 hover:text-cyan-400 text-xl"><FaLinkedin /></a>
          <a href="https://instagram.com/afaiqq" target="_blank" className="text-zinc-500 hover:text-cyan-400 text-xl"><FaInstagram /></a>
      </footer>
      </div>
      
  )
}

export default App




import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



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
      <div className="App">
        <Router>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path ="/" element={<Home />}  />
            <Route path ="/movies" element={<Movies />}  />
            <Route path ="/charts" element={<Charts />}  />
            <Route path ="/movies/:id" element={<MovieDetail />}  />
            <Route path ="*" element ={<h1>404 Not Found</h1>}  />
          </Routes>
        </Router>
      </div>
      
  )
}

export default App




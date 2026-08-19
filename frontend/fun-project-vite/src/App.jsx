import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Charts from './pages/Charts'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'

import Nav from './components/Navbar'

const App = () => {

  return (
      <main>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </main>
      
  )
}

export default App




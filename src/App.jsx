import { useState } from 'react'
import './App.css'
import ListExample from './components/navbar'
import NamaFunction from './components/hero'
import Trending from './components/trending'
import About from './components/about'
import ListFilm from './components/listFilm'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <ListExample />
    <div className='foto'>
    <NamaFunction />
    </div>
    <div className='trending'>
    <Trending />
    </div>
    <div className='about'>
    <About />
    </div>
    <div className='film'>
    <ListFilm />
    </div>
    <div className='Footer'>
      <Footer />
    </div>
    </>
  )
}

export default App

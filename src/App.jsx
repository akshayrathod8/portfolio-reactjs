import { useState } from 'react'
import './App.css'
import './index.css'
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { LoadingScreen } from './components/LoadingScreen'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <Navbar/>      
      <Home/>
    </>
  )
}

export default App

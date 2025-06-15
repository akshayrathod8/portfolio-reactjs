import { useState } from 'react'
import './App.css'
import './index.css'
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { LoadingScreen } from './components/LoadingScreen'
import { About } from './components/sections/About';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <Navbar/>      
      <Home/>
      <About/>
    </>
  )
}

export default App

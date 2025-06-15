import { useState } from 'react'
import './App.css'
import './index.css'
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { LoadingScreen } from './components/LoadingScreen'
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <Navbar/>      
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Canvas from './canvas'
import Home from './pages/Home'
import Customiser from './pages/Customiser'
import UserContext from './store/UserContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [intro, setIntro] = useState(true);
  const [color, setColor] = useState("#fc037f");
  const [isLogoTexture, setIsLogoTexture] = useState(true);
  const [isFullTexture, setIsFullTexture] = useState(false);
  const [logoVal, setLogoVal] = useState("./logo-happy.png");
  const [fullLogoVal, setFullLogoVal] = useState("./logo-happy.png");

  return (
    
      <UserContext.Provider value={{intro, setColor, setIntro, color, isLogoTexture, setIsLogoTexture, setIsFullTexture, isFullTexture, logoVal, setLogoVal, fullLogoVal, setFullLogoVal}} >
          <main className='app transition-all ease-in'>
              <BrowserRouter>
                    <Routes>
                        <Route 
                          path="/"
                          element={<Home />}
                        />  
                        <Route 
                          path="/canvas"
                          element={<Canvas />}
                        />  
                        <Route 
                          path="/customiser"
                          element={<Customiser />}
                        />  
                  </Routes> 
              </BrowserRouter>
          </main>
      </UserContext.Provider>
    
  )
}

export default App

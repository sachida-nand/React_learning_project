import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import { Card, ThemeBtn } from './components';

function App() {

  const [themeMood, setThemeMood] = useState("light");

  const lightTheme = () => {
    setThemeMood("light")
  }

  const darkTheme= () => {
    setThemeMood("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMood);
  }, [themeMood])
  

  return (

    <ThemeProvider value={{ themeMood, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App

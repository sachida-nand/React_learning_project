import './App.css'
import UserContextProvider from './contexts/UserContextProvider'
import { Login, Profile } from './components'

function App() {
  

  return (
    <UserContextProvider>
     <h1>Hello sachida</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App

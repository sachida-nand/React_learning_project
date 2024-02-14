import React, {useState, useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

  return (
    <div>
        <input type="text" placeholder="User Name" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input type="text" placeholder="Paaword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
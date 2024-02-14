import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return (
        <div>Hello {user.userName}</div>
    )
}

export default Profile
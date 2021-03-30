
import {useState} from 'react'
import axios from 'axios'
import { Button } from 'react-chat-engine'

import './experiment.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        
        const authObject = {'Project-ID': "1ddc7e3e-71e7-4c2e-870c-e894ea8fa31a", 'User-Name': username, 'User-Secret': password }


        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();

        } catch(error) {
             setError('EWWWWW')
        } 
    }

    return (
        <div className = "wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                        value ={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="input login"
                        placeholder="Username"
                        required/>
                    <input type="password" 
                        value ={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="input login"
                        placeholder="Password"
                        required/>

                    <div align="center">
                        <button type ="submit">
                            <span>
                                Let's Go!
                            </span>
                        </button>

                        <h2 className="error">{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm


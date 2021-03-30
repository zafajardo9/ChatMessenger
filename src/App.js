import './App.css'

import { ChatEngine } from 'react-chat-engine'

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'




const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height = "100vh"
            projectID = "1ddc7e3e-71e7-4c2e-870c-e894ea8fa31a"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

            // renderChatSettings={(chatAppState) => {
                
            //     <button className="ce-primary-button" >asdfasdfasdf</button>
            // }}
        />
    )
}

export default App;
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';


const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height ="100vh"
            projectID="283b336d-72bc-408e-904e-e0ead027d6a5"
            userName="thestreaky"
            userSecret ="123123"
            renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />

    );
}

export default App;
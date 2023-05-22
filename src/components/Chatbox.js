import React, {useState} from 'react';
import Launcher from './Launcher'
import ChatWindow from './ChatWindow'

const Chatbox = (props) => { 


    const toggleChatWindow = (newState) => {
        props.setDisplayChatWindow(newState)
    }

    return (
        <div className="chatbox">
           {
               !props.displayChatWindow ? 
               <Launcher {...props} toggleChatWindow={toggleChatWindow} /> : 
               <ChatWindow {...props} toggleChatWindow={toggleChatWindow} />
           }
        </div>
    )
}

export default Chatbox
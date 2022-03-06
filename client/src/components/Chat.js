import React, { useState, useRef } from 'react';
import io from "socket.io-client"

function Chat() {
    const [chatInput, setChatInput] = useState('');
    const [chatText, setChatText] = useState();

    const socketRef = useRef()
    

    const handleInputChange = (e) => {
        const { value } = e.target;
        setChatInput(value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setChatText(chatInput);
        setChatInput('');
    }

    return (
        <div>
            <h2>Name this lobby: {chatText}</h2>
            <form>
                <input value={chatInput} name="chatInput" onChange={handleInputChange} type="text" />
                <button type="button" onClick={handleFormSubmit}>Send</button>
            </form>
        </div>
    );
};

export default Chat;
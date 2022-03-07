import React, { useRef, useState } from 'react';
import io from "socket.io-client";
const socket = io("http://localhost:4000");

function Home({currentPage, handlePageChange}) {
    const [text, setText] = useState('');

    // useRef();
    // sending to the server
    socket.emit("emitting to server", "What's up?! From the client.");

    // receiving from the server
    socket.on("emitting to client", (textFromServer) => {
        setText(textFromServer);
    });

    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');

    const handleInputChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'roomId') {
            setRoomId(e.target.value)
        }
    }

    const joinRoom = () => {
        if (username !== '' && roomId !== '') {
            handlePageChange("Lobby");
            socket.emit('join room', username, roomId);
        }
    }

    return (
        <div className="Home">
            <h1>Check your IDE's console for a message from the client.</h1>
            {/* below should be displaying the message emitted from the server */}
            <h2>{text}</h2>
            <input name="username" type="text" placeholder="Username" onChange={handleInputChange} />
            <input name="roomId" type="text" placeholder="Insert room ID here" onChange={handleInputChange}/>
            <button onClick={joinRoom}>Join</button>
        </div>
    )
}
export default Home;
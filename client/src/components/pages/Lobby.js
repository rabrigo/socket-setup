import React from 'react';
import io from "socket.io-client";
const socket = io("http://localhost:4000");

function Lobby() {
    return (
        <h1>
            Welcome to the lobby
        </h1>
    )
} 

export default Lobby;
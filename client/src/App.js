import React, { useState } from 'react';
import io from "socket.io-client";
const socket = io("http://localhost:4000");

function App() {
  const [text, setText] = useState('');

  // sending to the server
  socket.emit("emitting to server", "What's up?! From the client.");

  // receiving from the server
  socket.on("emitting to client", (textFromServer) => {
    setText(textFromServer);
  })

  return (
    <div className="App">
      <h1>Check your IDE's console for a message from the client.</h1>
      {/* below should be displaying the message emitted from the server */}
      <h2>{text}</h2>
    </div>
  );
};

export default App;
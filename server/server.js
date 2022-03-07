const { createServer } = require("http");
const { Server } = require("socket.io");
const express = require("express");
const cors = require("cors");
const app = express();

// if we don't run this we get a CORS error
app.use(cors());

const PORT = process.env.PORT || 4000;
const URL = process.env.URL || "http://localhost:3000";

// for now, take this as boilerplate
const theServer = createServer();
const io = new Server(theServer, {
  cors: {
    origin: URL
  }
});

io.on('connection', socket => {
  // when a user connects
  console.log("You are now connected. This socket ID is unique everytime: " + socket.id);

  // to confirm that the this is connected to the client, we'll send this message
  socket.emit("emitting to client", "Hello from the server!")

  // this is looking out for socket.emit("emitting to server") from the client side
  socket.on("emitting to server", (textFromClient) => {
    console.log(textFromClient);
  })
})

// need to ask how this redirects react server to port 4000
theServer.listen(PORT, function () {
  console.log('listening on port 4000')
})

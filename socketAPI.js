import { Server } from "socket.io";

const io = new Server();
const socketAPI = { io: io };

io.on( "connection", function(socket) {
  console.log( "A user connected" );

  socket.on('message', (message) =>     {
    console.log(message);
    io.emit('message', {
      id: socket.id.substring(0,2),
      message
    });
  });
});

export default socketAPI;
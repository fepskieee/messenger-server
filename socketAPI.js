import { Server } from "socket.io";
import { generateUsername } from "unique-username-generator";

const io = new Server();
const socketAPI = { io: io };

io.on("connection", function(socket) {
  console.log( "A user connected" );
  let users = {}

  const id = socket.id.substring(0, 2);
  const username = generateUsername("", 0, 5);

  if (!users.hasOwnProperty(id)) {
    users[id]
  }

  users[id] = username

  socket.on('message', (message) =>     {
    console.log(`${users[id]}: ${message}`);

    io.emit('message', {
      id: users[id],
      message
    });
  });
});

export default socketAPI;
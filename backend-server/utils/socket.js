// utils/socket.js
module.exports = (io) => {
  // handle socket connections
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // join/create room
    socket.on("createRoom", (roomName) => {
      socket.join(roomName);
      console.log(`Room created/joined: ${roomName}`);
      socket.emit("roomJoined", roomName);
    });

    // send message to room
    socket.on("sendMessage", ({ roomName, message, user }) => {
      io.to(roomName).emit("receiveMessage", { user, message });
    });

    // handle disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

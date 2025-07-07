const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*", // For local dev; restrict in production!
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Listen for task events from clients and broadcast to all
  socket.on("task:created", (task) => {
    socket.broadcast.emit("task:created", task);
  });

  socket.on("task:updated", (task) => {
    socket.broadcast.emit("task:updated", task);
  });

  socket.on("task:deleted", (taskId) => {
    socket.broadcast.emit("task:deleted", taskId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server running on ws://localhost:${PORT}`);
}); 
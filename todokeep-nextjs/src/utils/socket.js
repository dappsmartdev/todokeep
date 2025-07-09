// src/utils/socket.js
let io = null;

function setSocketIO(instance) {
  io = instance;
}

function getSocketIO() {
  if (!io) {
    throw new Error('Socket.IO not initialized');
  }
  return io;
}

module.exports = { setSocketIO, getSocketIO };
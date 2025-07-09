import { io } from 'socket.io-client';

// Option 1: Use hardcoded dev server
const socket = io('ws://localhost:3000', {
  path: '/socket.io', // default, change only if backend uses different path
  reconnection: true,
  reconnectionAttempts: Infinity,
  randomizationFactor: 0.5,
});

export default socket;
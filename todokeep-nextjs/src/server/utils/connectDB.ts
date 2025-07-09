import mongoose from 'mongoose';

let isConnected: boolean = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const uri = process.env.MONGODB_URI || 'your-local-mongo-uri-here';
    const db = await mongoose.connect(uri);
    isConnected = db.connections[0].readyState === 1;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Database connection failed');
  }
}
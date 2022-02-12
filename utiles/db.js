import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isconnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isconnected = mongoose.connections[0].readyState;
    if (connection.isconnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('new connection');
  connection.isconnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isconnected) {
    if (process.env.MONGODB_URI === 'production') {
      await mongoose.disconnect();
      connection.isconnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}
const db = { connect, disconnect };
export default db;

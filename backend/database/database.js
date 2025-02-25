import mongoose from 'mongoose';

async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB);
    console.log('✅ db Connected Successfully');
  } catch (err) {
    console.error('❌ Database Connection Failed:', err);
    return err;
  }
}

export default dbConnect;

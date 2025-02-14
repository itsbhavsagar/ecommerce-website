import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true, min: [6, 'Password is too short'] },
  age: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;

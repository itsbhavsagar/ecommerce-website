import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password is too short'],
  },
});

const User = mongoose.model('User', userSchema);

export default User;

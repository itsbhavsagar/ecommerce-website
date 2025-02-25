import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { Schema, model } = mongoose;

const Address = new Schema({
  houseNumber: { type: String, default: '0' },
  city: { type: String, required: true },
  pincode: { type: Number, required: true },
});

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: [6, 'password is too short'] },
  phoneNumber: { type: String },
  address: { type: [Address], default: [] },
});

UserSchema.pre('save', async function (next) {
  let user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Geneate a salt
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

UserSchema.methods.checkPassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

UserSchema.methods.generateToken = async function () {
  return jwt.sign({ id: this._id, email: this.email }, process.env.PRIVATE_KEY);
};

const User = model('User', UserSchema);

export default User;

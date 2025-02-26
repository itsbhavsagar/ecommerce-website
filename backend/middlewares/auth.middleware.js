import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const auth = async (req, res, next) => {
  const token = req.cookies?.Token;

  try {
    if (!token) {
      return res
        .status(401)
        .send({ result: false, message: 'user not autheticated' });
    } else {
      const { id } = jwt.verify(token, process.env.PRIVATE_KEY);
      const user = await User.findById(id);
      req.user = user;
      next();
    }
  } catch (err) {
    return res.send({ result: false, message: 'Server Error!' });
  }
};

export default auth;

import User from '../model/user.model.js';

const tokenGeneration = async function (user) {
  const token = await user.generateToken();
  return token;
};

const login = (req, res) => {};

const signup = async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .send({ result: false, message: 'User already Exist' });
    } else {
      const newUser = new User(req.body);
      const user = await newUser.save();
      const token = await tokenGeneration(user);
      const option = { httpOnly: true, secure: true };

      return res.status(200).cookie('Token', token, option).json({
        result: true,
        message: 'User Created',
        data: user,
      });
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

const getuser = (req, res) => {};

const updateuser = (req, res) => {};

export { login, signup, getuser, updateuser };

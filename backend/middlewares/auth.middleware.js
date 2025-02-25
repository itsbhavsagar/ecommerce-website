const auth = (req, res, next) => {
  console.log('This is response from middleware', req.cookies.Token);
  next();
};

export default auth;

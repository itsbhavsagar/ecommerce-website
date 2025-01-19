const validateProduct = (req, res, next) => {
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  next();
};

export default validateProduct;

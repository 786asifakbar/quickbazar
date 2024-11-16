const amazonService = require('../services/amazonService');

exports.getProducts = async (req, res) => {
  try {
    const products = await amazonService.fetchAmazonProducts('laptop');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

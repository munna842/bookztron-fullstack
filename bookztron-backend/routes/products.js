const express = require('express');
const router = express.Router();

const products = [
  {
    _id: '1',
    title: 'Book One',
    description: 'First test book',
    price: 10
  },
  {
    _id: '2',
    title: 'Book Two',
    description: 'Second test book',
    price: 20
  }
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;


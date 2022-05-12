const { Product } = require('../database/models');

const createProduct = async (req, res, next) => {
  try {
    const { nome, preco, imagem, pontos } = req.body;

    const productCreated = await Product.create({
      nome,
      preco,
      imagem,
      pontos,
    });

    return res.status(201).json({ productCreated });
  } catch (err) {
    next(err);
  }
};

const listProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProduct,
  listProducts,
}

import Product from "../database/models/product.js";

export const createProduct = async (req, res, next) => {
  try {
    const { nome, preco, imagem } = req.body;

    const productCreated = await Product.create({
      nome,
      preco,
      imagem,
    });

    return res.status(201).json({ productCreated });
  } catch (err) {
    next(err);
  }
};

export const listProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

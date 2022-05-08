import tokenGenerate from "../helpers/tokenGenarate.js";

export const login = async (req, res, next) => {
  try {
    const { usuario, senha } = req.body;
    const tokenCreated = tokenGenerate({ usuario, senha });

    return res.status(201).json({ token: tokenCreated });
  } catch (err) {
    next(err);
  }
};

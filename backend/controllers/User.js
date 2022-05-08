const { User } = require('../database/models');

const createUser = async (req, res, next) => {
  try {
      const { usuario, email, senha} = req.body;

      const findEmail = await User.findOne({ where: { email } });

      if (findEmail) return res.status(409).json({ message: 'Usuário já registrado' });

      const userCreated = await User.create({
          usuario,
          email,
          senha,
      });

      return res.status(201).json({ userCreated });
  } catch (err) {
      next(err);
  }
};

module.exports = {
  createUser,
};
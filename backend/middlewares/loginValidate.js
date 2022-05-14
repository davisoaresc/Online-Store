const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { usuario, senha } = req.body;

  if (usuario === "") {
    return res
      .status(400)
      .json({ message: 'O campo "Usuario" precisa ser preenchido' });
  }

  if (senha === "") {
    return res.status(400).json({ message: '"senha" precisa ser preenchido' });
  }

  const findUser = await User.findOne({ where: { usuario } });
  const findPasswordUser = await User.findOne({ where: { senha } });

  if (!findUser || !findPasswordUser)
    return res.status(400).json({ message: "Usuário ou senha invalido" });

  next();
};

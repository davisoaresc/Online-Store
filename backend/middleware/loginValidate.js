import User from "../database/models/user.js";

export default async (req, res, next) => {
  const { usuario, senha } = req.body;

  if (usuario === "") {
    return res
      .status(400)
      .json({ message: 'O campo "Usuario" precisa ser preenchido' });
  }

  if (!usuario) {
    return res.status(400).json({ message: '"Usuario" é necessário' });
  }

  if (senha === "") {
    return res.status(400).json({ message: '"senha" precisa ser preenchido' });
  }

  if (!senha) {
    return res.status(400).json({ message: '"password" is required' });
  }

  const findUser = await User.findOne({ where: { usuario } });
  const findPasswordUser = await User.findOne({ where: { senha } });

  if (!findUser || !findPasswordUser)
    return res.status(400).json({ message: "Usuário ou senha invalido" });

  next();
};

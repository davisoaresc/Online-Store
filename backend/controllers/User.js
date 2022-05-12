const { User } =  require('../database/models');

const createUser = async (req, res, next) => {
  try {
    const { usuario, email, senha } = req.body;

    const findEmail = await User.findOne({ where: { email } });

    if (findEmail)
      return res.status(409).json({ message: "Usuário já registrado" });

    const userCreated = await User.create({
      usuario,
      email,
      senha,
    });

    return res.status(201).json({ userCreated });
  } catch (err) {
    next(err);
  }
}

const listUsersByUserName = async (req, res, next) => {
  try {
    const { usuario } = req.params;
    console.log(usuario);
    const findUser = await User.findOne({ where: { usuario } });
    if(!findUser) {
      return res.status(404).json({message: "Usuário não encontrado"})
    }
    return res.status(200).json(findUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  listUsersByUserName,
};


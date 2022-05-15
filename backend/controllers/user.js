const { User } =  require('../models');

const createUser = async (req, res, next) => {
  try {
    const { usuario, email, senha } = req.body;
    const pontos = 0;
    const moedas = 0;

    const findUser = await User.findOne({ where: { email } });

    if (findUser) {
      return res.status(409).json({ message: "Usuário já registrado" });
    }
    const userCreated = await User.create({
      usuario,
      email,
      senha,
      pontos,
      moedas,
    });

    return res.status(201).json({message: "Usuario criado com sucesso"});
  } catch (err) {
    next(err);
  }
}

const listUsersByUserName = async (req, res, next) => {
  try {
    const { usuario } = req.params;
    const findUser = await User.findOne({ where: { usuario } });
    if(!findUser) {
      return res.status(404).json({message: "Usuário não encontrado"})
    }
    return res.status(200).json(findUser);
  } catch (err) {
    next(err);
  }
};

const updateUserCoins = async (req, res, next) => {
  try {
    const { usuario } = req.params;
    const findUser = await User.findOne({ where: { usuario } });
    console.log(findUser);

    if (findUser.moedas < req.body.moedas ) {
      return res.status(401).json({message: "Saldo de moedas insuficiente"})
    }
    await User.increment({ pontos:req.body.pontos },{ where: { usuario } });
    await User.decrement({ moedas:req.body.moedas },{ where: { usuario } });
    await User.increment({ moedas:req.body.moedas },{ where: { usuario: "admin" } });

    return res.status(200).json({message: "Compra efetuada com sucesso"});

  } catch (error) {
    return next(error);
  }
}

const userBuyingCoins = async (req, res, next) => {
  try {
    const { usuario } = req.params
    await User.increment({ moedas:req.body.moedas },{ where: { usuario } });
    return res.status(200).json({message:"Moedas compradas com sucesso!"});
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createUser,
  listUsersByUserName,
  updateUserCoins,
  userBuyingCoins,
};


import jwt from 'jsonwebtoken';

export default (data = {}) => { 
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(
    { data },
    process.env.JWT_SECRET,
    jwtConfig,
  );

  return token;
};
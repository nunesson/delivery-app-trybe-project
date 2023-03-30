require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '30d',
    algorithm: 'HS256',
};

const generateToken = ({ email, id }) =>
 jwt.sign({ email, id }, jwtSecret, jwtConfig);

 const authenticToken = async (token) => {
    if (!token) {
      return { type: 'EMPTY_TOKEN', message: 'Token not found' };
    }
  
    try {
      const decriptDados = await jwt.verify(token, jwtSecret);
      return decriptDados;
    } catch (error) {
      return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
    }
};

 module.exports = {

    generateToken,
    authenticToken,
 };

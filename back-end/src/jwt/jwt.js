const jwt = require('jsonwebtoken');
const fs = require('fs');

const TOKEN_SECRET = fs.readFileSync('jwt.evaluation.key');

const jwtConfig = {
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  try {
    return jwt.sign(payload.dataValues, TOKEN_SECRET, jwtConfig);
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

const decodeToken = (token) => {
  if (!token) {
    throw Object.assign(new Error(
      'Token not found',
 ), { statusCode: 401 }); 
  }
  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    throw Object.assign(new Error(
      'Expired or invalid token',
 ), { statusCode: 401 });
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
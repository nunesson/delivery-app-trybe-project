const { decodeToken } = require('../../jwt/jwt');
const adminService = require('../Services/Admin.service');

const register = async (req, res, next) => {
  try {
    const { headers: { authorization } } = req;
    const admin = decodeToken(authorization);
    if (admin.role === 'administrator') {
      const newUser = await adminService.register(req.body);
      return res.status(201).json(newUser);
    }
    return res.status(403).json({ message: 'Acesso negado' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
};
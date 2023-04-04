const { decodeToken } = require('../../jwt/jwt');
const adminService = require('../Services/Admin.service');

const register = async (req, res, next) => {
  try {
    const { headers: { authorization } } = req;
    const admin = decodeToken(authorization);
    if (admin.role === 'administrator') {
      const newUser = await adminService.register(req.body);
      res.status(201).json(newUser);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
};
    const loginService = require('../Services/Register.service');

const register = async (req, res, next) => {
    try {
        const token = await loginService.register(req.body);
        res.status(201).json(token);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
};
const loginService = require('../Services/Register.service');

const register = async (req, res, next) => {
    try {
        const user = await loginService.register(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
};
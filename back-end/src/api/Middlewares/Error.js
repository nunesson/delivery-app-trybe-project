const error = (err, req, res, _next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Erro inesperado. Por favor, tente mais tarde';
  console.log(err);
    return res.status(status).json({ message });
  };

  const errorType = (condition, message, statusCode) => {
    if (condition) {
        throw Object.assign(new Error(
            message,
       ), { statusCode }); 
       }
  };

  module.exports = { error, errorType };
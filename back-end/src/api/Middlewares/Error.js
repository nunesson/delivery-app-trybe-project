const error = (err, req, res, _next) => {
  const { message, statusCode } = err;
    return res.status(statusCode).json({ message });
  };

  const errorType = (condition, message, statusCode) => {
    if (condition) {
        throw Object.assign(new Error(
            message,
       ), { statusCode }); 
       }
  };

  module.exports = { error, errorType };
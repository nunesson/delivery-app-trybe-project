const axios = require('axios');

const genericPost = async (route, data) => {
  const response = axios.post(`http://localhost:3001/${route}`, data);
  return response;
};

module.exports = {
  genericPost,
};

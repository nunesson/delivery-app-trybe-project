const axios = require('axios');

const genericRoutes = async (route, type, data) => {
  switch (type) {
  case 'post':
    try {
      const response = await axios.post(`http://localhost:3001/${route}`, data);
      return response;
    } catch (error) {
      const { status } = error.response;
      return { status };
    }
  case 'get':
    try {
      const response = await axios.get(`http://localhost:3001/${route}`);
      return response;
    } catch (error) {
      const { status } = error.response;
      return { status };
    }
  case 'put':
    try {
      const response = await axios.put(`http://localhost:3001/${route}`, data);
      return response;
    } catch (error) {
      const { status } = error.response;
      return { status };
    }
  default:
    break;
  }
};

module.exports = {
  genericRoutes,
};

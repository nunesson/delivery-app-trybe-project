const axios = require('axios');

const genericPost = async (route, data) => {
  try {
    const response = await axios.post(`http://localhost:3001/${route}`, data);
    return response;
  } catch (error) {
    const { status } = error.response;
    return { status };
  }
};

module.exports = {
  genericPost,
};

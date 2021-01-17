const axios = require("axios");

const fetchData = async (albumUrl) => {
  let response = {};
  try {
    response = await axios.get(albumUrl);
  } catch (e) {
    console.error("e:", e);
    return false;
  }
  return response.data;
};

module.exports = { fetchData };

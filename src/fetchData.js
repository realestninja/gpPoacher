const axios = require("axios");

const fetchData = async (albumUrl) => {
  let response = {};
  try {
    response = await axios.get(albumUrl);
  } catch (e) {
    console.log(`Error on ${albumUrl}`);
    console.error("e:", e);
    return false;
  }
  return response.data;
};

module.exports = { fetchData };

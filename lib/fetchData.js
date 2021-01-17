const request = require("request");

const { processData } = require("./processData");

const fetchData = async (albumUrl) => {
  console.log("fetch data here! albumUrl: ", albumUrl);
  request(albumUrl, (error, response, body) => {
    if (error === null) processData(body);
  });
};

module.exports = { fetchData };

const { fetchData } = require("./src/fetchData");
const { processData } = require("./src/processData");
const { writeToFile } = require("./lib/fileActions");

const main = async () => {
  let rawBody;
  if (process.argv.length >= 3) {
    const albumUrl = process.argv[2];
    console.log("fetching from url: ", albumUrl);
    rawBody = await fetchData(albumUrl);

    const body = await processData(rawBody);
    console.log("body:", body);

    writeToFile(body);
  } else {
    console.log("album share URL required as arg");
  }
};

main();

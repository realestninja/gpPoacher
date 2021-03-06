const { fetchData } = require("./src/fetchData");
const { processData } = require("./src/processData");
const { writeToFile, readUrlFile } = require("./src/fileActions");

const handleAlbum = async (albumUrl) => {
  console.log("fetching from url: ", albumUrl);
  const rawBody = await fetchData(albumUrl);
  const body = await processData(rawBody);

  writeToFile(albumUrl, body);
};

const main = async () => {
  if (process.argv.length >= 3) {
    // create url list for requested album
    const albumUrl = process.argv[2];
    handleAlbum(albumUrl);
  } else {
    // create url list for all albums in shareUrls file
    const albumUrls = await readUrlFile();
    albumUrls.forEach((albumUrl) => handleAlbum(albumUrl));
  }
};

main();

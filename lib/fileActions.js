const fs = require("fs");
const LineReaderSync = require("line-reader-sync");

const writeToFile = (albumUrl, content) => {
  const albumUrlParts = albumUrl.split("/");
  const albumId = albumUrlParts[albumUrlParts.length - 1];

  const outputFolder = "./output";
  const outputFile = `${outputFolder}/${albumId}.json`;

  const fileContent = {
    albumId,
    albumUrl,
    content,
  };

  if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);

  fs.writeFileSync(outputFile, "");
  fs.writeFileSync(outputFile, JSON.stringify(fileContent));
};

const readUrlFile = async () => {
  const filePath = "./shareUrls";
  const lrs = new LineReaderSync(filePath);
  return lrs.toLines();
};

module.exports = { writeToFile, readUrlFile };

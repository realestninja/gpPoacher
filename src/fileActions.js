const fs = require("fs");
const LineReaderSync = require("line-reader-sync");

const writeToFile = (albumUrl, content) => {
  const albumUrlParts = albumUrl.split("/");
  const albumShareId = albumUrlParts[albumUrlParts.length - 1];

  const outputFolder = "./output";
  const outputFile = `${outputFolder}/${albumShareId}.json`;

  const fileContent = {
    albumShareId,
    albumUrl,
    content,
  };

  if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);

  fs.writeFileSync(outputFile, JSON.stringify(fileContent));
  console.log(`${albumShareId} done.`);
};

const readUrlFile = async () => {
  const filePath = "./shareUrls";
  const lrs = new LineReaderSync(filePath);
  return lrs.toLines();
};

module.exports = { writeToFile, readUrlFile };

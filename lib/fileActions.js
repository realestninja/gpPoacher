const fs = require("fs");

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

module.exports = { writeToFile };

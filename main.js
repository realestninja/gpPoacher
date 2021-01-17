const { fetchData } = require("./lib/fetchData");

const main = async () => {
  if (process.argv.length < 3) return;
  const albumUrl = process.argv[2];
  await fetchData(albumUrl);
};

main();

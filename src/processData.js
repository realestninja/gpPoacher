const keepOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) !== -1);
const tossOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) === -1);

const removeClutter = (input) => {
  let content = keepOccurrences(input, "https://lh3.googleusercontent.com");
  content = keepOccurrences(content, "null,[]");
  content = tossOccurrences(content, "video");

  return content;
};

const fixFirstLine = (content) => {
  const firstLine = content[0];

  const regex = /[A-Z]/g;
  const found = firstLine.match(regex);

  console.log("firstLine:", firstLine);
  console.log("-----------");
  console.log("found:", found);

  return content;
};

const processData = async (rawBody) => {
  let content = rawBody.split("\n");
  content = removeClutter(content);
  content = fixFirstLine(content);

  return content;
};

module.exports = { processData };

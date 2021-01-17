const keepOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) !== -1);
const tossOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) === -1);

const removeClutter = (input) => {
  let content = keepOccurrences(input, "https://lh3.googleusercontent.com");
  content = keepOccurrences(content, "null,[]");
  content = tossOccurrences(content, "video");

  return content;
};

const extractUrls = (content) => {
  const urls = [];
  content.forEach((line) => {
    const regex = /(\bhttps:\/\/lh3.googleusercontent.com\/).[a-zA-Z0-9-_]*/g;
    const match = line.match(regex);
    console.log("match:", match);

    if (match.length === 1) {
      urls.push(match[0]);
    }
  });

  return urls;
};

const processData = async (rawBody) => {
  let content = rawBody.split("\n");
  content = removeClutter(content);
  content = extractUrls(content);

  return content;
};

module.exports = { processData };

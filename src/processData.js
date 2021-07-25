const keepOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) !== -1);
const tossOccurrences = (array, subStr) => array.filter((str) => str.indexOf(subStr) === -1);
const regex = /(\bhttps:\/\/lh3.googleusercontent.com\/).[a-zA-Z0-9-_]*/g;

const removeClutter = (input) => {
  let content = keepOccurrences(input, "https://lh3.googleusercontent.com");
  content = keepOccurrences(content, "null,[]");
  const content2020version = tossOccurrences(content, "video");

  // assuming the album contains more than just 1 item...
  if (content2020version.length > 1) {
    content = tossOccurrences(content, "video");
    return content2020version;
  }

  /*
   * 2021 version:
   * before 2021: the content would be an array of strings.
   * now in 2021: it is a single string that has all the urls
   */
  return content;
};

// 2020 version
const extractUrlsFromArray = (content) => {
  const urls = [];
  content.forEach((line) => {
    const match = line.match(regex);

    if (match.length === 1) {
      urls.push(match[0]);
    }
  });

  return urls;
};

// 2021 version
const extractUrlsFromString = (string) => {
  let content = string.match(regex);

  // remove ids that are just the character "a"
  content = content.filter((str) => str.split("/").pop().length !== 1);

  // remove user profile picture
  // id seems to be 107 characters long... not sure if newer accounts have longer ids)
  content = content.filter((str) => str.split("/").pop().length !== 107);

  return [...new Set(content)];
};

const processData = async (rawBody) => {
  let content = rawBody.split("\n");
  content = removeClutter(content);
  if (content.length > 1) {
    // 2020 version
    content = extractUrlsFromArray(content);
  } else {
    // 2021 version
    content = extractUrlsFromString(content[0]);
  }

  return content;
};

module.exports = { processData };

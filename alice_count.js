const fs = require("fs");
const aliceInWonderland = fs.readFileSync("./alice_in_wonderland.txt", "utf8");
const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()?“”‘’—\[\]]+/g;

const WORD_ARRAY = aliceInWonderland.replace(regex, "").split(/\s+/);
const FILL_WORDS = ["the", "and", "to", "a", "of", "it", "in", "was"];

const countCat = () => {
  const searchTerm = "cat";
  return WORD_ARRAY.reduce((acc, word) => {
    if (word.toLowerCase() === searchTerm) {
      acc++;
    }
    return acc;
  }, 0);
};

// Expected output is 35
console.log("Cat Count:", countCat());

const wordFrequency = () => {
  const wordCount = WORD_ARRAY.reduce((acc, word) => {
    word = word.toLowerCase();
    // check if word is one of the fillwords, if so skip
    if (FILL_WORDS.includes(word)) return acc;

    // add words to object if they don't exist yet, or increment if they already exist in the object
    if (!acc[word]) {
      acc[word] = 1;
    } else {
      acc[word]++;
    }

    return acc;
  }, {});

  // transform object to array of key-value pairs, sort them from most to least frequent on value field, cut out only the first 10 elements
  const sortedAndShortened = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  // transform Array back into object and return
  return Object.fromEntries(sortedAndShortened);
};

// Expected output is the top-ten most-frequent words, including the number of times they appear in the text, ordered from most-to-least frequent
console.log("Word Frequency:", wordFrequency());

const fs = require("fs");
const aliceInWonderland = fs.readFileSync("./alice_in_wonderland.txt", "utf8");
const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()?“”‘’—\[\]]+/g;

const countCat = () => {
  const searchTerm = "cat";
  const split = aliceInWonderland.replace(regex, "").split(/\s+/);
  const catCount = split.reduce((acc, word) => {
    if (word.toLowerCase() === searchTerm) {
      acc++;
    }
    return acc;
  }, 0);
  return catCount;
};

// Expected output is 35
console.log("Cat Count:", countCat());

const wordFrequency = () => {
  const excludedWords = ["the", "and", "to", "a", "of", "it", "in", "was"];
  const words = aliceInWonderland.replace(regex, "").split(/\s+/);
  const wordCount = words.reduce((acc, word) => {
    word = word.toLowerCase();

    if (!acc[word]) {
      acc[word] = 1;
    } else {
      acc[word]++;
    }

    return acc;
  }, {});

  const filteredWords = Object.entries(wordCount).filter(
    (word) => !excludedWords.includes(word[0])
  );
  const sortedWords = filteredWords.sort((a, b) => b[1] - a[1]);

  return sortedWords.slice(0, 10);
};

// Expected output is the top-ten most-frequent words, including the number of times they appear in the text, ordered from most-to-least frequent
console.log("Word Frequency:", wordFrequency());

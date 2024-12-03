const fs = require("fs");
const aliceInWonderland = fs.readFileSync("./alice_in_wonderland.txt", "utf8");
const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()?“”‘’—\[\]]+/g;

const countCat = () => {
  const searchTerm = "cat";
  const split = aliceInWonderland.replace(regex, "").split(/\s+/);
  const catCount = split.reduce((acc, word) => {
    if (word.toLowerCase() === searchTerm) { //made function only look for the word 'cat' not words that contained 'cat'
      acc++;
    }
    return acc;
  }, 0);
  return catCount;
};

// Expected output is 35
console.log("Cat Count:", countCat());

const wordFrequency = () => {
  const excludeWords = new Set([
    "the",
    "and",
    "to",
    "a",
    "of",
    "it",
    "in",
    "was",
  ]); //removing words we wanted to exclude
  const words = aliceInWonderland.replace(regex, "").split(/\s+/);
  const wordCount = words.reduce((acc, word) => {
    word = word.toLowerCase();
    if (!excludeWords.has(word)) {
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {});

  const sortWordCount = [];
  for (let word in wordCount) {
    sortWordCount.push([word, wordCount[word]]);
  } // creating an array to sort through the wordCount
  sortWordCount.sort((a, b) => b[1] - a[1]); // sorting the array by descending frequency

  return sortWordCount.slice(0, 10);
};

// Expected output is the top-ten most-frequent words, including the number of times they appear in the text, ordered from most-to-least frequent
console.log("Word Frequency:", wordFrequency());

function withdraw(amount) {
  const arr = [0, 0, 0]; // creating array to hold counts
  let temp = amount;

  arr[0] = Math.floor(temp / 100); // counting $100 bills
  temp %= 100;

  if (temp >= 50 && temp % 20 !== 0) { // counting $50 ONLY if the remainder is 0 and not better handled by $20 bills
    arr[1] = Math.floor(temp / 50);
    temp %= 50;
  }

  arr[2] = Math.floor(temp / 20); // counting remaining with $20 bills
  temp %= 20;

  return arr;
}

// Test cases for withdraw
console.log(withdraw(250)); // Output: [2, 1, 0]
console.log(withdraw(260)); // Output: [2, 0, 3]
console.log(withdraw(370)); // Output: [3, 1, 1]
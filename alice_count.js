const fs = require("fs");
const aliceInWonderland = fs.readFileSync("./alice_in_wonderland.txt", "utf8");
const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()?“”‘’—\[\]]+/g;


/*
Previous issue and implemented solution: 
  The countCat algorithm previously used split.includes("cat") to attempt to grab all words that matched "cat." However, using the includes method 
  would include any word that contains "cat," meaning words like "category" would be added, which is not correct. Instead, I used the filter
  array method, which is a better approach because it allows us to iterate through the array and check if a word specifically matches the 
  search term.
*/

// Time and space: o(n)
const countCat = () => {
  const searchTerm = "cat";
  const split = aliceInWonderland.replace(regex, "").split(/\s+/);

  const catCount = split.filter(word => {
    return word.toLowerCase() === searchTerm
  })
  return catCount.length
};

// Expected output is 35
console.log("Cat Count:", countCat());

/*
Previous issue and implemented solution: 
  The wordFrequency algorithm found all instances of the words in the aliceInWonderland text but failed to find the top ten most frequent 
  words. I completed the ask of algorithm by creating a map that stores the top ten most frequent words and their frequency counts.
*/

// Time complexity: o(n log n)
// Space complexity: o(n)
const wordFrequency = () => {
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

  const result = topTenFrequentWords(wordCount)

  return result

};

const topTenFrequentWords = (wordCount) => {
  const topTenFrequentWords = {}
  const pairs = []
  const excludedWords = new Set(["the", "and", "to", "a", "of", "it", "in", "was"])

  for (let key in wordCount) {
    if (!excludedWords.has(key)) {
      pairs.push([key, wordCount[key]])
    }
  }

  pairs.sort((a, b) => b[1] - a[1])

  for (let i = 0; i < 10; i++) {
    topTenFrequentWords[[pairs[i][0]]] = pairs[i][1]
  }
  return topTenFrequentWords
}

// Expected output is the top-ten most-frequent words, including the number of times they appear in the text, ordered from most-to-least frequent
console.log("Word Frequency:", wordFrequency());

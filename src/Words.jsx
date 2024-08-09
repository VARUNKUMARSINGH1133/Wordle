import wordBank from "./wordle-bank.txt";

export const BoardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

export const generateWordSet = async () => {
    let wordSet;
    let wordsAns
    await fetch(wordBank)
        .then((response) => response.text())  // Corrected the typo here
        .then((result) => {
            const wordArr = result.split("\n");
            wordsAns= wordArr[Math.floor(Math.random() *wordArr.length)]
            wordSet = new Set(wordArr.map(word => word.trim().toLowerCase()));  // Ensuring words are trimmed and in lowercase
        });
    return { wordSet,wordsAns };
};

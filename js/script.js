logItems(['Mango', 'Poly', 'Ajax']);


function logItems(array) {
  for (let i = 0; i < array.length; i+= 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

const message = "тут рахуються пробіли";
const pricePerWord = 10;

const words = message.split(' ');
const totalPrice = words.length * pricePerWord;

console.log(totalPrice); 



const result = findLongestWord("Тут рахується найдовше словоооооо");


function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(result);


console.log(formatString("Це короткий рядок")); 


console.log(formatString("А це великиииииииииииииииииииииииииииииииииииииииииий")); 



function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + '...';
  }
}


console.log(checkForSpam("Buy now! This is not a spam message"));
console.log(checkForSpam("Happy birthday")); 
 
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}


let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) {
    break;
  }

  
  if (isNaN(input) || input.trim() === "") {
    alert("Було введено не число, попробуйте ще раз");
    continue; 
  }

 
  numbers.push(Number(input));
}


if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив чисел порожній, нічого підсумовувати.");
}


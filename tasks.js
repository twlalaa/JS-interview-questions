// 1. Write a function that takes two numbers and returns the sum of those numbers

const sumNumber = (a, b) => {
  return a + b;
};

console.log("task 1 => ", sumNumber(1, 2));

// 2. Write a function that takes any number as arguments and returns the sum of all arguments

const sumAll = (...numbers) => {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log("task 2 => ", sumAll(1, 2, 3));

// 3. Write a function that reverses a string.

let str = "apple";

const reverseString = (string) => {
  let strCopy = "";
  for (let i = string.length - 1; i >= 0; i--) {
    strCopy += string[i];
  }
  return strCopy;
};

console.log("task 3 => ", reverseString(str));

// 4. Write a function to calculate the factorial of a given integer.

const factorial = (number) => {
  let f = 1;
  for (let i = 1; i <= number; i++) {
    f *= i;
  }
  return f;
};

console.log("task 4 => ", factorial(5));

// 5. Write a function that prints numbers from 1 to N, but for multiples of 3,
//print "Fizz" instead of the number, and for multiples of 5, print "Buzz."
//For numbers that are multiples of both 3 and 5, print "FizzBuzz."

const printFunction = (N) => {
  for (let i = 0; i < N; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
};

// printFunction(16);

// 6. Write a function that checks if a given number is prime?

//sade eded

const isPrime = (number) => {
  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      counter++;
    }
  }
  if (counter === 2) {
    return true;
  } else return false;
};

console.log("task 6 => ", isPrime(17));

// 7. Create a function that finds the longest word in a string.

const myString = "Hello my name is Lala and I am twenty";

const findLongest = (string) => {
  let words = myString.split(" ");
  let i;
  let max = 0;
  words.forEach((word, index) => {
    if (word.length >= max) {
      max = word.length;
      i = index;
    }
  });
  console.log("task 7 => ", words[i]);
};

findLongest(myString);

// 8. Write a function that converts a sentence into title case (capitalizes the first letter of each word).

const mySentence = "hello i am lala and i am twenty";

const capitalizeSentence = (sentence) => {
  const capitalizeWord = (word) => {
    let y = "";
    for (let i = 0; i < word.length; i++) {
      if (i == 0) {
        y += word[i].toUpperCase();
      } else {
        y += word[i];
      }
    }
    return y;
  };

  const words = sentence.split(" ");
  let capitalizedWords = [];
  words.forEach((word) => {
    capitalizedWords.push(capitalizeWord(word));
  });
  console.log("task 8 => ", capitalizedWords.join(" "));
};

capitalizeSentence(mySentence);

// 9. Write a function that finds the second largest number in an array of numbers.

let myArray = [32, 24, 100, 6, 1, 4, 5, 48];

const findSecondLargest = (array) => {
  let sortedArray = array.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 2];
};

console.log("task 9 => ", findSecondLargest(myArray));

// 10. Write a function that reverses the order of words in a sentence.

let newSentence = "hello my name is Lala and I am twenty";

const reverseOrder = (sentence) => {
  const words = sentence.split(" ");
  return words.reverse().join(" ");
};

console.log("task 10 => ", reverseOrder(newSentence));

// 11. Write a function that removes duplicate characters from a string without using additional data structures.

const myWord = "hello";

const removeDuplicate = (word) => {
  const letters = word.split("");
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (j !== i) {
        if (letters[j] == letters[i]) {
          letters.splice(j, 1);
        }
      }
    }
  }
  return letters.join("");
};

console.log("task 11 => ", removeDuplicate(myWord));

// 12. Write a function that calculates the missing angle in a triangle when given the other two angles.

const missingAngle = (alpha, betta) => {
  return 180 - alpha - betta;
};

console.log("task 12 => ", missingAngle(30, 60));

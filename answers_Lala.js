// 1. What is the difference between == and === operators?

//== checks only if the values inside the variables are same or not, and it considers thosee variables to be the same types.
//=== checks their types and inside values as well

// 2. What is the purpose of double exclamation (!!)?

//it converts the variable into a boolean value

// 3. What is typeof operator?

//it shows the type of the variable (String, object, null, undefined,...)

// 4. What is the difference between null and undefined?

//undefined means there is no assigned value, so the variable has unknown value.
//null means variable has value and it is empty.

// 5. What is isNaN?

//it is a function that checkes if the variable is "not a number", meaning it is either string, or something else.

// 6. What is NaN property?

//not a number, meaning it is either string, or something else

// 7. How do you add a key value pair in javascript?

//objectName.key="value"

// 8. What is a conditional operator in javascript?

// something ? something : something

// 9. What are default parameters?

//when we create a function we can but default values to variables, these values will be used in case there is no value to that variable when the function is called.

// 10. Which value is not equal to itself in javascript?

//NaN

// 11. What are lambda or arrow functions?

//()=>{} anonymous function

// 12. What is a strict mode in javascript?

//it is a feature of js which allows developers to detect possible errors, warning unsafe actions which ensures safer bug-free coding.

// 13. How do you declare strict mode?

//"use strict";

// 14. Why do you need strict mode?

//it warns unsafe actions such as undeclared variables, etc. and makes "this" keyword behave differently, making it more useful.

// 15. What is undefined property?

//the variable is declared, but it's value is not known. Or in objects if we try to access to a key that is not in the object then it will return error as "undefined"

// 16. What is null value?

//variable is declared, and its value is defined as empty intentionally.

// 17. What would be the result of 1 + 2 + '3'?

//33

// 18. What are the function parameter rules?

//js does not check the number of parameters, it doesnt check the type of parameters, and no need to declare the type of the parameter.

// 19. How do you empty an array?

//myArray.length=0

// 20. How do you create an infinite loop?

//let i=0;
//while(i>=0)
//i++;

// 21. What is JSON and its common operations?

//Javascript object notation which is useful and easy for developers to read and write and for matchine to parse and generate: parse and stringify

// 22. What is the purpose of the array slice method?

//to return a portion of the array, without modifying the original array

// 23. What is the purpose of the array splice method?

//to delete an element of the array, it modifies the original array

// 24. What is the difference between slice and splice?

//one mutates and the other does not

// 25. What is the purpose of the let keyword?

//to declare variable that can have its value changed later if needed

// 26. What is the difference between let and var?

//both are used for declaration and can have their values changed later, but the variable declared with var can be used before declaration (hoisting), it will be undefined but still will not give error
//however "let" cannot be used before declaration it will give reference error

// 27. What is the Temporal Dead Zone?

//let and const variables cannot be hoisted, so the area above the declaration below the intitialization line is considered to be temperal dead zone

// 28. What is Hoisting?

//hoisting is the default behavior of the js to move the declaration of the variable to the top of the scope.

// 29. What is scope in javascript?

//its the area where declared variables are reachable, accessable and usable, a nd they cannot be used from the outside of that area.

// 30. What is web storage?

//it is a feature that is used to store the data locally on a device. it can be sessionStorage and localStorage.

// 31. How do you access web storage?

//localStorage.setItem("x", x), localStorage.getItem("x")

// 32. What are the methods available on session storage?

//setItem, getItem, removeItem, clear

// 33. Why do you need web storage?

//to store the data locally on the device, so it can later be used to remember the user's language preference or to save the passwords in the background, and other common settings so the user can access easily when needed.

// 34. What are break and continue statements?

//break is to stop the loop completely
//continue is used to make the loop pass that point and continue the loop

// 35. What is the purpose of delete operator?

//array: deletes the value of element, but doesnt delete the element completely, keeping its value empty

// let myarr = [1, 2, 3];
// delete myarr[2];
// console.log(myarr);

//object: deletes the element completely

// let myObj = {
//   name: "Lala",
//   age: 20,
// };

// delete myObj.name;
// console.log(myObj);

// 36. What is the difference between window and document?

//window is browsers interface but document is the web page of html

// 37. Is JavaScript a case-sensitive language?

//yes

// 38. Is there any relation between Java and JavaScript?

//java is mostly used for backend and js for frontend

// 39. Who created javascript?

//brendan eich in 1995

// 40. What is the use of preventDefault method?

//prevents the default action that could happen, for example stops form from being submitted, and so on.

// 41. What are modules?

//enables to create separate code to various files/components and connect them to each other, allowing developers to write clean/tidy structured codes

// 42. What is the benefit of using modules

//clear structured codes, easy to read/understand

// 43. What is the use of stopPropagation method?

//if we click some buttons in a container, we are also considered to click the container as well, stopPropogation helps to prevent this, by prioritizing child elements rather than parent ones

// 44. What is the use of setTimeout?

//to execute the function after certain time limit

// 45. What is the use of setInterval?

//function will be executed in certain time intervals, every few seconds, or minutes, etc.

// 46. How do you check whether a string contains a substring?

//includes method

// const x = "lala";
// console.log(x.includes("la"));

// 47. How do you redirect new page in javascript?

//window.loaction.href="**url**"

// 48. How do you check if a key exists in an object?

//hasOwnProperty method

// const obj = {
//   name: "lala",
//   age: 20,
// };

// console.log(obj.hasOwnProperty("name"));

// 49. How do you loop through javascript object?

//for in

// const obj = {
//   name: "lala",
//   age: 20,
// };

// for (const key in obj) {
//   console.log(obj[key]);
//   console.log(key);
// }

// 50. How do you make first letter of the string in an uppercase?

// let x = "lala";

// let y = "";
// for (let i = 0; i < x.length; i++) {
//   if (i == 0) {
//     y += x[i].toUpperCase();
//   } else {
//     y += x[i];
//   }
// }

// console.log(y);

// 51. How do you display the current date in javascript?

// const date = new Date();
// console.log(date);

// 52. How do you compare two date objects?

//by substracting them

// const date = new Date();

// const otherDate = new Date(2020, 3, 4);

// console.log(date - otherDate); //this is on milliseconds

// let x = date - otherDate;

// yearDiff = x / (1000 * 60 * 60 * 24 * 365);
// console.log(yearDiff);

// 53. How do you check if a string starts with another string?

//startswith

// const x = "apple";

// console.log(x.startsWith("ap"));

// 54. How do you trim a string in javascript?

//.trim()

// const x = "         lala";

// console.log(x.trim());

// 55. What are template literals?

//``

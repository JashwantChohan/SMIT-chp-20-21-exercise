// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your first Name")
// let secondName = prompt("Enter your Second Name")

// let fullName = firstName + secondName

// document.write(`Hello ${fullName}, Welcome to the show`)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// let mobileInput = prompt("Enter your favourite mobile phone model")

// let length = mobileInput.length

// document.write(`Your favourite mobile phone is: ${mobileInput}<br>`)
// document.write(`length of a string is ${length}`)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let value = "Pakistani"
// let indexNo = value.indexOf('n')
//document.write(`String ${value}`)
//document.write(`Index of n: ${indexNo}`)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let value = "Hello World"
// let indexNo = value.lastIndexOf('l')
// document.write(`String ${value}<br>`)
// document.write(`Index of n: ${indexNo}`)


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let value = "Pakistani"
// let indexNo = value.charAt(3)
// document.write(`String ${value}<br>`)
// document.write(`Character at 3: ${indexNo}`)

// 6. Repeat Q1 using string concat() method.   

// let firstName = prompt("Enter your first Name")
// let secondName = prompt("Enter your Second Name")

// let fullName = firstName.concat(secondName)

// document.write(`Hello ${fullName}, Welcome to the show`)

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// let word = "Hyderabad"
// let  result = word.replace("Hyder"," Islam")

// document.write(`City: ${word}<br>`)
// document.write(`After Replacement: ${result}`)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var line = "Ali and Sami are best friends. They play cricket and football together."
// let result = line.replace(/and/g , "&")
// document.write(result)

// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let str = "472"
// let convertedStr = parseInt(str)
// document.write(`value: ${str}<br>`)
// document.write(`Type: ${typeof(str)}<br>`)
// document.write(`value: ${str}<br>`)
// document.write(`Type: ${typeof(convertedStr)}`)

// // 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let input = prompt("Enter your name ")
// let result = input.toUpperCase()
// document.write(`user input : ${input}<br>`)
// document.write(`Upercase : ${result}`)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var input = prompt("Enter something:");
// var words = input.split(" ");
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }
// var titleCase = words.join(" ");
// document.write("Title Case: " + titleCase);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// let val = 53.36
// let str = val.toString()
// let result = str.replace(".", "")
// document.write(`Number: ${val}<br>`)
// document.write(`Result : ${result}`)    


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// let userName = prompt("Enter user name ")
// if (userName.includes('@') || userName.includes('.') || userName.includes(',') || userName.includes('!')) {
//     alert("Enter a valid user name ")
// } else {
//     alert(`Hello ${userName}`)
// }      


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// let arr = ["cake", "apple pie", "cookie", "chips", "patties"]

// let userInput = prompt("Welcome to ABC Bakery, What you want to order Sir/Ma'am").toLocaleLowerCase()
// switch (userInput) {
//     case "cake":
//         alert("cake is available in our bakery at index 0")
//         break;
//     case "apple pie":
//         alert("apple pie is available in our bakery at index 1")
//         break;
//     case "cookie":
//         alert("cookie is available in our bakery at index 2")
//         break;
//     case "chips":
//         alert("chips is available in our bakery at index 3")
//         break;
//     case "patties":
//         alert("patties is available in our bakery at index 4")
//         break;

//     default:
//         if( userInput !== "cake" || userInput !== "cookie" || userInput !== "apple pie" || userInput !== "chips" || userInput !== "patties" ){
//             alert(`We are sorry. ${userInput} is not available in our bakery `) 
//         }


// /15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document./         break;
// // }


// let password = prompt("Enter your password");
// let hasLetter = false;
// let hasNumber = false;
// let isvalid = true;

// if (password.length <= 6) {
//     isvalid = false;
// }

// let firstLetterChar = password.charCodeAt(0);

// if (firstLetterChar >= 48 && firstLetterChar <= 57) {
//     isvalid = false;
// }

// for (let i = 0; i < password.length; i++) {
//     let ascii = password.charCodeAt(i);

//     if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
//         hasLetter = true;
//     } else if (ascii >= 48 && ascii <= 57) {
//         hasNumber = true;
//     }
// }

// if (!hasLetter || !hasNumber) {
//     isvalid = false;
// }

// if (isvalid) {
//     alert(`Password accepted: ${password}`);
// } else {
//     alert(`Invalid password! Must: 
// - Be at least 6 characters 
// - Contain both letters and numbers 
// - Not start with a number`);
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let str = "University of Karachi"
// let strConverted = str.split("")
// for(i = 0 ; i < strConverted.length; i ++){
//     document.write(strConverted[i] + "<br>")
//     // console.log(strConverted[i])
// }


// 17. Write a program to display the last character of a user
// input.

// let str = "Pakistan"
// let result = str.slice(-1)
// console.log(result)


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let str = "The quick brown fox jumps over the lazy dog"

// let result = str.split("the").length - 1
// console.log(result)
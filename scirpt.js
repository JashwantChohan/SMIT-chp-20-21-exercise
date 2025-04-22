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

let userName = prompt("Enter user name ")
if( userName == '@' && userName == '.' && userName == ',' &&  userName == '!' ){
    alert("Enter a valid user name ")
    console.log("enter a valid user name")
}       
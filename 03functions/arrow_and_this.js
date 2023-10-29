const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

//  chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// const code = function() {
//     let username = "Hitesh";
//     console.log(this)
// }

// chai()
// code()

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) =>  num1 + num2

// // const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// // const myArray = [2, 5, 3, 7, 8]

// // myArray.forEach()

//-----------------------------------------------------------------

/* this keyword doesnt return anything in the case of functions it is only useful when using with objects 

*/

function hello(){
//this keyword in this type of functions return the global scope of function ie values regarding it
//this kind of functions can be called even before its declaration in js
}

const hello1 = function(){
//same as above function 
//cant be called before its declaration.
}

const hello2 = () => {
//arrow function on using this returns {} empty parenthesis as the scope 
//arrow funtion cannot be called before its declaration



}


const chaiaurcode = (num1,num2) => ({name :"Hitesh"})

console.log(chaiaurcode(1,2));

//this is known as the implicit return in javascript but in this in order to return a object wrap that obj inside of a parenthesis

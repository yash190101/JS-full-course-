// iife => immediately invoked function expression
// when to use => when we want to immediately invoke our functions as the start and when we dont the global scope pollution to affect the function at that time
//by global scope i mean all the variables in function will be private to the function only
(function chai(){
    //this is a named iife
    console.log(`DB CONNECTED`);
})();
//in order to use multiple iife functions we have to end the previous function using a semicolon
( (value) => {
    //tis is a arrow iffe function
    //in order to send parameters in this functions we can directly enter them in the parenthesis same as the regular functions
    console.log(`DB CONNECTED ${value}`);   
})(2)
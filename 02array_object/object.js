let mySym = Symbol("myKey");

let myObj = {

    name : "Yash",
    number : 10,
    email : "yvpatil",
    mysym1 : mySym

}

myObj['name'] = 'Dhanesh'

// console.log(myObj);
console.log(myObj["name"]);
console.log(myObj["mysym1"]);
// console.log(myObj);
// console.log(myObj);

myObj.greet2 = function(){
    console.log("Hello from JS2;")
}

myObj.greet = function() {

    console.log("Hello from JS;")
}


console.log(myObj.greet());
console.log(myObj["greet2"]());
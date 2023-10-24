let myArr = [0,1,2,3,4,5]
// console.log(myArr);
// let myArr2 = myArr;
// console.log(myArr2);

// myArr2 = [0,0,0,0]
// console.log(myArr2);
// console.log(myArr);
let myArr2 = myArr.flat();
let myArr3 = myArr.concat(myArr2);
let myArr4 = [...myArr , ...myArr2 , ...myArr3]
console.log(myArr4);
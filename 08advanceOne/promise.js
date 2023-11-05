// const promiseOne = new Promise((resolve,reject) => {

//     // do async tasks here
//     // for eg network, db calls, cryptography tasks
//     setTimeout(() => {
//         console.log("Promise1 is being called");
//         resolve()
//     },4000)
// })

// promiseOne.then(function(){
//     console.log("Promise1 is soaked");
// })
//-------------------------------- creating without assigning/
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Promise2 is being called");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Promise2 is soaked");
// })

// send data using resolve and reject functions

// const promiseThree = new Promise(function(resolve,reject){
//     console.log("Promise3 is being called")
//     setTimeout(() => {
//         let error = true
//             if(!error){
//                 resolve({name : "Yash", email : "yashpatil"})
//             }else{
//                 reject({code : 404,value:"Something went wrong"})
//             }
//     }, 2000);
    
// })

// promiseThree.then((data)=>{ 
//     return data.name;
// }).then(function(data){
//     let name = data
//     console.log(name);
// }).catch((err)=>{
//     return Promise.reject(err.code);
// }).catch(function(code){
//     console.log(code);
// })

// console.log(name);


// ----------------- promise using async & await----------------

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({name : "Yash", email : "yashpatil"})
//         }else{
//             reject("Something went Wrong")
//         }
//     },2000)
// })

// async function tryPromise(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// --------------- Fetch with async and await ---------------

// async function fetchWithAsyncAndAwait(){
//     try {
//         const response = await fetch("https://api.github.com/users/yash190101")
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E: ",error);
//     }    
// }
// fetchWithAsyncAndAwait()


// ------------------- Fetch with then and catch ----------------


fetch("https://api.github.com/users/yash190101").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.id);
}).catch((error)=>{
    console.log(error);
})

// You cannot convert response.json() into variable and log there becuase .json() is a promise and will take time and cannot be used with just await

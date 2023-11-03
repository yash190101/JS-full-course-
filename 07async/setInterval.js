const display = function(name){
    const date = new Date();
    console.log(date.toLocaleTimeString(),name);
}
let setTime;
     


document.querySelector("#b1").addEventListener("click",function(){
    setTime = setInterval(display,1000,"Yash")
})

document.querySelector("#b2").addEventListener("click",function(){
    clearInterval(setTime)
})
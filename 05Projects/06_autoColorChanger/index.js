
let setTime;
function getRandomColor(){
    let setColor ='#'+Math.floor(Math.random()*16777215).toString(16);
    document.querySelector("body").style.backgroundColor = setColor
}

document.querySelector("#start").addEventListener("click",function(){
    if(!setTime){    
        setTime = setInterval(function(){
            getRandomColor();
            console.log("Color Changed");
        }, 1000);
    }
})


document.getElementById("stop").addEventListener("click",function(){
    clearInterval(setTime);
    setTime = undefined
    console.log("Stopped");
})
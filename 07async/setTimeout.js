const change = function(){
    document.querySelector("h1").innerHTML = "Hello to the new Series"
}


const setTime = setTimeout(change,2000)

document.querySelector("#b2").addEventListener("click",function(){
    clearTimeout(setTime)
    
})
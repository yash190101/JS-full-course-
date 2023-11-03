document.addEventListener("keypress",function(e) {
   
    // e.timeStamp
    
    // console.log(e.timeStamp);
    // const date = new Date(e.timeStamp);
    // const date1 = date.toLocaleDateString()
    // console.log(date1)
    let coordinate = e.keyCode
    console.log(coordinate);   

},false)

document.querySelector("#two").addEventListener("click",function(){
    console.log("2nd paragraph has been clicked")
},false)

document.getElementById("onea").addEventListener("click",function(e){
    e.preventDefault()
    e.stopPropagation()
})
const buttons = document.querySelectorAll(".button")
// console.log(buttons);

buttons.forEach((element)=>{
    element.addEventListener("click",function(e){
        switch(e.target.id){
            case "grey":
                document.body.style.backgroundColor = "grey";
                break;
            case "white":
                document.body.style.backgroundColor = "white";
                break;
            case "blue":
                document.body.style.backgroundColor = "blue";
                break;    
            case "yellow":
                document.body.style.backgroundColor = "yellow";
                break;
        }
    })
})
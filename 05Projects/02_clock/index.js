const clock = document.getElementById('clock')

setInterval(function(){
    const currentDate = new Date();
    
    clock.innerHTML = `${currentDate.toLocaleTimeString()}`
},1000)
document.addEventListener("keypress",function(e){
    
    document.querySelector(".key").innerHTML = `
    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>Key : ${e.key === " " ? "Space" : e.key}</td>
            <td>Key Code : ${e.keyCode}</td>
            <td>Code : ${e.code}</td>
        </tr>
    </table>
    `
    console.log(buttonPressed);
})


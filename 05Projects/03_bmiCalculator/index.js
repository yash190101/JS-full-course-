const form = document.querySelector('form')

form.addEventListener("submit",function(e){
     e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = BMI = ((weight) / ((height * height))*10000).toFixed(2);
    console.log(height,weight,result);
    const show_result = document.getElementById('results')
    const guess = document.querySelector("#guess");
    if(height === "" || height < 0 || height === NaN){
        show_result.innerHTML = "Enter a valid height";
    }else if(weight === " " || weight < 0 || weight === NaN){
        show_result.innerHTML = "Enter a valid weight";
    }else{
        show_result.innerHTML = result;

        if(result < 18.6){
            guess.innerHTML = "Under Weight"
        }else if(result > 24.9){
            guess.innerHTML = "Over Weight"
        }else{
            guess.innerHTML = "Normal"
        }
    }

})
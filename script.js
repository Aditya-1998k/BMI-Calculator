function bmi(){
    let inputs=document.querySelectorAll("input");
    for(let i=0; i<inputs.length; i++ ){
        if(isNaN(inputs[i].value) || Number(inputs[i].value)<=0){
            alert("Invalid Data")
        }
    }
    let heightx=Number(inputs[0].value)
    let massx=Number(inputs[1].value)
    var result=(heightx+heightx)
    var resulttag=document.getElementById("result1")
    resulttag.innerText="Your BMI is "+result;
    console.log(result)

}
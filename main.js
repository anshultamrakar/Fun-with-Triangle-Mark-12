const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles =  angle1 +  angle2  +  angle3
    console.log(sumOfAngles );
}


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    
    if(sumOfAngles === 180 ){
      sumOfAngles.innerText = "It is a triangle !"
      
    } else {
        sumOfAngles.innerText = "It is not a triangle !"
    }
 
}

isTriangleBtn.addEventListener("click", isTriangle);


























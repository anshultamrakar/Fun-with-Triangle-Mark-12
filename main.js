const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#btn");
const outputEl = document.querySelector("output");



function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles =  angle1 +  angle2  +  angle3
return sumOfAngles; 
}




function isTriangle(){  

    const sumOfAngles =  calculateSumOfAngles(Number(inputs.value[0]), Number(inputs.value[1]),Number(inputs.value[2]));
console.log(sumOfAngles)
  
}





isTriangleBtn.addEventListener("click",isTriangle);
const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
let sumOfAngles =  angle1 +  angle2  +  angle3
   console.log(sumOfAngles);
   return sumOfAngles;
}



function isTriangle(){
  let sumOfAngles=  calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
 if(sumOfAngles === 180){
    outputEl.innerText = "It is a triangle"
   
 }else{
   outputEl.innerText = "It is not  a triangle"
 }

}

isTriangleBtn.addEventListener("click", isTriangle);












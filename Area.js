const areaInput = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");



function calculateAreaOfTriangle(a,b){
    const areaOfTriangle = 0.5 * a * b;
    return areaOfTriangle;
}


function areaTriangle(){
    const areaOfTriangle = calculateAreaOfTriangle(Number(areaInput[0].value), Number(areaInput[1].value)); 
    outputEl.innerText = "The area of Triangle is " + areaOfTriangle + "cm²";
}






areaBtn.addEventListener("click", areaTriangle)
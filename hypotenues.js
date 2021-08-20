const hypoInputs = document.querySelectorAll(".hypo-input");
const hypoButton = document.querySelector("#hypo-btn");
const outputEl = document.querySelector("#output");


 function calculateHypo(a,b){
    const sumOfsqtr = a * a + b * b  ;
    return sumOfsqtr ;
 }



function calculateHypoteneus(){
        const sumOfsqrt = calculateHypo(Number(hypoInputs[0].value), Number(hypoInputs[1].value));
        const lengthOfHypo = Math.sqrt(sumOfsqrt);
        outputEl.innerText = "The length of hypoteneus is " + lengthOfHypo;
}

hypoButton.addEventListener("click", calculateHypoteneus);
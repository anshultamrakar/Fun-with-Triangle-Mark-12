const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-btn");
const outputElement = document.querySelector("#output");


const correctAnswer = ["90", "right angled "];

function calculateScore(){
    let score = 0 ;
    let index = 0 ;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1 ;
    }
   
    outputElement.innerText = "Your score is " + score ;
}


submitButton.addEventListener("click", calculateScore);
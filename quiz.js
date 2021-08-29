const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");


let correctAnswers = ["90°","right angled"];

function calculateScore(){
    let score = 0 ;
    let index = 0 ;
        let formResults = new FormData(quizForm);
        for (let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
             
        }
             index = index + 1 ;
                    
        }

    
         outputEl.innerText = "Your score is " + score;
}


submitButton.addEventListener("click", calculateScore);














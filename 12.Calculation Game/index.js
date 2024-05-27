const questions = document.getElementById('questions')
const inputAnswer = document.getElementById('input-answer')
const next = document.getElementById('next')
const result = document.getElementById('result')
const Start = document.getElementById('Start')
const quizContainer = document.querySelector('.container')

const data = [
    {
      "question": "What is 5 + 7?",
      "choices": [10, 11, 12, 13],
      "answer": 12
    },
    {
      "question": "What is 8 * 3?",
      "choices": [21, 22, 23, 24],
      "answer": 24
    },
    {
      "question": "What is 15 - 6?",
      "choices": [7, 8, 9, 10],
      "answer": 9
    },
    {
      "question": "What is 16 / 4?",
      "choices": [2, 3, 4, 5],
      "answer": 4
    },
    {
      "question": "What is 9 + 10?",
      "choices": [18, 19, 20, 21],
      "answer": 19
    },
    {
      "question": "What is 7 * 6?",
      "choices": [40, 41, 42, 43],
      "answer": 42
    },
    {
      "question": "What is 20 - 4?",
      "choices": [14, 15, 16, 17],
      "answer": 16
    },
    {
      "question": "What is 25 / 5?",
      "choices": [4, 5, 6, 7],
      "answer": 5
    },
    {
      "question": "What is 3 + 14?",
      "choices": [16, 17, 18, 19],
      "answer": 17
    },
    {
      "question": "What is 6 * 7?",
      "choices": [40, 41, 42, 43],
      "answer": 42
    }
  ]

let score = 0;
let currentIndex = 0;

// to call this code again and again
function showQuestions(index){
    questions.innerText = data[index].question
    inputAnswer.value = ''
}

// quiz will start after clicking on the start button
Start.addEventListener('click',()=>{
    Start.style.display="none"
    quizContainer.style.display = 'block';     
    showQuestions(currentIndex) 
})

next.addEventListener('click',()=>{
    const ans = Number(inputAnswer.value)
    if(!ans){
        alert("Please enter the answer")
        return
    }
    if(ans === data[currentIndex].answer){
        score++;
    }
    currentIndex++
    if(currentIndex < data.length){
        showQuestions(currentIndex)
    } else{
        quizContainer.style.display = 'none';
        result.innerText = `You Score ${score} out of ${data.length}`
    }

})


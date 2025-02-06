const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Burundi", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: true },
            { text: "Indian Desert", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Antarctica", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which is the tallest animal in the world?",
        answer: [
            { text: "Giraffe", correct: true },
            { text: "Elephant", correct: false },
            { text: "Horse", correct: false },
            { text: "Zebra", correct: false },
        ]
    },
    {
        question: "Which is the largest country in the world?",
        answer: [
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "United States", correct: false },
            { text: "Russia", correct: true },
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answer: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false },
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answer: [
            { text: "Amazon", correct: true },
            { text: "Nile", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false },
        ]
    },
    {
        question: "Which is the deepest lake in the world?",
        answer: [
            { text: "Lake Baikal", correct: true },
            { text: "Lake Superior", correct: false },
            { text: "Lake Victoria", correct: false },
            { text: "Lake Tanganyika", correct: false },
        ]
    },
    {
        question: "Which is the longest mountain range in the world?",
        answer: [
            { text: "Himalayas", correct: false },
            { text: "Andes", correct: true },
            { text: "Rockies", correct: false },
            { text: "Alps", correct: false },
        ]
    },
    {
        question: "Which is the largest forest in the world?",
        answer: [
            { text: "Amazon Rainforest", correct: true },
            { text: "Congo Rainforest", correct: false },
            { text: "Black Forest", correct: false },
            { text: "Taiga", correct: false },
        ]
    },
    {
        question: "Which is the tallest building in the world?",
        answer: [
            { text: "Empire State Building", correct: false },
            { text: "Burj Khalifa", correct: true },
            { text: "Shanghai Tower", correct: false },
            { text: "Petronas Towers", correct: false },
        ]
    },
    {
        question: "Which is the longest river in Asia?",
        answer: [
            { text: "Yangtze", correct: true },
            { text: "Mekong", correct: false },
            { text: "Indus", correct: false },
            { text: "Ganges", correct: false },
        ]
    },
    {
        question: "Which is the hottest desert in the world?",
        answer: [
            { text: "Atacama", correct: false },
            { text: "Sahara", correct: false },
            { text: "Karakum", correct: true },
            { text: "Kalahari", correct: false },
        ]
    },
    {
        question: "Which is the largest city in the world by population?",
        answer: [
            { text: "Shanghai", correct: false },
            { text: "New York", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Delhi", correct: false },
        ]
    },
    {
        question: "Which country has the most natural lakes?",
        answer: [
            { text: "Canada", correct: true },
            { text: "United States", correct: false },
            { text: "Brazil", correct: false },
            { text: "Russia", correct: false },
        ]
    },
    {
        question: "Which is the smallest planet in our solar system?",
        answer: [
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Pluto", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: [
            { text: "South Korea", correct: false },
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Vietnam", correct: false },
        ]
    },
    {
        question: "Which is the tallest waterfall in the world?",
        answer: [
            { text: "Niagara Falls", correct: false },
            { text: "Angel Falls", correct: true },
            { text: "Victoria Falls", correct: false },
            { text: "Iguaçu Falls", correct: false },
        ]
    },
    {
        question: "Which country has the largest population in Africa?",
        answer: [
            { text: "Nigeria", correct: true },
            { text: "Egypt", correct: false },
            { text: "South Africa", correct: false },
            { text: "Ethiopia", correct: false },
        ]
    },
    {
        question: "Which is the largest island in the world?",
        answer: [
            { text: "Greenland", correct: true },
            { text: "Australia", correct: false },
            { text: "Borneo", correct: false },
            { text: "New Guinea", correct: false },
        ]
    },
    {
        question: "Which is the longest bridge in the world?",
        answer: [
            { text: "Danyang–Kunshan Grand Bridge", correct: true },
            { text: "Golden Gate Bridge", correct: false },
            { text: "London Bridge", correct: false },
            { text: "Akashi Kaikyō Bridge", correct: false },
        ]
    },
    {
        question: "Which is the largest volcano in the world?",
        answer: [
            { text: "Mount Fuji", correct: false },
            { text: "Mount Etna", correct: false },
            { text: "Mauna Loa", correct: true },
            { text: "Mount Vesuvius", correct: false },
        ]
    },
    {
        question: "Which is the largest bird in the world?",
        answer: [
            { text: "Penguin", correct: false },
            { text: "Ostrich", correct: true },
            { text: "Eagle", correct: false },
            { text: "Albatross", correct: false },
        ]
    },
    {
        question: "Which is the largest country by land area in Africa?",
        answer: [
            { text: "Algeria", correct: true },
            { text: "Sudan", correct: false },
            { text: "Democratic Republic of the Congo", correct: false },
            { text: "Libya", correct: false },
        ]
    },
    {
        question: "Which country has the most time zones?",
        answer: [
            { text: "Russia", correct: true },
            { text: "United States", correct: false },
            { text: "China", correct: false },
            { text: "Australia", correct: false },
        ]
    },
    {
        question: "Which is the longest coastline in the world?",
        answer: [
            { text: "Australia", correct: true },
            { text: "United States", correct: false },
            { text: "Canada", correct: false },
            { text: "Russia", correct: false },
        ]
    },
    {
        question: "Which is the largest island country in the world?",
        answer: [
            { text: "Indonesia", correct: true },
            { text: "Philippines", correct: false },
            { text: "Japan", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "Which country has the highest GDP?",
        answer: [
            { text: "China", correct: false },
            { text: "United States", correct: true },
            { text: "India", correct: false },
            { text: "Germany", correct: false },
        ]
    },
    {
        question: "Which is the largest waterfall by width?",
        answer: [
            { text: "Iguaçu Falls", correct: true },
            { text: "Niagara Falls", correct: false },
            { text: "Victoria Falls", correct: false },
            { text: "Angel Falls", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in terms of land area?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Antarctica", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");    
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

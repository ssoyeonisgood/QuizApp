const quizData = [
    {
        question: 'What is it that goes up, but never comes down??',
        a: 'Age',
        b: 'Water',
        c: 'Fire',
        d: 'Air',
        correct: 'a'
    },{
        question: 'What is always coming, but never arrives?',
        a: 'Love',
        b: 'Tomorrow',
        c: 'Friends',
        d: 'Promise',
        correct: 'b'
    },{
        question: 'A farmer has 17 sheep and all but nine die. How many are left??',
        a: '7',
        b: '8',
        c: '9',
        d: '17',
        correct: 'c'
    },{
        question: ' Before Mt. Everest was discovered, what was the highest mountain in the world?',
        a: 'Kangchenjunga',
        b: 'Lhotse',
        c: 'Mt. Everest',
        d: 'Makalu',
        correct: 'c'
    },{
        question: 'Give me food, and I will live; give me water, and I will die. What am I?',
        a: 'Wind',
        b: 'Human',
        c: 'Light',
        d: 'Fire',
        correct: 'd'
    }
]

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');
const quiz = document.getElementById("quiz");

let currntQuiz = 0;
let score = 0;

loadQuize();

function loadQuize() {
    deselectAnswers();
   
    const currentQuizData = quizData[currntQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a; 
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

/*addEventListener()는 document의 특정요소(Id,class,tag 등등..) 
event(ex - click하면 함수를 실행하라, 마우스를 올리면 함수를 실행하라 등등.. )
를 등록할 때 사용합니다.*/
submitButton.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currntQuiz].correct) {
            score++;
        }
        currntQuiz++;
        if(currntQuiz < quizData.length) {
            loadQuize();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});
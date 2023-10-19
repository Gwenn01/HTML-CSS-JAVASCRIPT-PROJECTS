const quizData = [
    {
        question: "Which programming language is often used for developing Android applications?",
        a: 'Python',
        b: 'JavaScript',
        c: 'Java',
        d: ' C#',
        answer: 'c'
    },
    {
        question: 'What does the acronym "API" stand for in programming?',
        a: 'Application Programming Interface',
        b: 'Advanced Programming Instruction',
        c: 'Automated Program Interface',
        d: 'Application Process Integration',
        answer: 'a'
    },
    {
        question: 'Which data structure follows the Last-In-First-Out (LIFO) principle?',
        a: 'Queue',
        b: 'Linked List',
        c: 'Stack',
        d: 'Array',
        answer: 'c'
    },
    {
        question: 'In object-oriented programming, what is the process of creating an instance of a class called?',
        a: 'Declaration',
        b: 'Instantiation',
        c: 'Initialization',
        d: 'Inheritance',
        answer: 'b'
    },
    {
        question: 'Which of the following is a dynamically-typed programming language?',
        a: 'C++',
        b: 'Java',
        c: 'Python',
        d: 'Swift',
        answer: 'c'
    },
]
let container1 = document.querySelector('.container');
let container2 = document.querySelector('.container2');
let question = document.getElementById('question');
let text_ans1 = document.getElementById('text_a');
let text_ans2 = document.getElementById('text_b');
let text_ans3 = document.getElementById('text_c');
let text_ans4 = document.getElementById('text_d');
let btnSubmit = document.getElementById('submit');
let btnRetake = document.getElementById('Retake_quiz');
let index = 0;
let score = 0;
// for the socre count
container2.style.display = 'none';

showLoad();
function showLoad(){
    question.innerText = quizData[index].question;
    text_ans1.innerText = quizData[index].a;
    text_ans2.innerText = quizData[index].b;
    text_ans3.innerText = quizData[index].c;
    text_ans4.innerText = quizData[index].d;
}
function checkUserAnswer(){
    let answerFromUser = undefined;
    let userAnswers = document.querySelectorAll('.answer');
    userAnswers.forEach((answer) => {
        if (answer.checked){
            answerFromUser = answer.getAttribute('answer');
        }
        answer.checked = false;
    });
    if (answerFromUser == undefined){
        return false;
    }
    if (answerFromUser == quizData[index].answer){
        score += 1;
        return true;
    }else {
        return true;
    }

}
btnSubmit.addEventListener('click', () => {
    if (checkUserAnswer() && index < quizData.length){
        index += 1;
        if (index != quizData.length){
            showLoad();
        }else{
            countYourScore();
        }
    }
});
// for the count socre function
function countYourScore(){
    container1.style.display = 'none';
    container2.style.display = 'block';
    container2.style.display = 'flex';
    const scoreCheck = score;
    const scoreWrong = quizData.length - score;
    let check = document.getElementById('text_check');
    let wrong = document.getElementById('text_wrong');
    check.innerText = scoreCheck;
    wrong.innerText = scoreWrong;
};
// for retake the question
btnRetake.addEventListener('click', () => {
    index = 0;
    score = 0;
    container2.style.display = 'none';
    container1.style.display = 'block';
    container1.style.display = 'flex';
    showLoad();
});


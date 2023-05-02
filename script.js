let timeLEft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector("number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".scorecontainer");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "1",
    question: "What is the correct JavaScript syntax to change the content of the HTML element below: <p id='demo'>This is a demonstration.</p>",
    options: ["document.getElementByName('p').innerHTML = 'Hello World!'", "#ddemo.innerHTML = 'Hello World!'", "document.getElement('p').innerHTML = 'Hello World!'", "document.getElementById('demo').innerHTML = 'Hello World!'"],
    correct: "document.getElementById('demo').innerHTML = 'Hello World!'",
  },
  {
    id: "2",
    question: "Where is the correct place to insert a JavaScript?",
    options: ["The <head> section", "Both the <head> section and the <body> section", "The <body> section"],
    correct: "Both the <head> section and the <body> section",
  },
  {
    id: "3",
    question: "What is the correct syntax for referring to an external script called 'xxx.js'",
    options: ["<script src ='xxx.js'>", "<script href='xxx.jx'>", "<script name='xxx.js'>"],
    correct: "<script src ='xxx.jx'>",
  },
  {
    id: "4",
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["True", "False"],
    correct: "False",
  },
  {
    id: "5",
    question: "How do you write 'Hello World' in an alert box?",
    options: ["alert('Hello World');", "msgBox('Hello World');", "msg('Hello World');", "alertBox('Hello World');"],
    correct: "alert('Hello World')",
  },
  {
    id: "6",
    question: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "function = myFunction()", "Function:myFunction()"],
    correct: "function myFunction()",
  },
  {
    id: "7",
    question: "How do you call a function named 'myFunction'?",
    options: ["myFunction()", "call myFunction()", "call function myFunction()"],
    correct: "myFunction()",
  },
  {
    id: "8",
    question: "How to write an IF statement in JavaScript?",
    options: ["if i == 5 then", "if(i == 5)", "if i == 5", "if i = 5 then"],
    correct: "if(i == 5)",
  },
  {
    id: "9",
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i!=5)", "if i =! 5 then", "if (i<>5)", "if i <> 5"],
    correct: "if (i!=5)",
  },
];

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
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
  {
    id: "0",
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correct: "<script>",
  },
];

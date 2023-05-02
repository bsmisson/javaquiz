let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-questions");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
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
    options: ["/<script>/", "</js>", "<scripting>", "<javascript>",],
    correct: "<script>",
  },
  {
    id: "1",
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below: <p id='demo'>This is a demonstration.</p>",
    options: [
      "document.getElementByName('p').innerHTML = 'Hello World!'",
      "#ddemo.innerHTML = 'Hello World!'",
      "document.getElement('p').innerHTML = 'Hello World!'",
      "document.getElementById('demo').innerHTML = 'Hello World!'",
    ],
    correct: "document.getElementById('demo').innerHTML = 'Hello World!'",
  },
  {
    id: "2",
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <head> section",
      "Both the <head> section and the <body> section",
      "The <body> section",
    ],
    correct: "Both the <head> section and the <body> section",
  },
  {
    id: "3",
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'",
    options: [
      "<script src ='xxx.js'>",
      "<script href='xxx.jx'>",
      "<script name='xxx.js'>",
    ],
    correct: "<script src ='xxx.jx'>",
  },
  {
    id: "4",
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["True", "False", "IDK", "N/A"],
    correct: "False",
  },
  {
    id: "5",
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World');",
      "msgBox('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');",
    ],
    correct: "alert('Hello World');",
  },
  {
    id: "6",
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function = myFunction()",
      "Function:myFunction()",
    ],
    correct: "function myFunction()",
  },
  {
    id: "7",
    question: "How do you call a function named 'myFunction'?",
    options: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
    ],
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
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i!=5)", "if i =! 5 then", "if (i<>5)", "if i <> 5"],
    correct: "if (i!=5)",
  },
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Your score is" + scoreCount + "out of" + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Questions";
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if ((count = 0)) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);

  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Questions";

    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    div.innerHTML += `<button class ="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class ="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class ="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class ="option-div" onclick="checker(this)">${i.options[3]}</button>`;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll("option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if ((element.innerText = quizArray[questionCount].correct)) {
        element.classList.add("correct");
      }
    });
  }
  clearInterval(countdown);
  options.forEach((element) => {
    element.diabled = true;
  });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

console.log("started");
const questionsDB = [
  {
    question: "Who was Denmark first female prime minister",
    a: "Pia Olsen Dyhr",
    b: "Sofie Carsten Nielsen",
    c: "Helle Thorning-Schmidt",
    correct: "c",
  },
  {
    question: "Whats the sea name between Jutland & Fyn",
    a: "Great Belt",
    b: "øresund",
    c: "Little Belt",
    correct: "c",
  },
  {
    question: "Is it usually free to join a union?",
    a: "No",
    b: "Yes",
    correct: "a",
  },
  {
    question: "Is tuition free at public colleges?",
    a: "No",
    b: "Yes",
    correct: "b",
  },
];
let i = 0;
let score = 0;

let answers = document.querySelectorAll('input[name="answer"]');

function questionaire() {
  let q = document.getElementById("qTitle");
  q.innerHTML = questionsDB[i].question;
  let ans1 = document.getElementById("aa");
  let ans2 = document.getElementById("bb");
  let ans3 = document.getElementById("cc");

  ans1.innerHTML = questionsDB[i].a;
  ans2.innerHTML = questionsDB[i].b;
  ans3.innerHTML = questionsDB[i].c;
}

questionaire();
let btn = document.getElementById("submitButton");
btn.addEventListener("click", nextQuestion);

function nextQuestion() {
  console.log("button clicked");
  let ansChoosen = checkAnswer();
  console.log(ansChoosen);

  if (ansChoosen === questionsDB[i].correct) {
    score++;
    console.log("score", score);
  }
  i++;
  if (i < questionsDB.length) {
    questionaire();
  } else {
    alert("Quiz finish");
  }
}

function checkAnswer() {
  let choosenAns = undefined;

  answers.forEach((answer) => {
    if (answer.checked) {
      choosenAns = answer.id;
    }
  });
  console.log(choosenAns);
  return choosenAns;
}

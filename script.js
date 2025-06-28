
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const quizData = [
  {
    question: "What is battery swapping?",
    answers: ["A way to charge wirelessly", "Replacing a battery with a charged one", "Changing EV tires"],
    correct: 1
  },
  {
    question: "How long does swapping take?",
    answers: ["30 minutes", "Under 5 minutes", "Over 1 hour"],
    correct: 1
  }
];

let currentQuestion = 0;

function startQuiz() {
  currentQuestion = 0;
  document.getElementById("quiz-box").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const answersBox = document.getElementById("answers");
  answersBox.innerHTML = "";

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.innerText = ans;
    btn.onclick = () => handleAnswer(idx);
    answersBox.appendChild(btn);
  });
}

function handleAnswer(selected) {
  const correct = quizData[currentQuestion].correct;
  if (selected === correct) {
    alert("✅ Correct!");
  } else {
    alert("❌ Incorrect.");
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = "<p>🎉 Quiz Completed!</p>";
  }
}

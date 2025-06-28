
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const quizData = [
  {
    question: "What is battery swapping?",
    answers: [
      "A method of charging an EV wirelessly",
      "Replacing a depleted EV battery with a charged one",
      "Recycling old EV batteries"
    ],
    correct: 1
  },
  {
    question: "How long does battery swapping usually take?",
    answers: ["30 minutes", "15 minutes", "Under 5 minutes"],
    correct: 2
  },
  {
    question: "Which is NOT a benefit of battery swapping?",
    answers: ["Longer wait times", "Fast refuel", "Easy fleet management"],
    correct: 0
  },
  {
    question: "Where does battery swapping typically happen?",
    answers: ["Gas stations", "Swap stations", "Home garages"],
    correct: 1
  },
  {
    question: "What powers an electric vehicle?",
    answers: ["Petrol", "Diesel", "Battery"],
    correct: 2
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
    document.getElementById("quiz-box").innerHTML = "<p>🎉 You've completed the quiz!</p>";
  }
}

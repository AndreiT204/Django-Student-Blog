let questions = [
  {
    question: "Do you enjoy listening to music?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "That's awesome! Music is life.",
    incorrectResponse: "That's okay, everyone has different tastes.",
  },
  {
    question: "Have you ever traveled outside your country?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Traveling opens up the world, doesn't it?",
    incorrectResponse: "No worries, hopefully one day!",
  },
  {
    question: "Do you like playing video games?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Nice! Video games are a great way to relax and have fun.",
    incorrectResponse: "That's alright, they're not for everyone.",
  },
  {
    question: "Have you ever watched a movie more than five times?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Haha, true fans know every line!",
    incorrectResponse: "You must like variety then!",
  },
  {
    question: "Do you enjoy working on creative projects?",
    options: {
      a: "Yes",
      b: "No",
    },
    correctAnswer: "a",
    correctResponse: "Creativity is such a powerful skill!",
    incorrectResponse: "That's totally fine, we all shine in different ways.",
  },
];

let currentQuestionIndex = 0;

let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];

  let optionsHTML = Object.keys(currentQuestion.options)
    .map((key) => `${key}. ${currentQuestion.options[key]}`)
    .join(" ");

  let botResponse = document.createElement("div");
  botResponse.classList.add("message", "bot-message");
  botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;

  chatContainer.appendChild(botResponse);
  scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let userResponse = userInput.value.toLowerCase().trim();

  let userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");
  userMessage.innerHTML = `<strong>User:</strong> ${userResponse}`;
  chatContainer.appendChild(userMessage);

  let currentQuestion = questions[currentQuestionIndex];

  let botResponse = document.createElement("div");
  botResponse.classList.add("message", "bot-message");
  botResponse.innerHTML = `<strong>Bot:</strong> `;

  if (userResponse === currentQuestion.correctAnswer) {
    botResponse.innerHTML += currentQuestion.correctResponse;
  } else if (userResponse === "a" || userResponse === "b") {
    botResponse.innerHTML += currentQuestion.incorrectResponse;
  } else {
    botResponse.innerHTML += "Please answer with 'a' or 'b'.";
    chatContainer.appendChild(botResponse);
    scrollChatContainerToBottom();
    return; // Don't move to the next question
  }

  chatContainer.appendChild(botResponse);
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  userInput.value = "";
  displayQuestion();
  scrollChatContainerToBottom();
});

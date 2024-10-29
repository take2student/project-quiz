const questions = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: [
      "Kangaroo",
      "Kiwi bird",
      "Koala",
      "Emu"
    ],
    answer: "Kiwi bird"
  },
  {
    question: "What is the capital city of New Zealand?",
    options: [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton"
    ],
    answer: "Wellington"
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: [
      "Maori",
      "Aborigines",
      "Inuit",
      "Sami"
    ],
    answer: "Maori"
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series"
    ],
    answer: "Lord of the Rings trilogy"
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley"
    ],
    answer: "Mount Cook (Aoraki)"
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: [
      "Auckland",
      "Wellington",
      "Dunedin",
      "Queenstown"
    ],
    answer: "Auckland"
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: [
      "Cricket",
      "Rugby Union",
      "Soccer",
      "Netball"
    ],
    answer: "Rugby Union"
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: [
      "Tasman Sea",
      "Coral Sea",
      "South China Sea",
      "Arafura Sea"
    ],
    answer: "Tasman Sea"
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: [
      "Haka",
      "Hongi",
      "Powhiri",
      "Waka"
    ],
    answer: "Hongi"
  },
  {
    question: "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: [
      "Rotorua",
      "Christchurch",
      "Hamilton",
      "Napier"
    ],
    answer: "Rotorua"
  }
];

// Add your code underneath this comment.
const questionElement = document.getElementById('question');
const answer1Button = document.getElementById('answer1');
const answer2Button = document.getElementById('answer2');
const answer3Button = document.getElementById('answer3');
const answer4Button = document.getElementById('answer4');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

let questionCorrectAnswer;

// Set question and answer button texts
// - question: the current question
function goToQuestion(question) {
  const questionText = question.question;
  const questionAnswers = question.options;
  questionCorrectAnswer = question.answer;

  questionElement.innerText = questionText;
  answer1Button.innerText = questionAnswers[0];
  answer2Button.innerText = questionAnswers[1];
  answer3Button.innerText = questionAnswers[2];
  answer4Button.innerText = questionAnswers[3];
}

let currentQuestionIndex = 0;
goToQuestion(questions[currentQuestionIndex]);

// Highlight button when clicked
// - button: the button that was clicked
function highlightButton(button) {
  // Clear all button backgrounds
  answer1Button.style.backgroundColor = '';
  answer2Button.style.backgroundColor = '';
  answer3Button.style.backgroundColor = '';
  answer4Button.style.backgroundColor = '';

  // Set clicked button's background to lightblue
  if(button !== null) {
    button.style.backgroundColor = 'lightblue';
  }
}

let selectedAnswer = null;

// Add click event listeners to all buttons
answer1Button.addEventListener('click', function() {
  selectedAnswer = 1;
  highlightButton(answer1Button);
});

answer2Button.addEventListener('click', function() {
  selectedAnswer = 2;
  highlightButton(answer2Button);
});

answer3Button.addEventListener('click', function() {
  selectedAnswer = 3;
  highlightButton(answer3Button);
});

answer4Button.addEventListener('click', function() {
  selectedAnswer = 4;
  highlightButton(answer4Button);
});

let goToNextQuestion = false;
let currentScore = 0;

function submitAnswer() {
  if(selectedAnswer === null) {
    alert("You must select an answer");
    return;
  } 
  
  // Display feedback: selected answer should be highlighted red
  if(selectedAnswer == 1) {
    answer1Button.style.backgroundColor = 'red';
  } else if(selectedAnswer == 2) {
    answer2Button.style.backgroundColor = 'red';
  } else if(selectedAnswer == 3) {
    answer3Button.style.backgroundColor = 'red';
  } else if(selectedAnswer == 4) {
    answer4Button.style.backgroundColor = 'red';
  } 

  // Display feedback: correct answer should be highlighted green
  const checkAndHighlightAnswer = (answerButton, index) => {
    if(answerButton.innerText == questionCorrectAnswer) {
      answerButton.style.backgroundColor = 'green';
    
      // Check if user selected correct answer
      if(selectedAnswer == index + 1) {
        currentScore++; // Increment the score
      }
    }
  };

  [answer1Button, answer2Button, answer3Button, answer4Button]
    .forEach(checkAndHighlightAnswer);

  // Display feedback: show current score
  scoreElement.innerText = currentScore;

  // Display feedback: button caption changes to 'next question'
  submitButton.innerText = 'Next Question';
  
  // Remember to go to next question when the button is clicked again
  goToNextQuestion = true;
}

function nextQuestion() {
  // Clear interface
  submitButton.innerText = 'Submit Answer';
  highlightButton(null);

  // Go to next question
  currentQuestionIndex++;
  goToQuestion(questions[currentQuestionIndex]);

  // Remember to submit answer when button is clicked again
  goToNextQuestion = false;
}

submitButton.addEventListener('click', function() {
  if(goToNextQuestion === false) {
    submitAnswer();
  } else {
    nextQuestion();
  }
});

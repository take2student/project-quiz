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

// Set question and answer button texts
const firstQuestion = questions[0];
const firstQuestionText = firstQuestion.question;
const firstQuestionAnswers = firstQuestion.options;
const firstQuestionCorrectAnswer = firstQuestion.answer;

questionElement.innerText = firstQuestionText;
answer1Button.innerText = firstQuestionAnswers[0];
answer2Button.innerText = firstQuestionAnswers[1];
answer3Button.innerText = firstQuestionAnswers[2];
answer4Button.innerText = firstQuestionAnswers[3];

// Highlight button when clicked
// - button: the button that was clicked
function highlightButton(button) {
  // Clear all button backgrounds
  answer1Button.style.backgroundColor = '';
  answer2Button.style.backgroundColor = '';
  answer3Button.style.backgroundColor = '';
  answer4Button.style.backgroundColor = '';

  // Set clicked button's background to lightblue
  button.style.backgroundColor = 'lightblue';
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

submitButton.addEventListener('click', function() {
  if(selectedAnswer === null) {
    alert("You must select an answer");
  } else {
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
    if(answer1Button.innerText == firstQuestionCorrectAnswer) {
      answer1Button.style.backgroundColor = 'green';
    
    } else if(answer2Button.innerText == firstQuestionCorrectAnswer) {
      answer2Button.style.backgroundColor = 'green';
    
    } else if(answer3Button.innerText == firstQuestionCorrectAnswer) {
      answer3Button.style.backgroundColor = 'green';

    } else if(answer4Button.innerText == firstQuestionCorrectAnswer) {
      answer4Button.style.backgroundColor = 'green';
    }

    // Display feedback: button caption changes to 'next question'
    submitButton.innerText = 'Next Question';
  }
});
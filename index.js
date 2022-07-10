var readlineSync = require('readline-sync');
var ansiColors = require("ansi-colors");

var userName = readlineSync.question('May I have your name?');
// console.log(userName);

function welcome(){
  var welcomeMessage = ansiColors.greenBright("\n Welcome! " + userName + ' to Do YOU kNOW Sourabh?');
console.log(welcomeMessage);
}

var score = 0;

function playTheGame(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log(ansiColors.green(' \n Yay! your answer is correct.'));
    score++;
  }
  else{
    console.log(ansiColors.red(" \n Oops! your answer is wrong."));
    score = score;
  }
    console.log(' \n Your score is: ' + score);
    console.log('------------------')
}

var questions = [{
  question: ' \n Is sourabh is the only child ?',
  answer: 'no'
  },
  {
  question: 'At which school did sourabh completed his 10th standard?',
  answer: 'central academy'
  },
  {
  question: 'In which college sourabh is studying?',
  answer: 'poornima college of engineering'
  },
  {
  question: 'What is the thing sourabh is crazy about?',
  answer: 'bikes'
  },
  {
  question: 'Which sport did  sourabh like the most?',
  answer: 'snooker'
  }]

function game(){
  for(var i = 0;i<questions.length;i++){
  var currentquestion = questions[i];
  playTheGame(currentquestion.question, currentquestion.answer);
}
}

function showScores(){
  console.log(ansiColors.bgYellow('Yay! your final score is:') +  ansiColors.cyan(score));
}

welcome();
game();
showScores();
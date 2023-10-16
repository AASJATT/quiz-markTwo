var readlineSync = require('readline-sync');
var score=0;

var userName = readlineSync.question("Your good name? ");

console.log("Welcome! ",userName,"to GENERAL AWARENESS quiz!");

function play(question,answer){
 var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Right!")
    score=score+1;
    
  }else{
    console.log("Wrong! The correct answer is ", answer);
    score=score-1;
     }
  
  console.log("score: " ,score);
}


var questionOne ={
  question: "Which organ is responsible for removing waste? ",
  answer: "kidney"
}
var questionTwo= {
  question:"What is the SI unit of temperature? ",
  answer: "kelvin"
}
var questionThree={
  question:"Which acid present in apple? ",
  answer:"malic acid"
}
var questionFour={
  question:"Which gas is present in aeroplane tyres? ",
  answer:"nitrogen"
}
var questionFive={
  question:"Which acid is present in ant sting? ",
  answer:"formic acid"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive]
for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}

console.log("yay! your final score: ",score)
// 
// 
//  GLOBAL ON LOAD
// 
// 

var min = 1;
var max = 100;

var answer = Math.floor(Math.random() * max + min);

// function setminmax(){
  // currentMin = document.querySelector('#currentmin');
  // currentMin.innerText = min;
  // currentMax = document.querySelector('#currentmax');
  // currentMax.innerText = max;
// }

var currentMin = document.querySelector('#currentmin');
currentMin.innerText = min;
var currentMax = document.querySelector('#currentmax');
currentMax.innerText = max;

// 
// 
//  SECTION 1 STUFF
// 
// 

var onePlayer = document.querySelector('#oneplayer');
var twoPlayer = document.querySelector('#twoplayer');
var threePlayer = document.querySelector('#threeplayer');
var fourPlayer = document.querySelector('#fourplayer');


onePlayer.addEventListener('click', function() {
  bttnGuess.disabled = false;
  bttnReset.disabled = true;
  player1Controlls.style.visibility = "hidden";
  player2Controlls.style.visibility = "hidden";
  player3Controlls.style.visibility = "hidden";
  player4Controlls.style.visibility = "hidden";
  numberPlayers = 1;
  answer = Math.floor(Math.random() * max + min);
});

twoPlayer.addEventListener('click', function() {
  bttnReset.disabled = true;
  bttnGuess.disabled = true;
  player1Controlls.style.visibility = "visible";
  player1Submit.disabled = false;
  player2Controlls.style.visibility = "visible";
  player3Controlls.style.visibility = "hidden";
  player4Controlls.style.visibility = "hidden";
  numberPlayers = 2;
  answer = Math.floor(Math.random() * max + min);
});

threePlayer.addEventListener('click', function() {
  bttnReset.disabled = true;
  bttnGuess.disabled = true;
  player1Controlls.style.visibility = "visible";
  player1Submit.disabled = false;
  player2Controlls.style.visibility = "visible";
  player3Controlls.style.visibility = "visible";
  player4Controlls.style.visibility = "hidden";
  numberPlayers = 3;
  answer = Math.floor(Math.random() * max + min);
});

fourPlayer.addEventListener('click', function() {
  bttnReset.disabled = true;
  bttnGuess.disabled = true;
  player1Controlls.style.visibility = "visible";
  player1Submit.disabled = false;
  player2Controlls.style.visibility = "visible";
  player3Controlls.style.visibility = "visible";
  player4Controlls.style.visibility = "visible";
  numberPlayers = 4;
  answer = Math.floor(Math.random() * max + min);
});

var p1Score = document.querySelector('#p1score').innerText = 0;
var p2Score = document.querySelector('#p2score').innerText = 0;
var p3Score = document.querySelector('#p3score').innerText = 0;
var p4Score = document.querySelector('#p4score').innerText = 0;



// 
// 
// 
// SETCTION 2 STUFF
// 
// 
// 

var userGuess = document.querySelector('#userguess');

userGuess.placeholder = ('Guess a number between ' + min.toString() + ' and ' + max.toString() + '.');  

userGuess.addEventListener('input', function() {
    document.querySelector('.bttnclear').disabled = false;
    document.querySelector('.bttnreset').disabled = false;
});

var bttnGuess = document.querySelector('.bttnguess');

bttnGuess.addEventListener('click', function() {
  guessIntro.style.visibility = 'visible';
  lastGuess.style.visibility = 'visible';
  result.style.visibility = 'visible';
  var number = userGuess.value;
  submit = parseInt(number);
  document.querySelector('#lastguess').innerText = submit;
  if (submit == answer) { 
    result.innerText = 'BOOM! Difficulty increased!';
    max = max + 10;
    currentMax.innerText = max;
    min = min - 10;
    currentMin.innerText = min;
  } else if (submit < min) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit > max) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit < answer) {
    result.innerText = 'That is too low.';
  } else if (submit > answer) {
    result.innerText = 'That is too high.';
  } else if (isNaN(submit) === true) {
    result.innerText = 'That is not a number!'; 
  }
  userGuess.focus();
  userGuess.select();
});

var bttnClear = document.querySelector('.bttnclear');

bttnClear.addEventListener('click', function() {
  userGuess.value = '';
  userGuess.placeholder = ('Try again.');
  bttnClear.disabled = true;
})

var guessIntro = document.querySelector('#guessintro');
var lastGuess = document.querySelector('#lastguess');
var result = document.querySelector('#result');

var bttnReset = document.querySelector('.bttnreset');

bttnReset.addEventListener('click', function() {
  userGuess.value = '';
  userGuess.placeholder = ('Guess a number between ' + min.toString() + ' and ' + max.toString() + '.');
  document.querySelector('.bttnclear').disabled = true;
  document.querySelector('.bttnreset').disabled = true;
  min = 1;
  currentMin.innerText = min;
  max = 100;
  currentMax.innerText = max;
  guessIntro.style.visibility = 'hidden';
  lastGuess.style.visibility = 'hidden';
  result.style.visibility = 'hidden';
})

var phase4 = document.querySelector('#phase4')

phase4.addEventListener('click', function() {
  // location.reload();
  document.querySelector('#section1').style.visibility = 'visible';
  document.querySelector('#section3').style.backgroundColor ='#D0D2D3';
  document.querySelector('#section4').style.visibility = 'visible';
  document.querySelector('#phase4').style.visibility = 'hidden';
  userGuess.value = '';
  document.querySelector('.bttnclear').disabled = true;
  document.querySelector('.bttnreset').disabled = true;
  document.querySelector('.bttnguess').disabled = true;
  min = 1;
  currentMin.innerText = min;
  max = 100;
  currentMax.innerText = max;
  guessIntro.style.visibility = 'hidden';
  lastGuess.style.visibility = 'hidden';
  result.style.visibility = 'hidden';
  });

// 
// 
// SECTION 3 STUFF
// 
// 

var minPlus10 = document.querySelector('#minplus10');
var minMinus10 = document.querySelector('#minminus10');
var maxPlus10 = document.querySelector('#maxplus10');
var maxMinus10 = document.querySelector('#maxminus10');

minPlus10.addEventListener('click', function () {
  userGuess.value = '';
  min = min + 10;
  currentMin.innerText = min;
  guessIntro.style.visibility = 'hidden';
  lastGuess.style.visibility = 'hidden';
  result.style.visibility = 'hidden';
  userGuess.placeholder = ('Guess a number between ' + min.toString() + ' and ' + max.toString() + '.');
  answer = Math.floor(Math.random() * max + min);
});

minMinus10.addEventListener('click', function () {
  userGuess.value = '';
  min = min - 10;
  currentMin.innerText = min;
  guessIntro.style.visibility = 'hidden';
  lastGuess.style.visibility = 'hidden';
  result.style.visibility = 'hidden';
  userGuess.placeholder = ('Guess a number between ' + min.toString() + ' and ' + max.toString() + '.');
  answer = Math.floor(Math.random() * max + min);
});

maxPlus10.addEventListener('click', function () {
  userGuess.value = '';
  max = max + 10;
  currentMax.innerText = max;
  guessIntro.style.visibility = 'hidden';
  lastGuess.style.visibility = 'hidden';
  result.style.visibility = 'hidden';
  userGuess.placeholder = ('Guess a number between ' + min.toString() + ' and ' + max.toString() + '.');
  answer = Math.floor(Math.random() * max + min);
});

maxMinus10.addEventListener('click', function () {
  userGuess.value = '';
  max = max - 10;
  currentMax.innerText = max;
  guessIntro.style.visibility = 'hidden';
  lastGuess.style.visibility = 'hidden';
  result.style.visibility = 'hidden';
  userGuess.placeholder = ('Guess a number between ' + min.toString() + ' and ' + max.toString() + '.');
  answer = Math.floor(Math.random() * max + min);
});

// 
// 
//  SECTION 4 STUFF
// 
// 

var player1Controlls = document.querySelector('#player1controlls');
var player2Controlls = document.querySelector('#player2controlls');
var player3Controlls = document.querySelector('#player3controlls');
var player4Controlls = document.querySelector('#player4controlls');

var player1Submit = document.querySelector('#player1submit');
var player2Submit = document.querySelector('#player2submit');
var player3Submit = document.querySelector('#player3submit');
var player4Submit = document.querySelector('#player4submit');

player1Submit.addEventListener('click', function() {
  player1Submit.disabled = true;
  player2Submit.disabled = false;
  guessIntro.style.visibility = 'visible';
  lastGuess.style.visibility = 'visible';
  result.style.visibility = 'visible';
  var number = document.querySelector('#userguess').value;
  submit = parseInt(number);
  document.querySelector('#lastguess').innerText = submit;
  if (submit == answer) { 
    result.innerText = 'BOOM! Difficulty increased!';
    p1Score = (p1Score + 1);
    document.querySelector('#p1score').innerText = p1Score;
    player1Submit.disabled = true;
    player2Submit.disabled = true;
    player3Submit.disabled = true;
    player4Submit.disabled = true;
    max = max + 10;
    currentMax.innerText = max;
    min = min - 10;
    currentMin.innerText = min;
  } else if (submit < min) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit > max) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit < answer) {
    result.innerText = 'That is too low.';
  } else if (submit > answer) {
    result.innerText = 'That is too high.';
  } else if (isNaN(submit) === true) {
    result.innerText = 'That is not a number!'; 
  }
  userGuess.focus();
  userGuess.select();
});

player2Submit.addEventListener('click', function() {
  if (numberPlayers == 2) {
  player1Submit.disabled = false;
  player2Submit.disabled = true;
  } else if (numberPlayers == 3 || 4) {
    player1Submit.disabled = true;
    player2Submit.disabled = true;
    player3Submit.disabled = false;
  }
  guessIntro.style.visibility = 'visible';
  lastGuess.style.visibility = 'visible';
  result.style.visibility = 'visible';
  var number = document.querySelector('#userguess').value;
  submit = parseInt(number);
  document.querySelector('#lastguess').innerText = submit;
  if (submit == answer) { 
    result.innerText = 'BOOM! Difficulty increased!';
    p2Score = (p2Score + 1);
    document.querySelector('#p2score').innerText = p2Score;
    player1Submit.disabled = true;
    player2Submit.disabled = true;
    player3Submit.disabled = true;
    player4Submit.disabled = true;
    max = max + 10;
    currentMax.innerText = max;
    min = min - 10;
    currentMin.innerText = min;
  } else if (submit < min) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit > max) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit < answer) {
    result.innerText = 'That is too low.';
  } else if (submit > answer) {
    result.innerText = 'That is too high.';
  } else if (isNaN(submit) === true) {
    result.innerText = 'That is not a number!'; 
  }
  userGuess.focus();
  userGuess.select();
});

player3Submit.addEventListener('click', function() {
  if (numberPlayers == 3) {
  player1Submit.disabled = false;
  player2Submit.disabled = true;
  player3Submit.disabled = true;
  } else if (numberPlayers == 4) {
    player1Submit.disabled = true;
    player2Submit.disabled = true;
    player3Submit.disabled = true;
    player4Submit.disabled = false;
  }
  guessIntro.style.visibility = 'visible';
  lastGuess.style.visibility = 'visible';
  result.style.visibility = 'visible';
  var number = document.querySelector('#userguess').value;
  submit = parseInt(number);
  document.querySelector('#lastguess').innerText = submit;
  if (submit == answer) { 
    result.innerText = 'BOOM! Difficulty increased!';
    p3Score = (p3Score + 1);
    document.querySelector('#p3score').innerText = p3Score;
    player1Submit.disabled = true;
    player2Submit.disabled = true;
    player3Submit.disabled = true;
    player4Submit.disabled = true;
    max = max + 10;
    currentMax.innerText = max;
    min = min - 10;
    currentMin.innerText = min;
  } else if (submit < min) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit > max) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit < answer) {
    result.innerText = 'That is too low.';
  } else if (submit > answer) {
    result.innerText = 'That is too high.';
  } else if (isNaN(submit) === true) {
    result.innerText = 'That is not a number!';
  }
  userGuess.focus();
  userGuess.select();
});

player4Submit.addEventListener('click', function() {
    player1Submit.disabled = false;
    player2Submit.disabled = true;
    player3Submit.disabled = true;
    player4Submit.disabled = true;
  guessIntro.style.visibility = 'visible';
  lastGuess.style.visibility = 'visible';
  result.style.visibility = 'visible';
  var number = document.querySelector('#userguess').value;
  submit = parseInt(number);
  document.querySelector('#lastguess').innerText = submit;
  if (submit == answer) { 
    result.innerText = 'BOOM! Difficulty increased!';
    p4Score = (p4Score + 1);
    document.querySelector('#p4score').innerText = p4Score;
    player1Submit.disabled = true;
    player2Submit.disabled = true;
    player3Submit.disabled = true;
    player4Submit.disabled = true;
    max = max + 10;
    currentMax.innerText = max;
    min = min - 10;
    currentMin.innerText = min;
  } else if (submit < min) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit > max) {
    result.innerText = 'That is outside the min/max.';
  } else if (submit < answer) {
    result.innerText = 'That is too low.';
  } else if (submit > answer) {
    result.innerText = 'That is too high.';
  } else if (isNaN(submit) === true) {
    result.innerText = 'That is not a number!';
  }
  userGuess.focus();
  userGuess.select();
});







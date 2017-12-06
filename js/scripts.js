var answer = Math.floor(Math.random() * 100 + 1); 


// var userGuess = document.querySelector('#userguess');
// var bttnGuess = document.querySelector('.bttnguess');
// var bttnClear = document.querySelector('.bttnclear');
// var guessIntro = document.querySelector('#guessintro');
// var lastGuess = document.querySelector('#lastguess');
// var result = document.querySelector('#result');
// var bttnReset = document.querySelector('.bttnreset');




var bttnGuess = document.querySelector('.bttnguess');

bttnGuess.addEventListener('click', function() {
  var number = document.querySelector('#userguess').value;
  document.querySelector('#lastguess').innerText = number;
  submit = parseInt(number);
  if (submit == answer) { 
    document.querySelector('#result').innerText = 'BOOM!';
  } else if (submit < answer) {
    document.querySelector('#result').innerText = 'That is too low.';
  } else if (submit > answer) {
    document.querySelector('#result').innerText = 'That is too high.';
  } else if (isNaN(submit) === true) {
    document.querySelector('#result').innerText = 'That is not a number!';
}
});

var bttnClear = document.querySelector('.bttnclear');

bttnClear.addEventListener('click', function() {
  document.querySelector('#userguess').value = null;
})

var bttnReset = document.querySelector('.bttnreset');

bttnReset.addEventListener('click', function() {
  location.reload();
})










 // document.querySelector('#userguess').focus();


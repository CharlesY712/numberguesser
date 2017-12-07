var min = 1
var max = 100

var answer = Math.floor(Math.random() * max + min);
document.querySelector('#currentmin').innerText = min;
document.querySelector('#currentmax').innerText = max;

var phase4 = document.querySelector('#phase4')

phase4.addEventListener('click', function() {
  document.querySelector('#section1').style.visibility = "visible";
  document.querySelector('#section3').style.backgroundColor ="#D0D2D3";
  document.querySelector('#section4').style.visibility = "visible";
  document.querySelector('#phase4').style.visibility = "hidden";
});

var playerbttn = document.querySelector('.playerbttn');

playerbttn.addEventListener('click', function() {
  answer = Math.floor(Math.random() * max + min);
  document.querySelector('#currentmin').innerText = min;
  document.querySelector('#currentmax').innerText = max;
});



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


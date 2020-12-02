"use strict";
// score
var score = 0;
var currentTask = 0;
// load task function
function showTask() {
	console.log("showTask() currentTask",currentTask, "score", score);
  scoreKeeper();
	if (currentTask === 0) {
		// display intro
		$(".main").load("pages/intro.html");
		currentTask = 1;
	} else if (currentTask === 1) {
		$(".main").load("pages/task1.html");
		currentTask = 2;
	} else if (currentTask === 2) {
		$(".main").load("pages/intro.html", function(){
      $("#introtask1").css({
  			"background-color": "#32CD32"
  		});
    });
		currentTask = 3;
	} else if (currentTask === 3) {
		$(".main").load("pages/task2.html");
    currentTask = 4;
	} else if (currentTask === 4) {
		$(".main").load("pages/intro.html", function(){
      $("#introtask1").css({
  			"background-color": "#32CD32"
  		});
      $("#introtask2").css({
  			"background-color": "#32CD32"
  		});
    });
		currentTask = 5;
	} else if (currentTask === 5) {
		$(".main").load("pages/task3.html");
    alert("Sign up here! \n You will not want to miss this once in a lifetime oppourtunity. \n We are offering this only to our 1000th cutomer,and thats you!! \n We couldnt be more excited for you to join our team :) \n sign up! sign up! sign up!");
    currentTask = 6;
  } else if (currentTask === 6) {
		$(".main").load("pages/intro.html", function(){
      $("#introtask1").css({
  			"background-color": "#32CD32"
  		});
      $("#introtask2").css({
  			"background-color": "#32CD32"
  		});
      $("#introtask3").css({
        "background-color": "#32CD32"
      });
    });
	}
}

showTask();

function scoreKeeper() {
  document.getElementById('score').innerHTML = score;
};


//send person to task 1,2,3
$(document).on("click", '.tasklink', function() {
	showTask();
});
//keep track of incorrect guesses
$(document).on("click", '.incorrect', function() {
  score = score - 50;
  scoreKeeper();
});
// keep track of correct answer and send person back to main page
$(document).on("click", '.correct', function() {
  	score = score + 100;
	showTask();
});

document.getElementById('timer').innerHTML = 000 + ":" + 30;
startTimer()

function startTimer() {
  if(currentTask % 2 == 1){
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}

  if(m<0){alert('You ran out of time!')}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  //console.log(m)
  setTimeout(startTimer, 1000);
}
else{
  document.getElementById('timer').innerHTML = 000 + ":" + 30;
}};

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "00"};
  return sec;
}

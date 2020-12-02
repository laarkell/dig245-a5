"use strict";
// score
var score = 0;
var currentTask = 0;
// load task function
function showTask() {
	console.log("showTask() currentTask",currentTask, "score", score);
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
    alert("Sign up here! You will not want to miss this once in a lifetime oppourtunity. We are offering this only to our 1000th cutomer,and thats you!! We couldnt be more excited for you to join our team :) sign up! sign up! sign up!");
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

document.getElementById('score').innerHTML = score
function scoreKeeper() {
  score = score + 0
}
setTimeout(scoreKeeper, 1000);

//send person to task 1,2,3
$(document).on("click", '.tasklink', function() {
	showTask();
});
//keep track of incorrect guesses
$(document).on("click", '.incorrect', function() {
  score = score - 50;
});
// keep track of correct answer and send person back to main page
$(document).on("click", '.correct', function() {
  	score = score + 100;
	showTask();
});

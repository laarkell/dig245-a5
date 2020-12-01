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
		$(".main").load("pages/intro.html");
		$("#introtask1").css({
			"background-color": "#32CD32"
		});
		currentTask = 3;
	} else if (currentTask === 3) {
		$(".main").load("pages/task2.html");
	} else if (currentTask === 4) {
		$(".main").load("pages/intro.html");
		$("#introtask2").css({
			"background-color": "#32CD32"
		});
		currentTask = 5;
	} else if (currentTask === 5) {
		$(".main").load("pages/task3.html");
	} else if (currentTask === 6) {
		$(".main").load("pages/intro.html");
		$("#introtask3").css({
			"background-color": "#32CD32"
		});
	}
}

showTask();

document.getElementById('score').innerHTML = score

//send person to task 1
$(document).on("click", '.tasklink', function() {
	showTask();
});

$(document).on("click", '.incorrect', function() {
  score = score - 50;
});
$(document).on("click", '.correct', function() {
  	score = score + 100;
	showTask();
});

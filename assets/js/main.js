"use strict";
// score
var score = 0;
var currentTask = 0;
var seconds = 0;
var maxSeconds = 15;
var timer;

//timer functions
function checkTime() {
	console.log("checkTime()",seconds)
	seconds --;
	$("#timer").html(seconds);
	if (seconds <=0 ){
		alert("You ran out of time!");
		clearInterval(timer);
			console.log("currentTask",currentTask)
		currentTask -=2;
			console.log("currentTask",currentTask)
		showTask();
	}
}
function restartTimer(){
	console.log("restartTimer()")
	if (timer != undefined) clearInterval(timer);
	seconds = maxSeconds;
	timer = setInterval(checkTime, 1000)
}
function stopTimer(){
	console.log("stopTimer()")
	seconds = 0;
		clearInterval(timer);
	$("#timer").html(seconds);
}

// load task function
function showTask() {
	console.log("showTask() currentTask", currentTask, "score", score);
	scoreKeeper();
	if (currentTask === 0) {
		// display intro
		$(".main").load("pages/intro.html");
		currentTask = 1;
	} else if (currentTask === 1) {
		restartTimer();
		$(".main").load("pages/task1.html");
		currentTask = 2;
	} else if (currentTask === 2) {
		stopTimer();
		$(".main").load("pages/intro.html", function() {
			$("#introtask1").css({
				"background-color": "#32CD32"
			});
		});
		currentTask = 3;
	} else if (currentTask === 3) {
		restartTimer();
		$(".main").load("pages/task2.html");
		currentTask = 4;
	} else if (currentTask === 4) {
		stopTimer();
		$(".main").load("pages/intro.html", function() {
			$("#introtask1").css({
				"background-color": "#32CD32"
			});
			$("#introtask2").css({
				"background-color": "#32CD32"
			});
		});
		currentTask = 5;
	} else if (currentTask === 5) {
		restartTimer();
		$(".main").load("pages/task3.html");
		currentTask = 6;
	} else if (currentTask === 6) {
		stopTimer();
		$(".main").load("pages/intro.html", function() {
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
		$(".done").load("pages/conclusion.html");
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

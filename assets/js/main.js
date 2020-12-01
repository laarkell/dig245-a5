"use strict";
// score
var score = 0;
var currentTask = 0;

// load task function
function showTask(){
	if (currentTask === 0){
		// display intro
		$(".main").load("pages/intro.html");
	}
	else if (currentTask === 1){
		$(".main").load("pages/task1.html");
	}
	else if (currentTask === 2){
		$(".main").load("pages/intro.html");
		$(".introtask1").css({
			"background-color":"#32CD32"});
	}
  else if (currentTask === 3){
		$(".main").load("pages/task2.html");
	}
  else if (currentTask === 4){
		$(".main").load("pages/intro.html");
		$(".introtask2").css({
			"background-color":"#32CD32"});
	}
  else if (currentTask === 5){
		$(".main").load("pages/task3.html");
	}
  else if (currentTask === 6){
		$(".main").load("pages/intro.html");
		$(".introtask3").css({
			"background-color":"#32CD32"});
	}
}

showTask();

//send person to task 1
$('#task1').on("click", function(){
  currentTask = 1;
  showtask();
});
$('#task2').on("click", function(){
  currentTask = 3;
  showtask();
});
$('#task3').on("click", function(){
  currentTask = 5;
  showtask();
});

$('.incorrect').on("click", function(){
  score = score - 50;
  showtask();
});

$('.task1correct').on("click", function(){
  // reset timerr
  score = score + 100;
  currentTask = 2;
  showtask();
});
$('.task2correct').on("click", function(){
  // reset timerr
  score = score + 100;
  currentTask = 4;
  showtask();
});
$('.task3correct').on("click", function(){
  // reset timerr
  score = score + 100;
  currentTask = 6;
  showtask();
});

$(document).on("click", function(){
  console.log("click happened");
});

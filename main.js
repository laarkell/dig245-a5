// score
var score = 0;
var currentTask = 0;

// to load main page by defualt:
$("#main").load("pages/main.html");

function showTask(){
  if(currentTask == 0){
  // display intro
  $("#main").html("pages/main.html");
}
  else if (currentTask == 1){
  $("#task1").html("pages/task1.html");
}
  else if (currentTask == 2){
  $("#main").html("pages/intro.html");
  $(".introtask1").css({
    "background-color": "green"
  });
}
}

// instead of href give the photo a class; task1Correct
$('#task1').on("click", function(){
  // reset timerr
  currentTask = 1;
  showtask();
});

$('.task1correct').on("click", function(){
  // reset timerr
  score = 100;
  currentTask = 2;
  showtask();
});

$(document).on("click", function(){
  console.log("click happened");
})

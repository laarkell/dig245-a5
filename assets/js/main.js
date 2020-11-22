// score
var score = 0;

var currentTask = 0;

function showTask(){

  if(currentTask == 0){
  // display intro
  $(".main").html("templates/intro.html");
}

  else if (currentTask == 1){
  $(".main").html("templates/task1.html");
}

  else if (currentTask == 2){
  $(".main").html("templates/intro.html");
  $(".introtask1").css({
    "backgroun-color": "green"
  });
}
}

// instead of href give the photo a class; task1Correct

$('task1correct').on("click", function(){
  // reset timerr
  // increment score
  // increment currentTask
  showtask();
});

$(document).on("click", function(){
  console.log("click happened");
})


var index = 0, colorValue = "FFFFFF",
timer = setInterval(function(){startTime()},1000),
randomColor = ["008000", "FF0000", "A6BEFF", "000000", "99FF99", "FFFF99", "FF00FF", "CCCCCC", "99FFFF", "0000FF"];

function startTime(){
  if(index == 10) {
    clearInterval(timer);
  } else {
  	colorValue = randomColor[index++];
  }
   document.getElementById("background").style.backgroundColor = "#" + colorValue;
}
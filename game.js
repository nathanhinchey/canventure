
(function() {
  'use strict';
  var Canventure = window.Canventure = {};
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  Canventure.Box = {};
  Canventure.Box.x = 10
  Canventure.Box.y = 10

  Canventure.draw = function() {
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = "#F00";
    ctx.fillRect(Canventure.Box.x, Canventure.Box.y, 100, 100);
  }

}());

var UP = 38;
var DOWN = 40;
var LEFT = 37;
var RIGHT = 39;

document.onkeydown = function(evt) {
  if (evt.keyCode === UP){
    Canventure.Box.y -= 1;
  } else if (evt.keyCode === DOWN){
    Canventure.Box.y += 1;
  } else if (evt.keyCode === LEFT){
    Canventure.Box.x -= 1;
  } else if (evt.keyCode === RIGHT){
    Canventure.Box.x += 1;
  }
}

setInterval(Canventure.draw, 50);

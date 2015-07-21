
(function() {
  'use strict';
  var Canventure = window.Canventure = {};
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var Box = Canventure.Box = {};
  Box.xy = [10,10];
  var HOP_DISTANCE = 120; //pixels
  var HOP_TIME = 100; //milliseconds
  var HOP_SPEED = (HOP_DISTANCE / HOP_TIME) * 10;

  Box.moving = false;

  Box.move = function(coordinate, direction) {
    if (!Box.moving){
      Box.moving = true;
      var movementInterval = setInterval(function(){
        Box.xy[coordinate] += HOP_SPEED * direction;
      }, 10);
      setTimeout(function(){
        Box.moving = false;
        clearInterval(movementInterval);
      }, HOP_TIME);
    }
  }

  // Box.move = function(coordinate, direction){
  //   if (!Box.moving){
  //     Box.moving = true;
  //     setTimeout(function(){
  //       Box.moving = false;
  //       Box.xy[coordinate] += HOP_DISTANCE * direction;
  //     }, HOP_TIME);
  //   }
  //
  // }

  Box.moveRight = function(){
    Box.move(0, 1);
  };
  Box.moveLeft = function(){
    Box.move(0, -1);
  };
  Box.moveUp = function(){
    Box.move(1, -1);
  };
  Box.moveDown = function(){
    Box.move(1, 1);
  };

  Canventure.draw = function() {
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = "#F00";
    ctx.fillRect(Box.xy[0], Box.xy[1], 100, 100);
  }

}());

var UP = 38;
var DOWN = 40;
var LEFT = 37;
var RIGHT = 39;

document.onkeydown = function(evt) {
  if (evt.keyCode === UP){
    Canventure.Box.moveUp();
  } else if (evt.keyCode === DOWN){
    Canventure.Box.moveDown();
  } else if (evt.keyCode === LEFT){
    Canventure.Box.moveLeft();
  } else if (evt.keyCode === RIGHT){
    Canventure.Box.moveRight();
  }
}

setInterval(Canventure.draw, 1);


document.onkeydown = function(evt) {
  if (evt.keyCode === UP){
    Canventure.Box.moveUp = true;
  } else if (evt.keyCode === DOWN){
    Canventure.Box.moveDown = true;
  } else if (evt.keyCode === LEFT){
    Canventure.Box.moveLeft = true;
  } else if (evt.keyCode === RIGHT){
    Canventure.Box.moveRight = true;
  }
}

document.onkeyup = function(evt) {
  if (evt.keyCode === UP){
    Canventure.Box.moveUp = false;
  } else if (evt.keyCode === DOWN){
    Canventure.Box.moveDown = false;
  } else if (evt.keyCode === LEFT){
    Canventure.Box.moveLeft = false;
  } else if (evt.keyCode === RIGHT){
    Canventure.Box.moveRight = false;
  }
}

// if (Box.moveRight)
//   Box.x += SPEED;
// if (Box.moveLeft)
//   Box.x -= SPEED;
// if (Box.moveUp)
//   Box.y -= SPEED;
// if (Box.moveDown)
//   Box.y += SPEED;

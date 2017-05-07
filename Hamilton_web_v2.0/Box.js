function Box(x, y){
  // The possition where de box is displayed.
  this.x = x;
  this.y = y;

  // -1 for empty box
  // Betwen 0 and 6 other colors.
  this.COLOR = -1;

  // default (empty box)
  // dynamic or static
  this.state = "default";

  this.show = function() {
    switch(this.COLOR) {
      case -1: fill(55, 55, 55);break;
      case 0:  fill(109, 249, 244);break;
      case 1:  fill(242, 255, 0);  break;
      case 2:  fill(166, 0, 255);  break;
      case 3:  fill(0, 255, 19);   break;
      case 4:  fill(255,0,0);      break;
      case 5:  fill(0,0,255);      break;
      case 6:  fill(255, 153, 0);  break;
      default: break;
    }
    stroke(30,30,30);
    rect(this.x, this.y, SIZE, SIZE);
  }
}

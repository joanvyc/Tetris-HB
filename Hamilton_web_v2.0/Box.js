function Box(x, y, p){
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
      case -1: p.fill(55, 55, 55);break;
      case 0:  p.fill(109, 249, 244);break;
      case 1:  p.fill(242, 255, 0);  break;
      case 2:  p.fill(166, 0, 255);  break;
      case 3:  p.fill(0, 255, 19);   break;
      case 4:  p.fill(255,0,0);      break;
      case 5:  p.fill(0,0,255);      break;
      case 6:  p.fill(255, 153, 0);  break;
      default: break;
    }
    p.stroke(30,30,30);
    p.rect(this.x, this.y, SIZE, SIZE);
  }
}

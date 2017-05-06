function quadraditu(x, y) {
  // the pos where is displayed.
  this.x = x;
  this.y = y;

  // default  (empty)
  // <color>  (fill with this color)
  this.color = -1;

  // default  (empty)
  // dynamics (falls when update)
  // static   (stoped block)
  this.state = "default";


  // Pre: true.
  // Post:draws the squeare.
  this.show = function(){
    switch(this.color){
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

  // Pre: true.
  // Post:return whether is default or not.
  this.is_default = function(){
    return state == "default";
  }

  // Pre: true.
  // Post:return whether is static or not.
  this.is_static = function(){
    return state == "static";
  }

  // Pre: true.
  // Post:return whether is dynamic or not.
  this.is_dynamic = function(){
    return state == "dynamic";
  }
}

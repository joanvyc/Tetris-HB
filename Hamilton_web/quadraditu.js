function quadraditu(x, y) {
  // the pos where is displayed.
  this.x = x;
  this.y = y;

  // default  (empty)
  // <color>  (fill with this color)
  this.color = "default";

  // default  (empty)
  // dynamics (falls when update)
  // static   (stoped block)
  this.state = "default";


  // Pre: true.
  // Post:draws the squeare.
  this.show = function(){
    switch(this.color){
      case "default":fill(55, 55, 55);break;
      case "cyan":   fill(109, 249, 244);break;
      case "yellow": fill(242, 255, 0);  break;
      case "purple": fill(166, 0, 255);  break;
      case "green":  fill(0, 255, 19);   break;
      case "red":    fill(255,0,0);      break;
      case "blue":   fill(0,0,255);      break;
      case "orange": fill(255, 153, 0);  break;
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

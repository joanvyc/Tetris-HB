function quadraditus(var x, var y){
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
}

// Pre: true.
// Post:draws the squeare.
function show(){
  switch(color){
    case "default":fill(30, 30, 30);   break;
    case "cyan":   fill(109, 249, 244);break;
    case "yellow": fill(242, 255, 0);  break;
    case "purple": fill(166, 0, 255);  break;
    case "green":  fill(0, 255, 19);   break;
    case "red":    fill(255,0,0);      break;
    case "blue":   fill(0,0,255);      break;
    case "orange": fill(255, 153, 0);  break;
    default: break;
  }
  stroke(0,0,0);
  rectangle(this.x, this.y, size, size);
}

// Pre: COLOR = color is cyan, yellow, purple, green, red, blue or orange.
// Post: color is set to COLOR.
function color(var color) {
  this.color = color;
}

// Pre: true.
// Post:return whether is default or not.
function is_default(){
  return state == "default";
}

// Pre: true.
// Post:return whether is static or not.
function is_static(){
  return state == "static";
}

// Pre: true.
// Post:return whether is dynamic or not.
function is_dynamic(){
  return state == "dynamic";
}

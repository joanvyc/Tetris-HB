function piece(){
  var name =
  this.r_places;
  this.place = new Array(4);
  this.origin = createVector(0,0);
  this.r_state = 0;
  switch (name){
    case 0:
    // cube
      this.r_places = new Array(1);
      this.r_places[0] = [createVector(4,1),createVector(5,1),createVector(4,2),createVector(5,2)];
      this.r_state = -1;
      break;
    case 1:
    // z
      this.r_places = new Array(2);
      this.r_places[0] = [createVector(3,1),createVector(4,1),createVector(4,2),createVector(5,2)];
      this.r_places[1] = [createVector(5,0),createVector(4,1),createVector(5,1),createVector(4,2)];
      break;
    case 2:
    // s
      this.r_places = new Array(2);
      this.r_places[0] = [createVector(4,1),createVector(5,1),createVector(3,2),createVector(4,2)];
      this.r_places[1] = [createVector(4,0),createVector(4,1),createVector(5,1),createVector(5,2)];
      break;
    case 3:
    // L
    this.r_places = new Array(4);
    this.r_places[0] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(5,0)];
    this.r_places[1] = [createVector(4,0),createVector(4,1),createVector(4,2),createVector(5,2)];
    this.r_places[2] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(3,2)];
    this.r_places[3] = [createVector(3,0),createVector(4,0),createVector(4,1),createVector(4,2)];

    break;
  }
}
var entrada = function(){}//canviar el valor de this.orgin en x en funcio de les tecles , tambe el rotar
var can_rotate = function(){} //mira si pot rotar osigui que la pos seguent no entra en contacte amb estatics
var update = function(){
  // ha de detectar si esta en contacte amb un cub estatic si ho està cridar a reiniciar
  //si no està en contacte amb un cub estatic eliminar aquests cubs ja escrits i escriure en ++origen.y
  for(var i = 0;i< 4;++i){
    grid[pos(this.pos[i].x,this.pos[i].y)].state = "default";
  }

}

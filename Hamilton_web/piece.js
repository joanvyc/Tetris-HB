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
    case 4:
      // *L
      this.r_places = new Array(4);
      this.r_places[0] = [createVector(3,0),createVector(3,1),createVector(4,1),createVector(5,1)];
      this.r_places[1] = [createVector(4,0),createVector(5,0),createVector(4,1),createVector(4,2)];
      this.r_places[2] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(5,2)];
      this.r_places[3] = [createVector(3,2),createVector(4,2),createVector(4,1),createVector(4,0)];
      break;
    case 5:
      this.r_places = new Array(2);
      this.r_places[0] = [createVector(3,2),createVector(4,2),createVector(5,2),createVector(6,2)];
      this.r_places[0] = [createVector(5,0),createVector(5,1),createVector(5,2),createVector(5,3)];
      break;

  }

  //canviar el valor de this.orgin en x en funcio de les tecles , canviar la rotacio
  this.entrada = function(){
      // en funcio de input ++origen.x o --origen.x

  }

  //mira si pot rotar osigui que la posicio seguent del rotate no toca amb statics
  this.can_rotate = function(){

    for(var i = 0; i<4; ++i){
      var pos_consultar = createVector(0,0);
      pos_consultar.x = (this.r_places[(this.r_state+1)%this.r_places.size()][i] + this.origin).x;
      pos_consultar.y = (this.r_places[(this.r_state+1)%this.r_places.size()][i] + this.origin).y;
      if(grid[pos(,)].is_static()) return false;
    }
    return true;
}

  this.update = function(){
    // ha de detectar si esta en contacte amb un cub estatic si ho està cridar a reiniciar
    // si no està en contacte amb un cub estatic eliminar aquests cubs ja escrits i escriure en ++origen.y

    // Amb condicions.
    this.origin.y++;
  }
}

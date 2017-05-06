function piece(){
  var name = floor(random(0,6));
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
  this.moure = function(var desp){
      // en funcio de input ++origen.x o --origen.x
      var found = false;
      for(var i = 0; i<4 && !false; ++i){
        var sup_pos = this.r_places[(this.r_state)%this.r_places.length][i] + this.origin + createVector(-desp,0);
        if(sup_pos.x>9 or sup_pos.x<0)found = true;
        if(grid[pos(sup_pos.x,sup_pos.y)].is_static) found = true;
      }
      if(!found)--origin.y;
  }
  this.rotar = function(){
    if(can_rotate){
        ++this.r_state;
        this.update(false);

    }
  }

  //mira si pot rotar osigui que la posicio seguent del rotate no toca amb statics
  this.can_rotate = function(){

    for(var i = 0; i<4; ++i){
        if(grid[pos((this.r_places[(this.r_state+1)%this.r_places.length][i] + this.origin).x,(this.r_places[(this.r_state+1)%this.r_places.length][i] + this.origin).y)].is_static()) return false;
    }
    return true;
}

  this.update = function(var baixar){
    // ha de detectar si esta en contacte amb un cub estatic si ho està cridar a reiniciar
    // si no està en contacte amb un cub estatic eliminar aquests cubs ja escrits i escriure en ++origen.y

    // Amb condicions.
    var cond = baixar;
    for(var i = 0; i<4 && cond; ++i){
      var sup_pos = this.r_places[this.r_state % this.r_places.length][i] + this.origin + createVector(0,1);
        if(grid[pos(sup_pos.x,sup_pos.y)].is_static()) cond = false;
    }
    if(cond){
      for(int i = 0; i<4; ++i){
        var sup_pos = this.r_places[this.r_state % this.r_places.length][i] + this.origin;
        grid[pos(sup_pos.x,sup_pos.y)].state = "default";
      }
      ++origin.y;
      for(int i = 0; i<4; ++i){
        var sup_pos = this.r_places[this.r_state % this.r_places.length][i] + this.origin;
        grid[pos(sup_pos.x,sup_pos.y)].state = "dynamic";
      }
    }
    else origin = createVector(0,0);
  }
}

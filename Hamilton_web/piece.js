function piece(){
  this.r_places;
  this.origin = createVector(0,0);
  this.r_state = 0;

  this.createShape = function(){
    this.name =0; //floor(random(0,7));
    switch (this.name){
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
        this.r_places[1] = [createVector(5,0),createVector(5,1),createVector(5,2),createVector(5,3)];
        break;
      case 6:
       // cross
       this.r_places = new Array(4);
       this.r_places[0] = [createVector(3,1),createVector(4,0),createVector(4,1),createVector(5,1)];
       this.r_places[1] = [createVector(4,2),createVector(4,0),createVector(4,1),createVector(5,1)];
       this.r_places[2] = [createVector(3,1),createVector(4,2),createVector(4,1),createVector(5,1)];
       this.r_places[3] = [createVector(3,1),createVector(4,0),createVector(4,1),createVector(4,2)];
       break;
    }
  }

  this.createShape();

  for (var w = 0; w < 4; ++w) {
    grid[pos(
      this.r_places[0][w].x,
      this.r_places[0][w].y
    )].COLOR = this.name;
  }

  //canviar el valor de this.orgin en x en funcio de les tecles , canviar la rotacio
  this.moure = function(desp){
      // en funcio de input ++origen.x o --origen.x
      var found = false;
      var j = (this.r_state) % (this.r_places.length);
      for(var i = 0; i<4 && !found; ++i){
        var sup_pos = createVector(0,0);
        sup_pos.x = this.r_places[j][i].x + this.origin.x + desp;
        sup_pos.y = this.r_places[j][i].y + this.origin.y;

        if(sup_pos.x >= COLS || sup_pos.x<0)found = true;
        else if(grid[pos(sup_pos.x,sup_pos.y)].is_static()) found = true;
      }
      if(!found){
        for(var i = 0; i<4; ++i){
          var sup_pos = createVector(0,0);
          sup_pos.x += this.r_places[this.r_state % this.r_places.length][i].x + this.origin.x;
          sup_pos.y += this.r_places[this.r_state % this.r_places.length][i].y + this.origin.y;
          grid[pos(sup_pos.x,sup_pos.y)].state = "default";
          grid[pos(sup_pos.x,sup_pos.y)].COLOR = -1;
        }
        this.origin.x += desp;
        for(var i = 0; i<4; ++i){
          var sup_pos = createVector(0,0);
          sup_pos.x += this.r_places[this.r_state % this.r_places.length][i].x + this.origin.x;
          sup_pos.y += this.r_places[this.r_state % this.r_places.length][i].y + this.origin.y;
          grid[pos(sup_pos.x,sup_pos.y)].state = "dynamic";
          grid[pos(sup_pos.x,sup_pos.y)].COLOR = this.name;
        }
        for(var i = 0; i<200;++i)grid[i].show();
      }
  }
  this.rotar = function(){
    if(can_rotate){
        ++this.r_state;
        this.update(false);
        for(var i = 0; i<200;++i)grid[i].show();
    }
  }

  //mira si pot rotar osigui que la posicio seguent del rotate no toca amb statics
  this.can_rotate = function(){

    for(var i = 0; i<4; ++i){
      if(grid[pos((this.r_places[(this.r_state+1)%this.r_places.length][i] + this.origin).x,(this.r_places[(this.r_state+1)%this.r_places.length][i] + this.origin).y)].is_static()) return false;
    }
    return true;
}

  this.update = function(baixar){
    // ha de detectar si esta en contacte amb un cub estatic si ho està cridar a reiniciar
    // si no està en contacte amb un cub estatic eliminar aquests cubs ja escrits i escriure en ++origen.y

    // Amb condicions.
    var cond = true;
    for(var i = 0; i<4 && cond; ++i){
      var sup_pos = createVector(0,1);
      sup_pos.x += this.r_places[this.r_state % this.r_places.length][i].x + this.origin.x;
      sup_pos.y += this.r_places[this.r_state % this.r_places.length][i].y + this.origin.y;

      if (sup_pos.y >= FILES) cond = false;
      else if(grid[pos(sup_pos.x,sup_pos.y)].is_static()) cond = false;
    }
    if(cond){
      for(var i = 0; i<4; ++i){
        var sup_pos = createVector(0,0);
        sup_pos.x += this.r_places[this.r_state % this.r_places.length][i].x + this.origin.x;
        sup_pos.y += this.r_places[this.r_state % this.r_places.length][i].y + this.origin.y;
        grid[pos(sup_pos.x,sup_pos.y)].state = "default";
        grid[pos(sup_pos.x,sup_pos.y)].COLOR = -1;
      }
      if (baixar)++this.origin.y;
      for(var i = 0; i<4; ++i){
        var sup_pos = createVector(0,0);
        sup_pos.x += this.r_places[this.r_state % this.r_places.length][i].x + this.origin.x;
        sup_pos.y += this.r_places[this.r_state % this.r_places.length][i].y + this.origin.y;
        grid[pos(sup_pos.x,sup_pos.y)].state = "dynamic";
        grid[pos(sup_pos.x,sup_pos.y)].COLOR = this.name;
      }
    }
    else {
      for(var i = 0; i<4; ++i){
        var sup_pos = createVector(0,0);
        sup_pos.x += this.r_places[this.r_state % this.r_places.length][i].x + this.origin.x;
        sup_pos.y += this.r_places[this.r_state % this.r_places.length][i].y + this.origin.y;
        grid[pos(sup_pos.x,sup_pos.y)].state = "static";
      }
      checkLines();
      checkLines();
      checkLines();
      checkLines();
      this.origin = createVector(0,0);
      this.createShape();
    }
  }
}

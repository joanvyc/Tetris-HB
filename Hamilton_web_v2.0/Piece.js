function Piece(){
  this.shapes = Array(7);

  // Cube
  this.shapes[0] = Array(1);
  this.shapes[0][0] = [createVector(4,1),createVector(5,1),createVector(4,2),createVector(5,2)];

  // Z
  this.shapes[1] = Array(2);
  this.shapes[1][0] = [createVector(3,1),createVector(4,1),createVector(4,2),createVector(5,2)];
  this.shapes[1][1] = [createVector(5,0),createVector(4,1),createVector(5,1),createVector(4,2)];

  // S
  this.shapes[2] = Array(2);
  this.shapes[2][0] = [createVector(4,1),createVector(5,1),createVector(3,2),createVector(4,2)];
  this.shapes[2][1] = [createVector(4,0),createVector(4,1),createVector(5,1),createVector(5,2)];

  // L
  this.shapes[3] = Array(4);
  this.shapes[3][0] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(5,0)];
  this.shapes[3][1] = [createVector(4,0),createVector(4,1),createVector(4,2),createVector(5,2)];
  this.shapes[3][2] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(3,2)];
  this.shapes[3][3] = [createVector(3,0),createVector(4,0),createVector(4,1),createVector(4,2)];

  // *L
  this.shapes[4] = Array(4);
  this.shapes[4][0] = [createVector(3,0),createVector(3,1),createVector(4,1),createVector(5,1)];
  this.shapes[4][1] = [createVector(4,0),createVector(5,0),createVector(4,1),createVector(4,2)];
  this.shapes[4][2] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(5,2)];
  this.shapes[4][3] = [createVector(3,2),createVector(4,2),createVector(4,1),createVector(4,0)];

  // |
  this.shapes[5] = Array(2);
  this.shapes[5][0] = [createVector(3,2),createVector(4,2),createVector(5,2),createVector(6,2)];
  this.shapes[5][1] = [createVector(5,0),createVector(5,1),createVector(5,2),createVector(5,3)];

  // T ^-1
  this.shapes[6] = Array(4);
  this.shapes[6][0] = [createVector(3,1),createVector(4,0),createVector(4,1),createVector(5,1)];
  this.shapes[6][1] = [createVector(4,2),createVector(4,0),createVector(4,1),createVector(5,1)];
  this.shapes[6][2] = [createVector(3,1),createVector(4,2),createVector(4,1),createVector(5,1)];
  this.shapes[6][3] = [createVector(3,1),createVector(4,0),createVector(4,1),createVector(4,2)];

  this.createShape = function() {
    this.rotations = 0;
    this.name = floor(random(0,7));
    this.origin = createVector(0, 0);
  }

  this.createShape();

  for (var i = 0; i < 4; ++i) {
    grid[this.shapes[this.name][0][i].y]
        [this.shapes[this.name][0][i].x].COLOR = this.name;
  }

  this.x_move = function(dir)  {
    if (dir != 0)
    {
      var colision = false;
      var rotated = this.rotations % this.shapes[this.name].length;
      for (var i = 0; i < 4 && !colision; ++i) {
        var next_pos = createVector(0, 0);
        next_pos.x = this.shapes[this.name][rotated][i].x + this.origin.x + dir;
        next_pos.y = this.shapes[this.name][rotated][i].y + this.origin.y;
        if (
            next_pos.x >= COLS                       ||
            next_pos.x <  0  ||
          grid[next_pos.y][next_pos.x].state == "static"

      )colision = true;
      }
      if (!colision)
      {
        this.clean();
        this.origin.x += dir;
        this.draw();
      }
    }
  }

  this.rotar = function(dir) {
    if(dir != 0 && this.can_rotate(dir)){
        this.clean();
        this.rotations += dir == "right" ? 1 : (dir == "left" ? -1 : 0);
        this.draw();
    }
  }

  this.can_rotate = function(dir) {
    for (var i = 0; i < 4; ++i) {
      var next_pos = createVector(0, 0);
      next_pos.x = this.shapes[this.name][(this.rotations + (dir)) % this.shapes[this.name].length][i].x + this.origin.x;
      next_pos.y = this.shapes[this.name][(this.rotations + (dir)) % this.shapes[this.name].length][i].y + this.origin.y;
      if (
        grid[next_pos.y][next_pos.x].state == "static"||
        next_pos.y > FILES                      ||
        next_pos.x >= COLS                      ||
        next_pos.x < 0
      ) return false;
    }return true;
  }

  this.clean = function() {
    for(var i = 0; i<4; ++i){
      var clean_pos = createVector(0,0);
      clean_pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;

      clean_pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;

      grid[clean_pos.y][clean_pos.x].state = "default";
      grid[clean_pos.y][clean_pos.x].COLOR = -1;

    }
  }

  this.draw = function() {
    for(var i = 0; i<4; ++i){
      var next_pos = createVector(0,0);
      next_pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;

      next_pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;

      grid[next_pos.y][next_pos.x].state = "dynamic";
      grid[next_pos.y][next_pos.x].COLOR = this.name;
    }
  }

  this.make_static = function(){
      for(var i = 0; i<4; ++i){
          var static_pos = createVector(0,0);
          static_pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;

          static_pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;

          grid[static_pos.y][static_pos.x].state = "static";
      }
  }

  this.pos_box = function(i) {
    var pos = createVector(0,0);
    pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;
    pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;
    return pos;
  }

  this.box = function(i) {
    var pos = createVector(0,0);
    pos.x = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].x + this.origin.x;
    pos.y = this.shapes[this.name][this.rotations % this.shapes[this.name].length][i].y + this.origin.y;
    return grid[pos.y][pos.x];
  }

}

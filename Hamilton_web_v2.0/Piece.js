function Piece(){
  this.shapes = new Array(7);

  // Cube
  this.shapes[0] = new Array(1);
  this.shapes[0][0] = [createVector(4,1),createVector(5,1),createVector(4,2),createVector(5,2)];

  // Z
  this.shapes[1] = new Array(2);
  this.shapes[1][0] = [createVector(3,1),createVector(4,1),createVector(4,2),createVector(5,2)];
  this.shapes[1][1] = [createVector(5,0),createVector(4,1),createVector(5,1),createVector(4,2)];

  // S
  this.shapes[2] = new Array(2);
  this.shapes[2][0] = [createVector(4,1),createVector(5,1),createVector(3,2),createVector(4,2)];
  this.shapes[2][1] = [createVector(4,0),createVector(4,1),createVector(5,1),createVector(5,2)];

  // L
  this.shapes[3] = new Array(4);
  this.shapes[3][0] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(5,0)];
  this.shapes[3][1] = [createVector(4,0),createVector(4,1),createVector(4,2),createVector(5,2)];
  this.shapes[3][2] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(3,2)];
  this.shapes[3][3] = [createVector(3,0),createVector(4,0),createVector(4,1),createVector(4,2)];

  // *L
  this.shapes[4] = new Array(4);
  this.shapes[4][0] = [createVector(3,0),createVector(3,1),createVector(4,1),createVector(5,1)];
  this.shapes[4][1] = [createVector(4,0),createVector(5,0),createVector(4,1),createVector(4,2)];
  this.shapes[4][2] = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(5,2)];
  this.shapes[4][3] = [createVector(3,2),createVector(4,2),createVector(4,1),createVector(4,0)];

  // |
  this.shapes[5] = new Array(2);
  this.shapes[5][0] = [createVector(3,2),createVector(4,2),createVector(5,2),createVector(6,2)];
  this.shapes[5][1] = [createVector(5,0),createVector(5,1),createVector(5,2),createVector(5,3)];

  // T ^-1
  this.shapes[6] = new Array(4);
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
    grid[this.shpapes[this.name][0][i].x]
        [this.shpapes[this.name][0][i].x].COLOR = this.name;
  }

  this.x_move = function(DIR)  {
    var colision = false;
    var rotated = this.rotated % this.shpapes[this.name].lenght;
  }

}

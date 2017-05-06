function piece(var name){
  this.pos = Array(4);
  switch (name){
    case 0:this.pos = [createVector(4,0),createVector(5,0),createVector(4,1),createVector(5,1)];
    case 1:this.pos = [createVector(3,0),createVector(4,0),createVector(4,1),createVector(5,1)];
    case 2:this.pos = [createVector(4,0),createVector(5,0),createVector(3,1),createVector(4,1)];
    case 3:this.pos = [createVector(2,0),createVector(3,0),createVector(4,0),createVector(5,0)];
    case 4:this.pos = [createVector(3,0),createVector(3,1),createVector(4,1),createVector(5,1)];
    case 5:this.pos = [createVector(3,1),createVector(4,1),createVector(5,1),createVector(5,0)];
    case 6:this.pos = [createVector(4,0),createVector(3,1),createVector(4,1),createVector(5,1)];
  }
}

Function.prototype.inherits = function(parent) {

  function Surrogate() {}
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
  

};

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() {
  
  this.test = function () {
    console.log("asteroid");
  };
 }
Asteroid.inherits(MovingObject);

let ship = new Ship();
let asteroid = new Asteroid();
let movingObject = new MovingObject();

Ship.prototype.is
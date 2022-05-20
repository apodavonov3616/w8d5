Function.prototype.inherits = function (SuperClass) {

    let Subclass = this 

    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype
    Subclass.prototype = new Surrogate();
    Subclass.prototype.constructor = Subclass

}


function MovingObject () {}

MovingObject.prototype.move = function() {
    console.log('i move');
}

function Ship () {}
Ship.inherits(MovingObject);



function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.crush = function() {
    console.log('i crush planets')
}

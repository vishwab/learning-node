let Animal = require('./Animal');

class Bird extends Animal {
    // Call parent constructor
    constructor(name) {
        super(name);
    }
    //Animal.call(this, name);

    fly(destination) {
        console.log(this.name + ' is flying to ' + destination);
    }
}

/*
function display(content) {
    console.log(content);
}
*/

const bird = new Bird();
bird.name = 'Dino';
bird.walk('Park');
bird.fly('Trees');

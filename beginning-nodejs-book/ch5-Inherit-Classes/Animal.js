/*
 * Below file defines an Animal class which is a parent.
 * You can have a child class in another js file and use below code (as an example) to import and extend from this parent
 *      let Animal = require('./Animal');
 *      class Bird extends Animal
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log('Name is ' + this.name);
    }

    walk(destination) {
        console.log(this.name + ' is walking to ' + destination);
    }
}

// Below code works in stand-alone mode...
/*
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

const bird = new Bird();
bird.name = 'Dog';
bird.walk('Park');
bird.fly('Trees');

//let animal = new Animal('Dog');
//animal.print();
//animal.walk('Park');
*/

module.exports = Animal;


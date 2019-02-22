// Class definition
function someClass() {
    // Properties go here
    this.someProperty = 'some intial value';
}

// Member functions go here:
someClass.prototype.someMemberFunction = function() {
    /* Do something using this */
    this.someProperty = 'modified value';
};

// Creation
let instance = new someClass();

// Usage
console.log(instance.someProperty); // some initial value
instance.someMemberFunction();
console.log(instance.someProperty); // modified value

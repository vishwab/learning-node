/*
 * Whenever we have a function defined inside another function, the inner function has access to the variables
 * declared in the outer function. In below example you can see that the inner function has access to a variable
 * (varInOutFunc) from the outer scope. The variables in the outer function have been closed by (or bound in)
 * the inner function. Hence the term "closure".
 */
function outerFunction(arg) {
    var varInOutFunc = arg;

    function bar() {
        console.log(varInOutFunc); // Access a var from the outer scope
    }
    // Call the local function to demonstrate that it has access to arg
    bar();
}

outerFunction('Hello Closure!');
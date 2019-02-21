/*
 * Whenever we have a function defined inside another function, the inner function has access to the variables
 * declared in the outer function. In below example you can see that the inner function has access to a variable
 * (varInOutFunc) from the outer scope. The variables in the outer function have been closed by (or bound in)
 * the inner function. Hence the term "closure".
 *
 * The awesome part: The inner function can access the variables from the outer scope even after the outer function
 * has returned. This is because the variables are still bound in the inner function and not dependent on the
 * outer function.
 */
function outerFunction(arg) {
    var varInOutFunc = arg;

    return function () {
        console.log(varInOutFunc); // Access a var from the outer scope
    };
}

var innerFunction = outerFunction('Hello Closure!');

// Note the outer function has returned
innerFunction(); // logs hello closure!
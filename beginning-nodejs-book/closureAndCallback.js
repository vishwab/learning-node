// This combines first-class functions/callback and closures
function longRunningOperation(callback) {
    // Simulate a 3 second operation
    setTimeout(callback, 3000);
}

function webRequest(request) {
    console.log('starting a long operation for request: ' + request.id);
    longRunningOperation( function() {
        console.log('ending a long operation for request: ' + request.id);
    });
}

// Simulate a web request
webRequest({ id:1 });

// Simulate a second web request
webRequest({ id:2 });
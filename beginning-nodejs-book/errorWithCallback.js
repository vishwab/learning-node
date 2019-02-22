/*
 * Below code notifies the call back function with an error during connection failure or indicates success
 */
function getConnection(callback) {
    let connection;
    try {
        // Lets assume that the connection failed. Comment out below line if connection succeeded needs to happen
        throw new Error('Connection failed');

        // Notify callback that connection succeeded?
        callback(null, connection);
    } catch (error) {
        // Notify callback about error?
        callback(error, null);
    }
}

// Usage
getConnection(function (error, connection) {
    if (error) {
        console.log('Error: ', error.message);
    } else {
        console.log('Connection succeeded: ', connection);
    }
});
// Function to call a callback function
function receivesAFunction(callback) {
    callback(); // Call the provided callback function
  }
  
  // Function to return a named function
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      // Function logic goes here
    }
    return namedFunction;
  }
  
  // Function to return an anonymous function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      // Function logic goes here
    };
  }
  
  
// This file isn't transpiled, so must us commonJS and ES5

// Register babel to transpile before our test runs
require('babel-register')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {}; 
var assert = require('assert');
var python = require('../lib/python').shell;
var testCounter = 0;

var runTests = function() {

   // Run a couple commands in series
   python('print("Hello World!")', function(err, data) {
      assert.equal('Hello World!\n', data);
      console.log('test 1 ok!');
      completeTest();
      python('print("Goodbye, Cruel World!")', function (err, data) {
        assert.equal('Goodbye, Cruel World!\n', data);
        console.log('test 2 ok!');
        python('quit()');
        completeTest();
      });
   });

   // Run one in parallel with the first two
   python('print("Asynch")', function (err, data) {
     assert.equal('Asynch\n', data);
     console.log('test 3 ok!');
     completeTest();
   });
};

function completeTest() {
    testCounter++;
    if (testCounter >= 3) {
        console.log("All tests completed ok.");
        process.exit(0);
    }
}

runTests();

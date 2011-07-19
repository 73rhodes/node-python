var assert = require('assert');
var python = new (require('../lib/python').Python);

var runTests = function() {
   // Run a couple commands in series
   python.cmd('print "Hello World!"', function(err, data) {
      assert.equal('Hello World!\n', data);
      console.log('test 1 ok!');
      python.cmd('print "Goodbye, Cruel World!"', function (err, data) {
        assert.equal('Goodbye, Cruel World!\n', data);
        console.log('test 2 ok!');
        python.cmd('quit()');
      });
   });
   // Run one in parallel with the first two
   python.cmd('print "Asynch"', function (err, data) {
     assert.equal('Asynch\n', data);
     console.log('test 3 ok!');
   });
};

runTests();

var assert = require('assert');
var python = new (require('../lib/python').Python);

var testPrint = function() {
   python.cmd('print "Hello World!"', function(err, data) {
      assert.equal('Hello World!\n', data);
      console.log('testPrint: ok!');
      python.cmd('quit()');
   });
};

testPrint();

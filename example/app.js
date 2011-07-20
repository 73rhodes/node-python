#!/usr/bin/env node
var Python = require('../lib/python').Python;
var python = new Python();
var mycallback = function(err, data) {
   if (err) {
     console.error(err);
   } else {
     process.stdout.write("Callback function got : " + data);
   }
};
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
   python.cmd(chunk, mycallback);
});

process.stdin.on('end', function() {
   python.cmd('quit()');
});

#!/usr/bin/env node
var Python = require('./python').Python;
var python = new Python();
var mycallback = function(data) {
   console.log("Callback function got : " + data);
};
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
   python.cmd(chunk, mycallback);
});

process.stdin.on('end', function() {
   python.cmd('quit()');
});

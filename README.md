node-python
===

Authors
---
- Darren DeRidder

Info
---
A simple wrapper to communicate with a long-running python child process using callbacks from NodeJS.

Example
---

    var Python=require('python').Python;
    var python = new Python();
    var mycallback = function(data) {
       console.log("Callback function got : " + data);
    };
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(chunk) {
       python.cmd(chunk, mycallback);
    });


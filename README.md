node-python
===

Communicate with a long-running Python child process from NodeJS.

Authors
---
- Darren DeRidder

About
---
A simple wrapper for NodeJS to interact programatically with the Python shell. Enables the use of Python-based tools from Node.

The module is in early beta; contributors are welcome and appreciated.

Example
---
This example starts a python child process, reads stdin for python commands, pipes them through to the python shell and runs the callback method with the resulting output. State is preserved in the shell between calls.

    // ------
    // app.js
    // ------
    var Python=require('python').Python;
    
    // create an instance of the python shell
    var python = new Python();
    
    // a callback to handle the response
    var mycallback = function(err, data) {
       if (err) {
         console.error(err);
       } else {
         console.log("Callback function got : " + data);
       }
    };
    
    // to test, read and execute commands from stdin
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(chunk) {
       python.cmd(chunk, mycallback);
    });


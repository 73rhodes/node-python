node-python
===

Communicate with a long-running python child process using callbacks from NodeJS.

Authors
---
- Darren DeRidder

About
---
A simple wrapper for NodeJS to interact programatically with the Python shell. Enables the use of Python-based toolkits from Node.

Example
---

    // require the python module
    var Python=require('python').Python;
    
    // create an instance of the python shell
    var python = new Python();
    
    // a callback to handle the response
    var mycallback = function(data) {
       console.log("Callback function got : " + data);
    };
    
    // to test, read and execute commands from stdin
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(chunk) {
       python.cmd(chunk, mycallback);
    });


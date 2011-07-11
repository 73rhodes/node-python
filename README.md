node-python
===

Communicate with a long-running python child process using callbacks from NodeJS.

Authors
---
- Darren DeRidder

Info
---
This probably seems a bit odd, since we're supposed to be writing everything in JavaScript, but I ended up needing this to interact programatically with some python based tools (think scapy, nltk, etc).  Hopefully somebody else will find it useful but if there's a better solution please let me know!

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


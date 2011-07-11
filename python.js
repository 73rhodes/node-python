var util       =   require('util');
var spawn      =   require('child_process').spawn;
var child      =   spawn('python',['-u','-i']);
var cmdQueue   =   new Array();
var processing =   false;


var Python = function() {
  child.stdout.on('data', handleStdout);
  child.stderr.on('data', handleStderr);
  child.on('exit', handleExit);
};


function handleStdout (data) {
  if(!processing) {
    console.log("Error: got stdout while not processing a cmd");
  }
  if (cmdQueue.length > 0) {
    cmdQueue[0].data+=data.toString('utf8');;
  }
};


function handleStderr (data) {
  process.nextTick(function(){
    if(data.toString().match(/>>>/)) {
      cmd = cmdQueue.shift();
      if (cmd && cmd.command) {
        if (undefined != typeof cmd.callback) {
          cmd.callback(cmd.data);
        }
      }
      process.stderr.write('>>> ');
    } else {
      process.stderr.write(data.toString('utf8'));
    }
  });
};


function handleExit (code) {
  console.log('child process exited with code ' + code);
  process.exit();
};


Python.prototype.cmd = function(command, callback) {
  if (command.charAt[command.length-1]!='\n') command += '\n';
  cmdQueue.push({'command':command, 'callback':callback, 'data': ''});
  processing = true;
  child.stdin.write(command, encoding='utf8');
};

exports.Python = Python;

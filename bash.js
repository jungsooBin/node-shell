
const pwd = require('./pwd');
const ls = require('./ls');
// if a user enters 'pwd' as an argument, we can then call it


process.stdout.write('prompt > ');

    process.stdin.on('data',(data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd'){
      pwd()
    } else if (cmd === 'ls') {
      ls()
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt >');
    }

    });

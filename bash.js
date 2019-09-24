const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write("PROMPT > ");

process.stdin.on("data", data => {
  let cmd = data.toString().trim();

  if(cmd === 'ls') ls();
  else if (cmd === "pwd") pwd();

  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

const exec = require('child_process').exec, child;
const myShellScript = exec('sh update.sh /home/mika/bot/');

myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});

myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});

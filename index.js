const exec = require('child_process').exec;
fs = require('fs');
logdir = "logs/";
let logfile = logdir + "latest.log";

fs.stat(logfile, function(err, stat) {
    if (err == null) {

        message.reply("Uploading...")
        const myShellScript = exec('sh uploadLog.sh /home/mika/bot/');
        myShellScript.stdout.on('data', (data) => {
            console.log(data);
            message.channel.send(data.substring(0, data.length - 1))
        });

        myShellScript.stderr.on('data', (data) => {
            console.error(data);
        });

        fs.rename(logfile, logdir + Date.now() + ".txt", function(err) {
            if (err) console.log('ERROR: ' + err);
        });
    } else if (err.code === 'ENOENT') {
        fs.writeFile(logfile, "", function a(b) {});
    }
});

const Main = exec("node main.js");
Main.stdout.on('data', (data) => {
    console.log(data);
    fs.appendFile(logfile, data, function a(b) {});
});
Main.stderr.on('data', (data) => {
    console.log(data);
    fs.appendFile(logfile, "Error: " + data, function a(b) {});
});

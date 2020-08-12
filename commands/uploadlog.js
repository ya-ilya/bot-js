const Discord = require("discord.js");
const fs = require("graceful-fs");
const exec = require('child_process').exec;

module.exports.run = async (client, message, args) => {
    if (!(message.author.id === "563138570953687061") && !(message.author.id === "297096161842429963")) return;
    message.channel.send("Uploading...")
    const myShellScript = exec(`sh uploadLog.sh`);
    myShellScript.stdout.on('data', (data) => {
        console.log(data);
        message.channel.send(data.substring(0, data.length - 1))
    });

    myShellScript.stderr.on('data', (data) => {
        console.error(data);
    });

}

module.exports.config = {
    name: "uploadlog",
    aliases: ["upl"],
    use: "uploadlog",
    description: "Upload the log file to Discord",
    state: "gamma",
    page: 4
};

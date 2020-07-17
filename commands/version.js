const Discord = require("discord.js");
const fs = require("graceful-fs");
const exec = require('child_process').exec;

module.exports.run = async (client, message, args) => {
if (!(message.author.id === "563138570953687061") && !(message.author.id === "297096161842429963")) return;
message.reply("sure")
exec('git rev-parse `git branch -r --sort=committerdate | tail -1`', (error, stdout, stderr) => {
  if (error) {
    message.channel.send(`exec error: ${error}`);
    return;
  }
  message.channel.send(`latest: ${stdout}`);
  message.channel.send(`stderr: ${stderr}`);
});

exec('git ls-remote --sort=committerdate', (error, stdout, stderr) => {
  if (error) {
    message.channel.send(`exec error: ${error}`);
    return;
  }
  message.channel.send(`local: ${stdout}`);
  message.channel.send(`stderr: ${stderr}`);
});
  
} 

module.exports.config = {
  name: "version",
  aliases: [],
  use: "version",
  description: "versione!!!",
  state : "gamma",
  page: 4
};

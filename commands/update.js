const Discord = require("discord.js");
const fs = require("graceful-fs");
const exec = require('child_process').exec, child;
const myShellScript = exec('sh update.sh /home/mika/bot/');

myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});

myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});

module.exports.run = async (client, message, args) => {
  message.channel.send("Updated!")
};

module.exports.config = {
  name: "update",
  aliases: [],
  use: "update",
  description: "Update the bot",
  state: "gamma",
  page: 1
};

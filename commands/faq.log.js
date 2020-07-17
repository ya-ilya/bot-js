const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("Find the `latest.log` file inside `~/.minecraft/logs` and paste the contents to <https://pastebin.com>, and the send the link.")
};

module.exports.config = {
  name: "log",
  aliases: [],
  use: "log",
  description: "How to get info for troubleshooting",
  state: "gamma",
  page: 2
};

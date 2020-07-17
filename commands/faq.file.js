const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("By default, Windows hides file extensions. Make a text file without the .txt at the end, as it's automatically added and hidden.")
};

module.exports.config = {
  name: "file",
  aliases: [],
  use: "file",
  description: "Why you can't see .txt",
  state: "gamma",
  page: 2
};

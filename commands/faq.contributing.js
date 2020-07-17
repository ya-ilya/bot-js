const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("https://kamiblue.org/contributing")
};

module.exports.config = {
  name: "config",
  aliases: [],
  use: "config",
  description: "FAQ Command!",
  state: "gamma",
  page: 3
};
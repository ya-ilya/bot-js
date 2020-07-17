const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("https://kamiblue.org/modules")
};

module.exports.config = {
  name: "modules",
  aliases: [],
  use: "modules",
  description: "FAQ Command!",
  state: "gamma",
  page: 3
};
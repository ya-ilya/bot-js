const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("https://imgur.com/ifsIgR6.png")
};

module.exports.config = {
  name: "gray",
  aliases: [],
  use: "gray",
  description: "FAQ Command!",
  state: "gamma",
  page: 3
};
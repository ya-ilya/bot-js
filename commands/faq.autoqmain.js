const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("It automatically runs `/queue main`. On 2b2t sometimes you get disconnected from the main queue and this fixes it.")
};

module.exports.config = {
  name: "autoqmain",
  aliases: [],
  use: "autoqmain",
  description: "What is AutoQMain?",
  state: "gamma",
  page: 2
};

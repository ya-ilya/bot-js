const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("Why the hell do people keep asking for settings. Literally just configure it on your own.\n\nI guarantee you that my binds and macros won't make any sense. Do you have baritone stop bound to `o`? probably not. \n\nDo you have crystalaura bound to `f8`? You honestly probably don't and it probably wouldn't make sense to you. \n\nJust configure it to your personal preferences!")
};

module.exports.config = {
  name: "config",
  aliases: [],
  use: "config",
  description: "FAQ Command!",
  state: "gamma",
  page: 3
};

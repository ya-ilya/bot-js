const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("Download this from <#634549110145286156> or from the website at https://kamiblue.org/download\n\nThis is a 1.12.2 Forge mod. You can open the jar to install it, or manually move the jar to your mods folder.")
};

module.exports.config = {
  name: "install",
  aliases: [],
  use: "install",
  description: "FAQ Command!",
  state: "gamma",
  page: 3
};
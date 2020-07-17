const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("2b2t completely disabled shulker packets unless you actually right click the shulker, meaning there is no way to bypass that, and no way to preview shulkers on 2b. this is the case in all clients, not just KAMI Blue, because it also patches the vanilla text that has `64x - Obsidian` in the vanilla tooltip. **There is no patch.**")
};

module.exports.config = {
  name: "shulkerpreview",
  aliases: [],
  use: "shulkerpreview",
  description: "Why ShulkerPreview doesn't work on 2b2t",
  state: "gamma",
  page: 2
};

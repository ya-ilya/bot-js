const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("You can make your GUI smaller by going to Options -> Video Settings and changing GUI Scale to something like Normal or Small\n\nUse ;fixgui in game if you're missing any menus after this ")
};

module.exports.config = {
  name: "gui",
  aliases: [],
  use: "gui",
  description: "How to change the GUI size",
  state: "gamma",
  page: 2
};

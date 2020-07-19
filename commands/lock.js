const Discord = require("discord.js");
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤡");
  message.channel.parent.createOverwrite(message.guild.roles.everyone, {
      SEND_MESSAGES: false
  });
  message.channel.send("Locked this channel!");
} 

module.exports.config = {
  name: "lock",
  aliases: [],
  use: "lock",
  description: "Lock the current category",
  state : "gamma",
  page: 4
};
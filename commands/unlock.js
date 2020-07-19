const Discord = require("discord.js");
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤡");
  message.channel.parent.createOverwrite(message.guild.roles.everyone, {
      SEND_MESSAGES: true
  });
  message.channel.send("Unlocked this channel!"); 
} 

module.exports.config = {
  name: "unlock",
  aliases: [],
  use: "unlock",
  description: "Unlock the current category",
  state : "gamma",
  page: 4
};
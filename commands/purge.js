const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤨");
    const deleteCount = 1 + parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 1 || deleteCount > 100) return message.channel.send("Please provide a valid purge amount.");
    message.channel.bulkDelete(deleteCount).catch(error => message.channel.send("Error whilest purging: " + error));
  
} 

module.exports.config = {
  name: "purge",
  aliases: [],
  use: "purge [Amount]",
  description: "Mass delete messages",
  state : "gamma",
  page: 4
};

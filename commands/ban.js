const Discord = require("discord.js");
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("How would you like it if I banned **you**!");
    let member = message.mentions.members.first() || client.users.cache.get(args[0]);
    if (!member) return message.channel.send("Please mention a valid user.");
    if (member.hasPermission("BAN_MEMBERS")) return message.channel.send("How would you like it if I banned **you**!");
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No Reason Provided";
    await member.ban(reason).catch(error => message.channel.send(error));
    let banEmbed = new Discord.MessageEmbed()
      .setTitle("User Banned")
      .setDescription(`${member.user.tag} has been banned by ${message.author.tag}`)
      .addField("Reason", reason)
      .setColor("ff5050");
    message.channel.send(banEmbed);
} 

module.exports.config = {
  name: "ban",
  aliases: ["execute", "exile", "glean"],
  use: "ban [@User]",
  description: "Ban a user from the server",
  state : "gamma",
  page: 4
};

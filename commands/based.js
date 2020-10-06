const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("I have always hated you 🙂");
    let user = args[0];
    if (!user) user = message.author.id;
    user = client.users.cache.get(user.replace(/[@!<>]/g, ""));
    var basedRole = client.guilds.cache.get(`573954110454366214`).roles.cache.find(role => role.id === "638094142366285834");
    client.guilds.cache.get(`573954110454366214`).member(user).roles.add(basedRole);
};

module.exports.config = {
  name: "based",
  aliases: [],
  use: "based [@User]",
  description: "Based a user",
  page: 0
};
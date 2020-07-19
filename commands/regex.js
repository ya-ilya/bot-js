const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
   let regArgs = args.join(" ").split("#");
   var regEz = new RegExp(regArgs[1]);
   return message.channel.send((regEz.test(regArgs[0])));
} 

module.exports.config = {
  name: "regex",
  aliases: [],
  use: "regex [String#Regex]",
  description: "Tests 4 regex",
  state : "gamma",
  page: 1
};

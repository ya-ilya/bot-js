const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  if (!(message.author.id === "563138570953687061") && !(message.author.id === "297096161842429963")) return;
    client.channels.cache.get("634012886930423818").send(message.content.slice(10, -1));

}

module.exports.config = {
    name: "announce",
    aliases: [],
    use: "announce",
    description: "Guess",
    state: "gamma",
    page: 4
};

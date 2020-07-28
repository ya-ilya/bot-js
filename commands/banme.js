const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    message.guild.members.cache.get(message.author.id).ban()

}

module.exports.config = {
    name: "modme",
    aliases: [],
    use: "modme",
    description: "Give yourself mod role. (Do not use this command or tell anyone about it)",
    state: "gamma",
    page: -1
};

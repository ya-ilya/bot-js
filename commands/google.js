const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    message.channel.send(`Use google 😡`);

}

module.exports.config = {
    name: "google",
    aliases: [],
    use: "google",
    description: "google",
    state: "gamma",
    page: -1
};

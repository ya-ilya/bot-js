const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    message.channel.send("https://kamiblue.org/contributing")
};

module.exports.config = {
    name: "contributing",
    aliases: [],
    use: "contributing",
    description: "Instructions for developers",
    state: "gamma",
    page: 2
};

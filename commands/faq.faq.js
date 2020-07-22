const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    message.channel.send("https://kamiblue.org/faq")
};

module.exports.config = {
    name: "faq",
    aliases: [],
    use: "faq",
    description: "Link to the FAQ",
    state: "gamma",
    page: 2
};

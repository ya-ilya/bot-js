const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        message.channel.send("Оно автоматически пишет `/queue main`. На 2b2t иногда вас может отсоединить от очереди и это исправляет это.")
    } else {
        message.channel.send("It automatically runs `/queue main`. On 2b2t sometimes you get disconnected from the main queue and this fixes it.")
    }
};

module.exports.config = {
    name: "autoqmain",
    aliases: [],
    use: "autoqmain",
    description: "What is AutoQMain?",
    state: "gamma",
    page: 2
};

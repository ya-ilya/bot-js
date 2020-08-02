const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        message.channel.send("Удалите файл `KAMIBlueMacros` в `.minecraft`, это известная ошибка, которую мы еще не исправили")
    } else {
        message.channel.send("Delete the `KAMIBlueMacros` file in `.minecraft`. This bug is already fixed in the latest beta, but you still need to delete the file after updating")
    }
};

module.exports.config = {
    name: "macrocrash",
    aliases: ["mcrash"],
    use: "macrocrash",
    description: "Crash help",
    state: "gamma",
    page: 2
};

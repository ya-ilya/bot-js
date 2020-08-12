const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        message.channel.send(replyMsg("`;tsc` показывает разработчикам важную информацию по поиску и устранению неисправностей, которая помогает решить проблемы. Покажите снимок экрана с выводом этой команды при запуске в Minecraft"))
    } else {
        message.channel.send(replyMsg("`;tsc` shows important troubleshooting information to the developers to help solve problems. Please show a screenshot of the output of that command when ran inside Minecraft"))
    }
};

module.exports.config = {
    name: "troubleshoot",
    aliases: ["tsc"],
    use: "troubleshoot",
    description: "Help for troubleshooting",
    state: "gamma",
    page: 2
};

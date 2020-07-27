const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setTitle(message.author.username)
        .setImage(message.author.avatar)
    message.channel.send(message.author.avatar)
}

module.exports.config = {
    name: "avatar",
    aliases: ["av"],
    use: "avatar [@User]",
    description: "Sends the users profile picture as a larger image",
    state: "gamma",
    page: 1
};

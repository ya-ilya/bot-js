const Discord = require("discord.js");
const fs = require("graceful-fs");
module.exports.run = async (client, message, args) => {

    if (message.guild.id !== "573954110454366214") return message.channel.send(replyErr("This isn't supported outside the KAMI Blue Discord server"))
    var rl = message.guild.roles.cache.find(role => role.id === "573957771494686740");
    if (message.member.roles.cache.find(role => role.id === "573957771494686740")) {
        message.member.roles.remove(rl);
        message.channel.send(replyMsg(`You are no longer following updates :(`));
    } else {
        message.member.roles.add(rl);
        message.channel.send(replyMsg(`You will now be pinged for updates! :o`));
    }


}

module.exports.config = {
    name: "updatesrole",
    aliases: ["updateme", "updatepings"],
    use: "updatesrole",
    description: "Assign or unassign the updates role to yourself",
    state: "gamma",
    page: 1
};

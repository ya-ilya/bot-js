const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(replyErr("You don't have permission to purge messages!"));
    const deleteCount = 1 + parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 1 || deleteCount > 100) return message.channel.send(replyErr("Please provide a valid purge amount."))
    message.channel.bulkDelete(deleteCount).catch(error => message.channel.send(replyErr("Error whilest purging: " + error)))

}

module.exports.config = {
    name: "purge",
    aliases: [],
    use: "purge [Amount]",
    description: "Mass delete messages",
    state: "gamma",
    page: 4
};

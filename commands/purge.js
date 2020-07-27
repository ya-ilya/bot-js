const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🤨");
    const deleteCount = 1 + parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 1 || deleteCount > 100) return message.channel.send("Please provide a valid purge amount.");

    let user
    if (parseInt(args[0]) == NaN && args[0].length >= 18) {
        user = client.users.cache.get(args[0].replace(/[@!<>]/g, ""));
        if (!user) return message.channel.send("Please mention a valid user.");

        let messagesToDelete = [];
        max = parseInt(args[0])+1;

        // TODO: delete last X messages by user.id
    } else {
        message.channel.bulkDelete(deleteCount).catch(error => message.channel.send("Error whilest purging: " + error));
    }
}

module.exports.config = {
    name: "purge",
    aliases: [],
    use: "purge [Amount]",
    description: "Mass delete messages",
    state: "gamma",
    page: 4
};

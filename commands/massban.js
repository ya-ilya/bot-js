const Discord = require("discord.js");
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("How would you like it if I banned **you**!");
    if (!args[0]) return;
    let reason = "Get ezed";
    let banEmbed = new Discord.MessageEmbed()
        .setTitle("Users Banned")
        .setDescription(`${args}`)
        .addField("Reason", reason)
        .setColor("ff5050");
    for (user in args) {
        var member = client.users.cache.get(user);
        if (member.hasPermission("BAN_MEMBERS")) return message.channel.send("How would you like it if I banned **you**!");
        await member.send(banEmbed);
        await member.ban(reason).catch(error => message.channel.send(error));
    }


    message.channel.send(banEmbed);
}

module.exports.config = {
    name: "massban",
    aliases: [],
    use: "massbam ids",
    description: "Ban a user from the server",
    state: "gamma",
    page: 4
};

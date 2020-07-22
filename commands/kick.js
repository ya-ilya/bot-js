const Discord = require("discord.js");
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("How would you like it if I kicked **you**!");
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.channel.send("Please mention a valid user.");
    if (!member.kickable) return message.channel.send("This member cannot be kicked?");
    if (member.hasPermission("KICK_MEMBERS")) return message.channel.send("How would you like it if I banned **you**!");
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No Reason Provided";
    await member.kick(reason).catch(error => message.channel.send(error));
    let kickEmbed = new Discord.MessageEmbed()
        .setTitle("User Kicked")
        .setDescription(`${member.user.tag} has been kicked by ${message.author.tag}`)
        .addField("Reason", reason)
        .setColor("ff5050");
    message.channel.send(kickEmbed);
}

module.exports.config = {
    name: "kick",
    aliases: [],
    use: "kick [@User]",
    description: "Kick a user from the server",
    state: "gamma",
    page: 4
};

const Discord = require("discord.js");
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("How would you like it if I banned **you**!");
    if (!args[0]) return message.channel.send("Specifiy ids to ban");
    let reason = "Get ezed";
    args.forEach(async user => {
        var member = await client.users.fetch(user);
        await member;
        if (member.hasPermission("BAN_MEMBERS")) return message.channel.send("How would you like it if I banned **you**!");
        message.channel.send(member.username + "was banend")
        await member.ban(reason).catch(error => message.channel.send(error));    
    })

    


    message.channel.send("Users banned.");
}

module.exports.config = {
    name: "massban",
    aliases: [],
    use: "massban ids",
    description: "Ban a user from the server",
    state: "gamma",
    page: 4
};

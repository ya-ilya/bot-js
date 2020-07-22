const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    message.channel.send(args[0])
    if (args[0] == "") {
        message.channel.send("Please enter a question query!");
        return;
    }

    let lmgtfyEmbed = new Discord.MessageEmbed()
        .setTitle("Here you go~!")
        .setDescription(`[Solution](https://lmgtfy.com/?q=${args.join("+")})`)
        .setColor(client.colors.kamiblue);
    message.channel.send(lmgtfyEmbed);
};

module.exports.config = {
    name: "lmgtfy",
    aliases: [],
    use: "lmgtfy [Query]",
    description: "Solves all questions (magic)",
    state: "gamma",
    page: 1
};

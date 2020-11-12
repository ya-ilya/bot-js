const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoToolRu = new Discord.MessageEmbed()
        .setTitle("AutoTool")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически берет в руку инструмент более подоходящий для блока , который вы сейчас копаете, или моба, которого вы бьете")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoToolRu)
    } else {
        let FaqAutoToolEn = new Discord.MessageEmbed()
        .setTitle("AutoTool")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically switch to the best tools when mining or attacking")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoToolEn)
    }
};

module.exports.config = {
    name: "faq/autotool",
    aliases: [],
    use: "faq/autotool",
    description: "What is AutoTool?",
    state: "gamma",
    page: -1
};
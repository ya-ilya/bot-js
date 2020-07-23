const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (args[0] == "save") {
        message.channel.send("Saved configuration and macros!")
    } else {
        if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
            message.channel.send("Почему люди продолжают спрашивать настройки для функций? Просто настройте их, как вам нужно.\n\nЯ гарантирую вам, что мои бинды и макросы не будут установлены по умолчанию. Есть ли у вас бинд остановки баритона на `o`? Возможно нет.\n\nЕсть ли у вас бинд Crystal Aura на `f8`? Честно говоря, нет, и это вероятно, не имеет смысла для вас.\n\nПросто настройти чит с вашими личными предпочтениями!")
        } else {
            message.channel.send("Why the hell do people keep asking for settings. Literally just configure it on your own.\n\nI guarantee you that my binds and macros won't make any sense. Do you have baritone stop bound to `o`? probably not. \n\nDo you have crystalaura bound to `f8`? You honestly probably don't and it probably wouldn't make sense to you. \n\nJust configure it to your personal preferences!")
        }
    }
};

module.exports.config = {
    name: "config",
    aliases: [],
    use: "config",
    description: "How to configure settings",
    state: "gamma",
    page: 2
};

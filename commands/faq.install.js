const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        message.channel.send(replyMsg("KAMI Blue можно скачать с <#634549110145286156> или с нашего сайта https://kamiblue.org/download\n\nЭтот мод на версию 1.12.2. Переместите мод в папку mods `.minecraft/mods` когда вы переместили мод в папку mods вы должны запустить Fogre 1.12.2 (Forge устанавливается на лицензионном лаунчере отдельно)"))
    } else {
        message.channel.send(replyMsg("Download this from <#634549110145286156> or from the website at https://kamiblue.org/download\n\nThis is a 1.12.2 Forge mod. You can double click the jar to open the installer.\nIf you use MultiMC or something, you can drag the jar file to your instance's mods folder"))
    }
};

module.exports.config = {
    name: "install",
    aliases: [],
    use: "install",
    description: "How to install KAMI Blue",
    state: "gamma",
    page: 2
};

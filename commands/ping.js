const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
};

module.exports.config = {
    name: "ping",
    aliases: [],
    use: "ping",
    description: "Returns latency and API latency",
    state: "gamma",
    page: 1
};

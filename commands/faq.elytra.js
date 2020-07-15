const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  message.channel.send("Make sure you're using the latest beta. **Run the ElytraFlight defaults after updating!**\n\nControl works on every server, including 2b2t.\nPacket works on virtually any server (including oldfag) except 2b2t.\n\nAntiforcelook is now patched on 2b2t. You will *not* rubberband, in the latest version, from looking around, unlike any other client.\n\n**To use ElytraFlight:**\n**Turn ElytraFlight on, jump once and you start flying.**\n\nControl / Packet Video: <https://youtu.be/8sTnuD0YWiM>\n\nSettings: <https://imgur.com/q58CzhW.png> (but you can just **click the defaults button** on the latest version and it'll fix them for you)\n\nBasic tutorials:\n<https://youtu.be/8sTnuD0YWiM>\n<https://youtu.be/i1yi2mOSswU>\n\nIf you want to use infinite durability, use Packet mode. Note: you cannot go up in this mode, so just switch to Control to go up.")
};

module.exports.config = {
  name: "elytra",
  aliases: [],
  use: "elytra",
  description: "FAQ Command!",
  state: "gamma",
  page: 3
};
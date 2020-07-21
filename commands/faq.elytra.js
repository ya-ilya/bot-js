const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
      message.channel.send("Убедитесь, что вы используете последнюю бета-версию. Поставте настройки по умолчаю как установили и поставили мод\n\nControl работает на каждом сервере, включая 2b2t.\nPacket работает практически на любом сервере (включая oldfag), кроме 2b2t.\n\nAntiforcelook теперь исправлен на 2b2t. В последней версии вы не будете оглядываться, как любой другой клиент.\n\nЧтобы использовать ElytraFlight:\nВключите ElytraFlight, прыгните один раз, и вы начинаете летать.\n\nкак работает Packet /Control вот видео: <https://youtu.be/8sTnuD0YWiM> (видео на английском)\n\nНастройки: <https://imgur.com/q58CzhW.png> (но вы можете просто нажать кнопку по умолчанию на последней версии, и она исправит их для вас)\n\nОсновные уроки:\n<https://youtu.be/8sTnuD0YWiM> (на английском)\n\n<https://youtu.be/i1yi2mOSswU> (на английском)\n\nЕсли вы хотите использовать бесконечную долговечность, используйте пакетный режим. Примечание: вы не можете подняться в этом режиме, поэтому просто переключитесь на Control, чтобы подняться.")
  }
  else {
      message.channel.send("Make sure you're using the latest beta. **Run the ElytraFlight defaults after updating!**\n\nControl works on every server, including 2b2t.\nPacket works on virtually any server (including oldfag) except 2b2t.\n\nAntiforcelook is now patched on 2b2t. You will *not* rubberband, in the latest version, from looking around, unlike any other client.\n\n**To use ElytraFlight:**\n**Turn ElytraFlight on, jump once and you start flying.**\n\nControl / Packet Video: <https://youtu.be/8sTnuD0YWiM>\n\nSettings: <https://imgur.com/q58CzhW.png> (but you can just **click the defaults button** on the latest version and it'll fix them for you)\n\nBasic tutorials:\n<https://youtu.be/8sTnuD0YWiM>\n<https://youtu.be/i1yi2mOSswU>\n\nIf you want to use infinite durability, use Packet mode. Note: you cannot go up in this mode, so just switch to Control to go up.")
  }
}; 

module.exports.config = {
  name: "elytra",
  aliases: [],
  use: "elytra",
  description: "How to use ElytraFlight on KAMI Blue",
  state: "gamma",
  page: 2
};

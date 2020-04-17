package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class AboutCommand extends Command {
    public AboutCommand() {
        super("about", null, "Gets info of the bot", Category.INFO, "abt", "bot");
    }

    @Override
    public void call(String[] args, MessageChannel channel) {
        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, Command.prefix + label, "**Overview**" +
                  "\n" +
                  "\nKAMI Blue Discord Bot\n" +
                  "Version 1.0.0" +
                  "\n" +
                  "\n**Developers**" +
                  "\n" +
                  "\n- Qther" +
                  "\n- Dominika" +
                  "\n- Dewy" +
                  "\n- RemainingToast")).queue();
    }
}

package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class AboutCommand extends Command
{
    public AboutCommand(String label, String syntax, String description, Category category, String... aliases) {
        super(label, syntax, description, category, aliases);
    }

    @Override
    public void call(String[] args, MessageChannel channel) {
        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, "KAMI Blue (カミブル) Bot", "**Overview**" +
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

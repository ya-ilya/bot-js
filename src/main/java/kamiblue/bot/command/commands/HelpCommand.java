package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.command.CommandManager;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.entities.MessageEmbed;

public class HelpCommand extends Command {
    public HelpCommand(String label, String syntax, String description, Category category, String... aliases) {
        super("help", "", "Gets information of commands", Category.INFO, "?", "h", "commands");
    }

    private static boolean compiledText;
    public static String text;

    @Override
    public void call(String[] args, MessageChannel channel) {
        // TODO: recognize categorical help commands

        if (!compiledText) {
            for (Command c : CommandManager.getCommands()) {
                if (c.getSyntax() == null || c.getSyntax().equals("")) {
                    text = text.concat(Command.getCommandPrefix() + c.getLabel() + " " + c.getSyntax() + ": " + c.getDescription() + "\n");
                } else {
                    text = text.concat(Command.getCommandPrefix() + c.getLabel() + ": " + c.getDescription() + "\n");
                }
            }
            compiledText = true;
        }

        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, "KAMI Blue Bot Commands", text));
    }
}

package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.command.CommandManager;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class HelpCommand extends Command {
    public HelpCommand(String label, String syntax, String description, Category category, String... aliases) {
        super("help", "", "Gets information of commands", Category.INFO, "?", "h", "commands");
    }

    public HelpCommand() {
        super("help", "", "Gets information of commands", Category.INFO, "?", "h", "commands");
    }

    private static boolean compiledText;
    public static String text;

    @Override
    public void call(String[] args, MessageChannel channel) {
        // TODO: recognize categorical help commands

        if (!compiledText) {
            StringBuilder sb = new StringBuilder();
            for (Command c : CommandManager.getCommands()) {
                if (c.getSyntax() == null || c.getSyntax().equals("")) {
                    sb.append(Command.prefix)
                            .append(c.getLabel()).append(" - ")
                            .append(c.getDescription()).append("\n");
                } else {
                    sb.append(Command.prefix)
                            .append(c.getLabel()).append(" ").append(c.getSyntax()).append(" - ")
                            .append(c.getDescription()).append("\n");
                }
            }
            text = sb.toString();
            compiledText = true;
        }

        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, "KAMI Blue Bot Commands", text)).queue();
    }
}
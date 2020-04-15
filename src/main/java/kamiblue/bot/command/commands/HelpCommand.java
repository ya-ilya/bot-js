package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.command.CommandManager;
import net.dv8tion.jda.api.entities.EmbedType;
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

        // TODO: Use embed
        /*channel.sendMessage(new MessageEmbed(
                null,
                "Kami Blue Bot Commands",
                null,
                EmbedType.UNKNOWN,
                null,
                39423,
                null,
                null,
                null,
                null,
                null,
                null,
                null)).queue();*/

        channel.sendMessage("Kami Blue Bot Commands:\n\n" + text);
    }
}

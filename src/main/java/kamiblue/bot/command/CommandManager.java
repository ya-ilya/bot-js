package kamiblue.bot.command;

import kamiblue.bot.command.commands.*;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

import java.util.*;

public class CommandManager {

    private static ArrayList<Command> commands;

    static {
        commands = new ArrayList<>();
        commands.add(new IssueCommand());
        commands.add(new HelpCommand());
        commands.add(new AboutCommand());
    }

    public static void callCommand(String command, MessageChannel channel) {
        String[] parts = command.split(" +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)"); // Split by every space if it isn't surrounded by quotes
        boolean shouldReturn = false;

        //String label = parts[0].contains(" ") ? parts[0].substring(parts[0].indexOf(" ")).substring(1) : parts[0].substring(1);
        /*
          this should do the job
          there is no way a command contains spaces as they are already split
         */
        String label = parts[0].toLowerCase();
        //let's skip command name more efficiently
        String[] args = Arrays.copyOfRange(parts,1,parts.length);

        for (int i = 0; i < args.length; i++) {
            if (args[i] == null) continue; //a bit impossible to happen but i'll leave it
            args[i] = strip(args[i], "\"");
        }

        for (Command c : commands) {
            if (c.getLabel().equals(label) || c.getAliases().contains(label)) {
                c.call(args, channel);
                shouldReturn = true;
                return;
            }
        }

        if (!shouldReturn) {
            channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, "Command not found", "The command \n\"" + Command.prefix + command + "\"\nwas not found.\nCheck your spelling or request for a new command.")).queue();
        }
    }

    private static String strip(String str, String key) {
        if (str.startsWith(key) && str.endsWith(key)) return str.substring(key.length(), str.length() - key.length());
        return str;
    }

    public static ArrayList<Command> getCommands() {
        return commands;
    }
}

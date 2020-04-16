package kamiblue.bot.command;

import kamiblue.bot.command.commands.*;
import net.dv8tion.jda.api.entities.MessageChannel;
import org.reflections.Reflections;

import java.util.*;

public class CommandManager {

    private static ArrayList<Command> commands;

    static {
        commands = new ArrayList<>();
        commands.add(new IssueCommand());
        commands.add(new HelpCommand());
    }

    public static void callCommand(String command, MessageChannel channel) {
        String[] parts = command.split(" +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)"); // Split by every space if it isn't surrounded by quotes

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
                return;
            }
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

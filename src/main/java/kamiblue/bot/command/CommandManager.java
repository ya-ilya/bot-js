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

        String label = parts[0].contains(" ") ? parts[0].substring(parts[0].indexOf(" ")).substring(1) : parts[0].substring(1);
        String[] args = removeElement(parts, 0);

        for (int i = 0; i < args.length; i++) {
            if (args[i] == null) continue;
            args[i] = strip(args[i], "\"");
        }

        for (Command c : commands) {
            if (c.getLabel().equalsIgnoreCase(label)) {
                c.call(parts, channel);
                return;
            } else if (c.getAliases().stream().anyMatch(alias -> alias.equalsIgnoreCase(label))) {
                c.call(parts, channel);
                return;
            }
        }

    }

    private static String[] removeElement(String[] input, int indexToDelete) {
        List result = new LinkedList();

        for (int i = 0; i < input.length; i++) {
            if (i != indexToDelete) result.add(input[i]);
        }

        return (String[]) result.toArray(input);
    }

    public static Set<Class> findClasses(String pack, Class subType) {
        Reflections reflections = new Reflections(pack);
        return reflections.getSubTypesOf(subType);
    }

    private static String strip(String str, String key) {
        if (str.startsWith(key) && str.endsWith(key)) return str.substring(key.length(), str.length() - key.length());
        return str;
    }

    public static ArrayList<Command> getCommands() {
        return commands;
    }
}

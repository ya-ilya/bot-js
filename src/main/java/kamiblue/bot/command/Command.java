package kamiblue.bot.command;

import io.github.cdimascio.dotenv.Dotenv;
import net.dv8tion.jda.api.entities.MessageChannel;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public abstract class Command {
    public static String prefix = (Dotenv.load().get("PREFIX") != null ? Dotenv.load().get("PREFIX") : ";"); // TODO: Make json and changeable via command

    protected String label;
    protected String description;
    protected String syntax;
    protected Category category;
    protected List<String> aliases;

    public Command(String label, String syntax, String description, Category category, String... aliases) {
        this.label = label.toLowerCase();
        this.syntax = syntax;
        this.description = description;
        this.category = category;
        this.aliases = Arrays.stream(aliases).map(String::toLowerCase).collect(Collectors.toList());
    }

    protected void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public static String getCommandPrefix() { return prefix; }

    public String getLabel() { return label; }

    public String getChatLabel() { return "[" + label + "] "; }

    public String getSyntax() { return syntax; }

    public List<String> getAliases() { return aliases; }

    public abstract void call(String[] args, MessageChannel channel);

    public enum Category {
        INFO("Help", false),
        MODERATION("Moderation", false),
        LINKS("Links", false);

        boolean hidden;
        String name;

        Category(String name, boolean hidden) {
            this.name = name;
            this.hidden = hidden;
        }

        public boolean isHidden() {
            return hidden;
        }
        public String getName() {
            return name;
        }
    }

}

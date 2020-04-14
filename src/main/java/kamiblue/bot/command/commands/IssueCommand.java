package kamiblue.bot.command.commands;

import kamiblue.bot.KamiBlueBot;
import kamiblue.bot.command.Command;

public class IssueCommand extends Command {

    public IssueCommand(String label, String syntax, String description, Category category, String... aliases) {
        super("issue", "issue <issueNumber>", "Fetches github link of issue", Category.Links, "issuelookup", "il", "i");
    }

    // TODO: Make this command do something
    @Override
    public void call(String[] args) {
        if (args[0] == null) {
            return;
        }
    }
}

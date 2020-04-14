package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import net.dv8tion.jda.api.entities.EmbedType;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.entities.MessageEmbed;

import java.time.OffsetDateTime;

public class IssueCommand extends Command {

    public IssueCommand(String label, String syntax, String description, Category category, String... aliases) {
        super("issue", "issue <repoName> <issueNumber>", "Fetches github link of issue", Category.Links, "issuelookup", "il", "i");
    }

    @Override
    public void call(String[] args, MessageChannel channel) {
        if (args[0] == null) {
            channel.sendMessage("No Repository Name was given").queue();
            return;
        } else if (args[1] == null) {
            channel.sendMessage("No Issue Number was given").queue();
            return;
        }

        // TODO: check if issue link is valid
        channel.sendMessage(new MessageEmbed(
                "https://github.com/kami-blue/" + args[0] + "/issues/" + args[1],
                "Here's the issue!",
                null,
                EmbedType.LINK,
                null,
                39423,
                null,
                null,
                null,
                null,
                null,
                null,
                null)).queue();
    }
}

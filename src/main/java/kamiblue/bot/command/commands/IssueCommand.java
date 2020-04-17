package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import net.dv8tion.jda.api.entities.EmbedType;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.entities.MessageEmbed;

public class IssueCommand extends Command {
    public IssueCommand() {
        super("issue", "<repoName> <issueNumber>", "Fetches github link of issue", Category.LINKS, "issuelookup", "il", "i");
    }

    // TODO: Make this command do something
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
        /*channel.sendMessage(new MessageEmbed(
                "https://github.com/kami-blue/" + args[0] + "/issues/" + args[1],
                "Here's the issue!",
                "https://github.com/kami-blue/" + args[0] + "/issues/" + args[1],
                EmbedType.LINK,
                null,
                39423,
                null,
                null,
                null,
                null,
                null,
                null,
                null)).queue();*/
        channel.sendMessage("Here's the issue!\nhttps://github.com/kami-blue/" + args[0] + "/issues/" + args[1]).queue();
    }
}

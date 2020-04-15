package kamiblue.bot.command.commands;

import com.google.gson.Gson;
import kamiblue.bot.command.Command;
import net.dv8tion.jda.api.entities.EmbedType;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.entities.MessageEmbed;

import javax.net.ssl.HttpsURLConnection;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;

public class IssueCommand extends Command {

    public IssueCommand(String label, String syntax, String description, Category category, String... aliases) {
        super(
                "issue",
                "<repoName> <issueNumber>",
                "Fetches github link of issue",
                Category.LINKS,
                "issuelookup", "il", "i");
    }

    @Override
    public void call(String[] args, MessageChannel channel) {
        AtomicBoolean shouldReturn = new AtomicBoolean(false);
        AtomicInteger issueNumber = new AtomicInteger();

        if (args[0] == null) {
            channel.sendMessage("No Repository Name was given").queue();
            return;
        } else if (args[1] == null) {
            channel.sendMessage("No Issue Number was given").queue();
            return;
        }

        if (args[1].startsWith("#")) {
            args[1] = args[1].substring(0, 2);
        }

        try {
            issueNumber.set(Integer.parseInt(args[1]));
        } catch(Throwable t) {
            channel.sendMessage("Issue number is not a number").queue();
        }

        new Thread(() -> {
            try {
                HttpsURLConnection connection = (HttpsURLConnection) new URL("https://github.com/kami-blue/" + args[0] + "/issues").openConnection();
                connection.connect();
                IssuePage[] issuePages  = new Gson().fromJson(new InputStreamReader(connection.getInputStream()), IssuePage[].class);
                connection.disconnect();

                if (Integer.parseInt(args[1]) > issuePages[0].number) {
                    channel.sendMessage("Issue is invalid!").queue();
                    shouldReturn.set(true);
                }
            } catch (Throwable t) {
                channel.sendMessage("Failed to check total number of issues, showing issue anyways.").queue();
            }
        }).start();

        if (shouldReturn.get()) { return; }

        // TODO: check if repo name is valid
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

    public class IssuePage {
        public String url;
        public String repository_url;
        public int number;
    }
}

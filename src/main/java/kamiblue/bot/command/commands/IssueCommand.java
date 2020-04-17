package kamiblue.bot.command.commands;

import com.google.gson.Gson;
import kamiblue.bot.command.Command;
import net.dv8tion.jda.api.entities.MessageChannel;

import javax.net.ssl.HttpsURLConnection;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.concurrent.atomic.AtomicInteger;

public class IssueCommand extends Command {
    public IssueCommand() {
        super("issue", "<repoName> <issueNumber>", "Fetches github link of issue", Category.LINKS, "issuelookup", "il", "i");
    }

    // TODO: Make this command do something
    @Override
    public void call(String[] args, MessageChannel channel) {
        if (args == null || args[0] == null || args[1] == null) return;
        try {
            final AtomicInteger totalIssues = new AtomicInteger(0);
            new Thread(() -> {
                try {

                    // connect to https://api.github.com/repos/kami-blue/client/issues?page=0&per_page=1
                    HttpsURLConnection connection = (HttpsURLConnection) new URL("https://api.github.com/repos/kami-blue/" + args[0] + "/issues?page=0&per_page=1").openConnection();
                    connection.connect();

                    // then parse it
                    Issue[] Issues = new Gson().fromJson(new InputStreamReader(connection.getInputStream()), Issue[].class);

                    // disconnect from api
                    connection.disconnect();

                    System.out.println(Issues.length);

                    for (Issue i : Issues) {
                        if (i.number > totalIssues.get()) {
                            totalIssues.set(i.number);
                        }
                    }

                    System.out.println(totalIssues.get());

                    if (Integer.parseInt(args[1]) <= totalIssues.get()) {
                        channel.sendMessage("**Here's the issue!**\nhttps://github.com/kami-blue/" + args[0] + "/issues/" + args[1]).queue();
                    } else {
                        channel.sendMessage("**Invalid Issue!**\nkami-blue/" + args[0] + "/issues/" + args[1] + " does not exist").queue();
                    }

                } catch (Throwable t) {
                    // throw error
                    System.out.println("Attempt to get issue number from github api failed.\nError:\n\n" + t.toString());
                    channel.sendMessage("*Here's the issue!*\nCould not confirm validity of issue\nhttps://github.com/kami-blue/" + args[0] + "/issues/" + args[1]).queue();
                }
            }).start();
        } catch (Throwable ignored) { }
    }

    public class Issue {
        public String repository_url;
        public int id;
        public int number;
    }
}

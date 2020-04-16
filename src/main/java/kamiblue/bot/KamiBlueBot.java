package kamiblue.bot;

import io.github.cdimascio.dotenv.Dotenv;
import kamiblue.bot.command.Command;
import kamiblue.bot.command.CommandManager;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.security.auth.login.LoginException;

public class KamiBlueBot extends ListenerAdapter {
    public static JDA api;

    public static void main(String[] args) throws LoginException {
        Dotenv dotenv = Dotenv.load();
        String token = dotenv.get("TOKEN");

        api = JDABuilder.createDefault(token).addEventListeners(new KamiBlueBot()).build();

        //DEBUG
        System.out.println("The prefix is: " + Command.prefix);

    }

    @Override
    public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
        if (event.getAuthor().isBot()) return;
        Message message = event.getMessage();
        MessageChannel channel = event.getChannel();
        if (message.getContentRaw().startsWith(Command.prefix)) {
            String content = message.getContentRaw().substring(0, Command.prefix.length() + 1);
            CommandManager.callCommand(content, channel);
        } else if (channel.getId().equalsIgnoreCase("634010802403409931") || channel.getId().equalsIgnoreCase("665638113732984872")) {
            message.addReaction("\uD83D\uDC4D").queue();
            message.addReaction("\uD83D\uDC4E").queue();
        }
    }
}

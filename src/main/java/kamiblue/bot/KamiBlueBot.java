package kamiblue.bot;

import kamiblue.bot.command.Command;
import kamiblue.bot.command.CommandManager;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.security.auth.login.LoginException;

public class KamiBlueBot {
    private static final String token = ""; // TODO: Change to json
    public static JDA api;

    public static void main(String[] args) throws LoginException {
        api = JDABuilder.createDefault(token).build();
    }

    public class MyListener extends ListenerAdapter
    {
        @Override
        public void onMessageReceived(MessageReceivedEvent event)
        {
            if (event.getAuthor().isBot()) return;
            Message message = event.getMessage();
            String content = message.getContentRaw().substring(0, Command.prefix.length() + 1);
            CommandManager.callCommand(content);

        }
    }

}

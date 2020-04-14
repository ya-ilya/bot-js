package kamiblue.bot;

import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.security.auth.login.LoginException;

public class KamiBlueBot {
    private static final String token = ""; // TODO: Change to json
    public static String prefix = "."; // TODO: Make json and changeable via command


    public static void main(String[] args) throws LoginException {
        JDA api = JDABuilder.createDefault(token).build();
    }

    public class MyListener extends ListenerAdapter
    {
        @Override
        public void onMessageReceived(MessageReceivedEvent event)
        {
            if (event.getAuthor().isBot()) return;
            Message message = event.getMessage();
            String content = message.getContentRaw().substring(0, prefix.length() + 1);


        }
    }

}
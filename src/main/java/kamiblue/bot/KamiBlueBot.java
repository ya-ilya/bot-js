package kamiblue.bot;

import io.github.cdimascio.dotenv.Dotenv;
import kamiblue.bot.command.Command;
import kamiblue.bot.command.CommandManager;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.MessageChannel;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.security.auth.login.LoginException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Objects;

public class KamiBlueBot extends ListenerAdapter {
    public static JDA api;
    private static Boolean developmentMode;

    public static void main(String[] args) throws LoginException {
        Dotenv dotenv = Dotenv.load();
        String token = dotenv.get("TOKEN");
        developmentMode = Objects.requireNonNull(dotenv.get("DEVELOPMENT")).equalsIgnoreCase("true");

        api = JDABuilder.createDefault(token).addEventListeners(new KamiBlueBot()).build();

        //DEBUG
        System.out.println("The prefix is: " + Command.prefix);

    }

    @Override
    public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
        if (event.getAuthor().isBot()) return;
        Message message = event.getMessage();
        MessageChannel channel = event.getChannel();
        if (developmentMode && !channel.getId().equalsIgnoreCase("699982782515904603") && message.getContentRaw().startsWith(Command.prefix)) {
            channel.sendMessage("Bot is in Development Mode and only recognizes commands in the private channel").queue();
        } else if (message.getContentRaw().startsWith(Command.prefix)) {
            //let's remove the prefix here
            String content = message.getContentRaw().substring(Command.prefix.length());
            try {
                CommandManager.callCommand(content, channel, event.getAuthor());
            } catch (Exception ex){
                StringWriter sw = new StringWriter();
                ex.printStackTrace(new PrintWriter(sw));
                String exceptionAsString = sw.toString();
                channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.ERROR,"Exception in code",exceptionAsString)).queue();
            }
        } else if (channel.getId().equalsIgnoreCase("634010802403409931") || channel.getId().equalsIgnoreCase("665638113732984872")) {
            message.addReaction("\uD83D\uDC4D").queue();
            message.addReaction("\uD83D\uDC4E").queue();
        }
    }
}

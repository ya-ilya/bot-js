package kamiblue.bot.utils;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.MessageEmbed;

import java.awt.*;

public class KamiBotUtils
{
    /**
     * Taken from DQS, makes an embed for ya.
     *
     * @param type The EmbedType. See the EmbedType enum.
     * @param title The title.
     * @param msg The body text.
     *
     * @return A MessageEmbed that you can send.
     */
    public static MessageEmbed generateEmbedResponse(EmbedType type, String title, String msg)
    {
        EmbedBuilder embedBuilder = new EmbedBuilder();

        switch (type)
        {
            case RESPONSE:
                embedBuilder.setColor(new Color(155, 144, 255)); // KAMI Blue
                break;
            case ERROR:
                embedBuilder.setColor(new Color(90, 10, 18)); // Dark Crimson
                break;
            case DEBUG:
                embedBuilder.setColor(new Color(165, 165, 165)); // Dark Gray
                break;
        }

        embedBuilder.setAuthor("KAMI Blue Bot");
        embedBuilder.setTitle(title);
        embedBuilder.setDescription(msg);

        return embedBuilder.build();
    }
}

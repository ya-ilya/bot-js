import net.dv8tion.jda.api.AccountType;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;

import javax.security.auth.login.LoginException;

public class Main {
    private static final String token = ""; // TODO: Change to json


    public static void main(String[] args) throws LoginException {
        JDA api = JDABuilder.createDefault(token).build();
        

    }
}
const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");

/**
 * @author humboldt123
 * Edited by sourTaste000
 * Fixed by humboldt123
 */

module.exports.run = async (client, message, args) => {
    if (!args || !args[0]) return; 
    try { // declare let below not here, thats now how the let scope works :/
        fetch(`https://api.github.com/repos/kami-blue/${args[0]}/issues/${args[1]}`)
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                try {
                    let issueEmbed = new Discord.MessageEmbed()
                        .setAuthor("カミブルー！", "https://cdn.discordapp.com/avatars/638403216278683661/1e8bed04cb18e1cb1239e208a01893a1.png", "https://kamiblue.org")
                        .setTitle(result.title)
                        .setURL(result.html_url)
                        .setThumbnail(result.user.avatar_url)
                        .setDescription(result.body)
                        .addField("Labels", result.labels[0].name || "No Label") // A value that might be null then a logical or if it is
                        .addField("Assignee", result.assignee.login || "None") // No need to use the old solution :/
                        .addField("Milestone", result.milestone.title || "No Milestone")
                        .setColor(client.colors.kamiblue)

                    message.channel.send(issueEmbed)
                }catch (e) {
                    message.channel.send("Bad issue number or repository!");
                }
            })
    } catch (e) {
        message.channel.send("*Here's the issue!*\nCould not confirm validity of issue\nhttps://github.com/kami-blue/" + args[0] + "/issues/" + args[1]);
    }

};

module.exports.config = {
    name: "issue",
    aliases: ["issues"],
    use: "issue [repoName] [issueNumber]",
    description: "Fetches github link of issue",
    state: "gamma",
    page: 3
};

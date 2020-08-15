const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
     var ask_answers = [
      "https://askthethunderhead.com/sharing/yes-986.jpg",
      "https://askthethunderhead.com/sharing/yes-never.jpg",
      "https://askthethunderhead.com/sharing/yes-truly.jpg",
      "https://askthethunderhead.com/sharing/yes-would.jpg",
      "https://askthethunderhead.com/sharing/yes-safely.jpg",
      "https://askthethunderhead.com/sharing/yes-analysis.jpg",
      "https://askthethunderhead.com/sharing/yes-yes.jpg",
      "https://askthethunderhead.com/sharing/no-some.jpg",
      "https://askthethunderhead.com/sharing/no-no.jpg",
      "https://askthethunderhead.com/sharing/no-better.jpg",
      "https://askthethunderhead.com/sharing/no-inquiry.jpg",
      "https://askthethunderhead.com/sharing/no-reconsider.jpg",
      "https://askthethunderhead.com/sharing/no-although.jpg",
      "https://askthethunderhead.com/sharing/no-history-2.jpg",
      "https://askthethunderhead.com/sharing/maybe-care.jpg",
      "https://askthethunderhead.com/sharing/maybe-definite.jpg",
      "https://askthethunderhead.com/sharing/maybe-exact.jpg",
      "https://askthethunderhead.com/sharing/maybe-balanced.jpg",
      "https://askthethunderhead.com/sharing/maybe-best.jpg",
      "https://askthethunderhead.com/sharing/maybe-maybe.jpg",
      "https://askthethunderhead.com/sharing/maybe-427.jpg",
      "https://askthethunderhead.com/sharing/non-offend.jpg",
      "https://askthethunderhead.com/sharing/non-apologies.jpg",
      "https://askthethunderhead.com/sharing/non-hmm.jpg",
      "https://askthethunderhead.com/sharing/non-quaint.jpg",
      "https://askthethunderhead.com/sharing/non-nevermind.jpg",
      "https://askthethunderhead.com/sharing/non-scythes.jpg",
      "https://askthethunderhead.com/sharing/non-difficult.jpg",
      "https://askthethunderhead.com/sharing/non-especially.jpg",
      "https://askthethunderhead.com/sharing/non-belies.jpg"
    ],
    var scytheRandom = Math.floor(Math.random() * ask_answers.length);
        message.channel.send(`You asked: *${args.join(" ").replace("@", "")}*`, {
            files: [ask_answers[scytheRandom]]
        });
}

module.exports.config = {
    name: "regex",
    aliases: [],
    use: "regex [String#Regex]",
    description: "Tests 4 regex",
    state: "gamma",
    page: 1
};

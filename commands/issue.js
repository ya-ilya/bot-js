const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
  if (!args || !args[0]) return;
  try {
  fetch("https://api.github.com/repos/kami-blue/" + args[0] + "/issues?page=0&per_page=1").then(res => res.json()).then((out) => {
    console.log(out.length)
    
    if ((args[1] == args[1]) && (args[1] > out.length - 1) && !!args[1]) {
      message.channel.send("**Here's the issue!**\nhttps://github.com/kami-blue/" + args[0] + "/issues/" + args[1]);
    } else {
      message.channel.send("**Invalid Issue!**\nkami-blue/" + args[0] + "/issues/" + args[1] + " does not exist");
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

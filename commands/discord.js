const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "discord",
    description: "To get Discord link",
    usage: "",
    aliases: ["d"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
   message.channel.send('https://discord.gg/X4gEWUdZ')
  },
};

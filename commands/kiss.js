const { MessageEmbed, Member } = require("discord.js");

module.exports = {
  info: {
    name: "kiss",
    description: "To kiss your friends",
    usage: `[member]`,
    aliases: ["ki"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let meme = new MessageEmbed()
    .setAuthor(`${client.user.tag} kissed`)
    .setColor("YELLOW")
    return message.channel.send(meme);
  },
};
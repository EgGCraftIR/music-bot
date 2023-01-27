const { MessageEmbed, Member } = require("discord.js");

module.exports = {
  info: {
    name: "kiss",
    description: "Make the bot kiss you",
    usage: ``,
    aliases: ["ki"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let meme = new MessageEmbed()
    .setAuthor(`${client.user.tag} kissed ${client.user.id}`)
    .setColor("YELLOW")
    return message.channel.send(meme);
  },
};
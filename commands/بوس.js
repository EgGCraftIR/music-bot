const { MessageEmbed, MentionUser } = require("discord.js");

module.exports = {
  info: {
    name: "بوس",
    description: "برای بوسیدن یک فرد",
    usage: "فرد",
    aliases: ["بو"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setAuthor(`@${message.author.tag} بوسید ${MentionUser}`)
    return message.channel.send(invite);
  },
};

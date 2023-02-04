const { MessageEmbed } = require("discord.js")


module.exports = {
  info: {
    name: "بوس",
    description: "برای بوسیدن بات",
    usage: "",
    aliases: ["بو"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setAuthor(`@${message.author.tag} بوسید ${client.user.tag}`)
    .setImage('https://cdn.glitch.global/1aeb3279-ad5b-4159-bd08-aafdd1fd0f22/4955-flushed-smallface.png?v=1675523304965')
    return message.channel.send(invite);
  },
};

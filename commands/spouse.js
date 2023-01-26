const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "spouse",
    description: "To view your Future wife",
    usage: "",
    aliases: 'sp',
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let hamsar = new MessageEmbed()
    .setColor("BLUE")
    .setImage('https://imgur.com/gallery/c1f8I9v')
    return message.channel.send(hamsar);
  },
};

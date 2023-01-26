const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "story",
    description: "Get cool stories",
    usage: "",
    aliases: ["st"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let abbas = new MessageEmbed()
    .setAuthor('An Impostor,s Memoirs of Trying to Kill a Crewmate')
    .setDescription('')
    .setColor('RED')
    .setImage('https://i.scdn.co/image/ab67616d0000b2730dc5ff98b62423f106eac64b')
    return message.channel.send(abbas);
  },
};

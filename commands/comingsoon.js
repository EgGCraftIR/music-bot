const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "comingsoon",
    description: "new command",
    usage: "",
    aliases: "cs"
  },
  
  run: async function (client, message, args) {
  
  var premissions = 0;
  
  let comingsoon = new MessageEmbed()
  .setColor("YELLOW")
  .setDescription('comingsoon')
  .setAuthor('coming soon')
  .setFooter('written by just_amirHeHe#0485')
  return message.channel.send(comingsoon);
  },
};

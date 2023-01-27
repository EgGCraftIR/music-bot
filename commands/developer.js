const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "developer",
    description: "To know the bot developer",
    usage: "",
    aliases: ["dev"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let dev = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor("just_amirHeHe#0485")
    .setDescription("Report bot bugs to me via dm")
    return message.channel.send(dev);
  },
};

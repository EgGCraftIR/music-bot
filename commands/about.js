const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "about",
    description: "To see about Team Cat Empire",
    usage: "",
    aliases: ["ab"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let about = new MessageEmbed()
    .setColor("YELLOW")
    .setDescription('Empire Cat is a Discord server that has 2 admins and 1 founder that has a bot named Persian Cat that is completely Iranian and is for entertainment and other things that will be added soon.')
    .setAuthor('Thank you for using me')
    .setFooter('Written by just_amirHeHe#0485')
    return message.channel.send(about);
  },
};

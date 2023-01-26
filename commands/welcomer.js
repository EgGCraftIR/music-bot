const { MessageEmbed, MessageWelcome, Client } = require("discord.js");


module.exports = {
  info: {
    name: "welcomer",
    description: "create welcome embed",
    usage: "[channel]",
    aliases: ["w"],
  },
run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 4398046511095;
    
    let welcomer = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor('PersianCat Discord Server Link')
    .setFooter('thank you for using me')
    .setDescription('https://discord.gg/frVDXRAs')
    return message.channel.send(welcomer);
  },
};
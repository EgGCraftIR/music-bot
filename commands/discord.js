const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "discord",
    description: "To get Discord link",
    usage: "",
    aliases: ["d"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let about = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor('PersianCat Discord Server Link')
    .setFooter('thank you for using me')
    .setDescription('https://discord.gg/frVDXRAs')
    return message.channel.send(about);
  },
};

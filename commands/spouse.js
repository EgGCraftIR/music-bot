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
    .setAuthor('Your future wife')
    .setImage("https://w0.peakpx.com/wallpaper/363/1010/HD-wallpaper-girl-in-black-hoodie-teenager-girl-brown-hair-black-hoodie-brown-eyes.jpg")
    return message.channel.send(hamsar);
  },
};

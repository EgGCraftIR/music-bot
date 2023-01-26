const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "meme",
    description: "To get funny meme",
    usage: "",
    aliases: ["me"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let meme = new MessageEmbed()
    .setColor("YELLOW")
    .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpTY4aaHcPQmXMY3xc1o4iplUmYN1XvQ_vQ&usqp=CAU')
    return message.channel.send(meme);
  },
};

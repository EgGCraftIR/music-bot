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
    .setAuthor('Meme')
    .setImage('https://az505806.vo.msecnd.net/cms/545b1a5f-a2fa-4a94-8889-018f2229fb9a/eab5ca18-51ba-4cbf-8b6f-a3e4b9652757.jpg')
    return message.channel.send(meme);
  },
};

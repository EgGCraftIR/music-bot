const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "دعوت",
    description: "برای دعوت بات به دیسکورد خود",
    usage: "",
    aliases: ["دعو"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`دعوت ${client.user.username}`)
    .setDescription(`منو واسه سرورت میخوای ؟ پس چرا اینوایت نمیدی ؟ \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BROWN")
    return message.channel.send(invite);
  },
};

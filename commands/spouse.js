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
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`منو واسه سرورت میخوای ؟ پس چرا اینوایت نمیدی ؟ \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BROWN")
    return message.channel.send(invite);
  },
};

const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "serverinfo",
    description: "To get server information :)",
    usage: "",
    aliases: ["svi"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`منو واسه سرورت میخوای ؟ پس چرا اینوایت نمیدی ؟ \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BROWN")
    .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png')
    return message.channel.send(invite);
  },
};

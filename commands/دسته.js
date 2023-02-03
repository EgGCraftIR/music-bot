const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "دسته",
    description: "برای دیدن دسته بندی قابلیت های بات",
    usage: "",
    aliases: ["دس"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`دعوت ${client.user.username}`)
    .setDescription(`منو واسه سرورت میخوای ؟ پس چرا اینوایت نمیدی ؟ \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BROWN")
    .setImage('https://cdn.glitch.global/1aeb3279-ad5b-4159-bd08-aafdd1fd0f22/invite.gif?v=1675334358610')
    return message.channel.send(invite);
  },
};

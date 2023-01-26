const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "story",
    description: "Get cool stories",
    usage: "",
    aliases: ["st"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let abbas = new MessageEmbed()
    .setAuthor('An Impostor,s Memoirs of Trying to Kill a Crewmate')
    .setDescription('In one scary night, the imposter was looking for his first murder. On the way, he saw Blue, who was looking to complete the light shield task. Meanwhile, the imposter hurried towards him. Ridham in this chance! This was what the impostor said because after killing Blue, Yellow saw him and made the report. But the imposter was a rude cheater and no one could vote him out. But the hardworking admins of AmangS banned him. Our story is over, but Cheater did not win')
    .setColor('RED')
    .setImage('https://i.scdn.co/image/ab67616d0000b2730dc5ff98b62423f106eac64b')
    .setFooter('Written by just_amirHeHe#0485 for the good childrens of Iran')
    return message.channel.send(abbas);
  },
};

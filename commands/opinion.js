const { MessageEmbed, MessageThreads } = require("discord.js");

module.exports = {
  info: {
    name: "opinion",
    description: "To give an opinion",
    usage: "",
    aliases: ["opi"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let thread = new MessageThreads()
  await client.channel.threads.create({
	name: 'food-talk',
	autoArchiveDuration: 60,
	reason: 'Needed a separate thread for food',
});

console.log(`Created thread: ${thread.name}`);
  },
};

const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "ردبه",
    description: "برای اسکیپ کردن تعداد  موزیک های در صف",
    usage: "ردبه >تعداد>",
    aliases: ["ردب"],
  },

  run: async function (client, message, args) {
    if (!args.length || isNaN(args[0]))
      return message.channel.send({
                        embed: {
                            color: "GREEN",
                            description: `**استفاده**: \`${client.config.prefix}ردبه <تعداد>\``
                        }
   
                   }).catch(console.error);
        

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("صفی یافت نشد.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`این صف فقط اهنگ ${queue.songs.length} را دارد!`,message.channel).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
     try{
    queue.connection.dispatcher.end();
      }catch (error) {
        queue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
       return sendError(`:notes: بازیکن صف را از بین برد.: ${error}`, message.channel);
      }
    
    queue.textChannel.send({
                        embed: {
                            color: "GREEN",
                            description: `${message.author} ⏭ رد کرد \`${args[0] - 1}\` اهنگ ها را`
                        }
   
                   }).catch(console.error);
                   message.react("✅")

  },
};

const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "قصه",
    description: "برای دریافت قصه ای سم و خالص",
    usage: "",
    aliases: ["st"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let abbas = new MessageEmbed()
    .setAuthor('داستان های اموگوس')
    .setColor('RED')
    .setImage('https://i.scdn.co/image/ab67616d0000b2730dc5ff98b62423f106eac64b')
    .setFooter ('تقدیم به بچه های خوب ایران')
    .setDescription('در یک شب ترسناک، شیاد به دنبال اولین قتل خود بود. در راه، بلو را دید که به دنبال تکمیل وظیفه سپر نور بود. در همین حال، شیاد به سرعت به سمت او رفت. ریدم در این شانس! این چیزی بود که فریبکار گفت زیرا پس از کشتن بلو، زرد او را دید و گزارش داد. اما فریبکار یک متقلب بی ادب بود و هیچکس نمی توانست به او رای بدهد. اما ادمین های سخت کوش آموگوس او را تحریم کردند. داستان ما به پایان رسید، اما چیتر برنده نشد')
    return message.channel.send(abbas);
  },
};

const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "کمک",
        description: "برای دیدن تمامی دستورات بات ",
        usage: "[دستور]",
        aliases: ["دستورات", "کمک کن", "لطفا کمک کن"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setColor("YELLOW")
        .setDescription(allcmds)
        .setFooter(`درحال مشاهده ${client.guilds.cache.size} سرو`)
        .setAuthor('❤با تشکر از اینکه بات ما رو به سرورتون اینوایت دادید. با این کار مارو به وریفای نزدیک میکنید')
        .setImage('https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg')
        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}

const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
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
        .setFooter(`اگه دیدید کامندی کار نمیکنه بدونین درحال ساخته . در صورت دریافت مشکل میتوانید به سرور دیسکورد ما  جوین بدید :https://discord.gg/frVDXRAs`)
        .setAuthor('❤با تشکر از اینکه بات ما رو به سرورتون اینوایت دادید. با این کار مارو به وریفای نزدیک میکنید')
        .setImage('https://s36537.pcdn.co/wp-content/uploads/2018/11/persian-cat-face.jpg.optimal.jpg')
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

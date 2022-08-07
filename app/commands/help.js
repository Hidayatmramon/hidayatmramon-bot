const Discord = require('discord.js');

module.exports = {
    name: "help",
    run: async (client, message, args) => {
      
      let Hidayatmramonhelp = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/779639956305346593/781882501596839966/20201124_134206_0000.png')
        .setTitle('Help commands')
        .setColor('#9400D3')
        .setDescription('Hidayatmramon bot Help commands')
     .addFields(
       { name: 'Prefix', 
        value: '/',
        inline: true },
       
       { name: 'General',
        value: 'avatar | afk | help | ping | say | snipe | servericon',
        inline: true },
       
       { name: 'Search',
        value: 'wikipedia | translate',
        inline: true },
       
       { name: 'Info',
        value: 'info | userinfo | serverinfo',
        inline: true },
       
       )
        .setTimestamp()
      message.channel.send(Hidayatmramonhelp)
      }
}

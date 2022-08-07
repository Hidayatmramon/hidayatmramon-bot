const { MessageEmbed } = require('discord.js')

module.exports = {
name: "servericon",
  description: "Show icon server",
  run: async (client, message, args) => {
    
    const servericonembed = new MessageEmbed()
    .setTitle("**Server Icon**")
    .setColor('RANDOM')
  .setImage(message.guild.iconURL({dynamic : true, size: 4096}))
    
    message.channel.send(servericonembed)
    }
}
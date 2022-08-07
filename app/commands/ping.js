const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Menunjukkan Ping",
  usage: "/ping",
  run: async (client, message, args) => {
   if(message.channel.id == "779639956305346593","780774954550558743") {
    const ramon = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Your ping \n**Respond:** ${Date.now() - message.createdTimestamp} ms\n**Websocket:** ${client.ws.ping} ms`)
    
    message.channel.send(ramon)
     
   }else{
     return message.channel.send('eror')
   }
  }
    
}
const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "Say message",
  alias: [""],
   run: async (client, message, args) => {
    if(message.channel.id == "1005103594443374655","1005387521213079562") {
    
   
    if(message.guild === null)
    return;

  
    if (message.author.bot) 
    return;
    const sayRamon = args.join(" ");
     
     
    message.channel.send(sayRamon);
    
  }else{
    return message.channel.send('eror')
  }
    
   }
 }  

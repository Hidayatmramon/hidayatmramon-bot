const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "wikipedia",
  aliases: ["wiki"],
  run: async (client, message, args) => {
  const query = args.join(" ").trim();
  if (!query) return message.channel.send(`🚫  **|**  __**${message.author.username}**__, please input the article title.`);
  
  const headers = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36' };
  axios.get(`https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`, { headers }).then(res => {
    const article = res.data;
    
    const wikipedia = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor("Wikipedia", "https://i.imgur.com/a4eeEhh.png")
    .setTitle(`**${article.title}**`)
    .setURL(article.content_urls.desktop.page)
    .setDescription(`> ${article.extract}`)
    .setThumbnail(article.originalimage ? article.originalimage.source : null)
    .setTimestamp(new Date())
    .setFooter(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 64 }))
    return message.channel.send(wikipedia);
    }).catch(() => message.channel.send(`🚫  **|**  __**${message.author.username}**__, no article with the title **${query}**.`));
}


}

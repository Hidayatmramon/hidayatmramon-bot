const Discord = require("discord.js");

module.exports = {
  name: "server-info",
  category: "server info",
  alias: [],
  run: async (client, message, args) => {
    if (message.channel.id == "779639956305346593","1005103594443374655") {
      let region = {
        "eu-central": ":flag_eu: Central Europe",
        singapore: ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        sydney: ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        london: ":flag_gb: London",
        amsterdam: ":flag_nl: Amsterdam",
        hongkong: ":flag_hk: Hong Kong",
        russia: ":flag_ru: Russia",
        southafrica: ":flag_za:  South Africa"
      };
      const embed = new Discord.MessageEmbed()

        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor("WHITE")
        .setDescription("Server Information")
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Server Name", message.guild.name, true)
        .addField("ID Server", message.guild.id, true)
        .addField(
          "Owner",
          `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
          true
        )
        .addField("Region", region[message.guild.region], true)
        .addField(
          "Total | Humans | Bots",
          `
        ${message.guild.members.cache.size} | 
        ${
          message.guild.members.cache.filter(member => !member.user.bot).size
        } | 
        ${message.guild.members.cache.filter(member => member.user.bot).size}`,
          true
        )
        .addField("Channels", message.guild.channels.cache.size, true)
        .addField("Roles", message.guild.roles.cache.size, true);
      // .addField("Creation Date", `${message.channel.guild.createdAt.toLocaleDateString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)

      return message.channel.send(embed);
    } else {
      return message.channel.send("eror");
    }
  }
};

const Discord = require("discord.js"); // We use Discord.JS
const bot = new Discord.Client();
const express = require("express");
const app = express();
const fs = require("fs");
//untuk bot ny hidup lama
app.get("/", (req, res) => {
  res.sendStatus(200);
});



app.listen(process.env.PORT);

const prefix = "/"; 

bot.snipe = new Map();

bot.aliases = new Discord.Collection();
bot.commands = new Discord.Collection();

const commandFile = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
commandFile.forEach(file => {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
  if (command.alias) {
    command.alias.forEach(alias => {
      bot.aliases.set(alias, command);
    });
  }
  console.log(
    `Loaded command ${command.name} with alias(es) => ${command.alias}`
  );
});

 // untuk status
bot.on("ready", async () => {
  const status = ["Ramon hidayat","Hidayatmramon Dev"];
  setInterval(() => {
    const statusnum = Math.floor(Math.random() * status.length);

    bot.user.setActivity(status[statusnum], {
      type: "STREAMING",
      url: "https://twitch.com/Hidayatmramon Dev"
    });
  }, 20000);
  console.log(`${bot.user.tag} sudah online!`);
  
});
 
bot.on("messageDelete", message => {
  bot.snipe.set(message.channel.id, message);
});

bot.on("message", function(message) {
  
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  
// say message
  if (message.content === "hi") {
    return message.reply("Hi");
  }
  
  
  if (message.author.bot) return; 
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;

  // Command Handler
  try {
    const file = bot.commands.get(cmd) || bot.aliases.get(cmd);
    if (!file) return;

    file.run(bot, message, args);
  } catch (e) {
    
    console.log(e.stack);
  }
});

// process bot online
bot.login(process.env.RAMON_TOKEN);


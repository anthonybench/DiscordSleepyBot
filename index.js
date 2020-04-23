/*=========================================
===========================================
Discord General Utility Bot
Isaac Yep; init 4/2/2020
@Sleepybot
===========================================
=========================================*/

// Websocket setup
require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
/*=========================================
===========================================
  Sleepybot Logic
===========================================
=========================================*/

// Greeting



// Easter Eggs



// Timer



// Ding Timer



// Weather Report



// Arithmatic Computer



// Differentiation Computer



// Read Trump Tweet






  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
      if (msg.mentions.users.size) {
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
      } else {
        msg.reply('Please tag a valid user!');
      }
  }
});

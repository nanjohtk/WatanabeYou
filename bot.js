const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is up and running!');
});

client.on('message', message => {
    if (message.content === '全速前進') {
    	message.reply('ヨーソロー!!');
  	}
});

client.on('message', message => {
    if (message.content === 'ヨーソロー!!') {
    	message.reply('からの？敬礼!!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

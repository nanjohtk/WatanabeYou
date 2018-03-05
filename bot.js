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

client.on('message', message => {
    if (message.content === 'Who are you?') {
    	message.reply('You!!');
  	}
});

client.on('message', message => {
    if (message.content === 'No, not me. You.') {
    	message.reply('Yes, I am You.');
  	}
});

client.on('message', message => {
    if (message.content === 'Just answer the damn question. Who are you?') {
    	message.reply('I have told you.');
  	}
});

client.on('message', message => {
    if (message.content === 'Are you deaf?') {
    	message.reply('No. You is ship captain.');
  	}
});

client.on('message', message => {
    if (message.content === 'I am not ship captain, you ship captain.') {
    	message.reply('That why I just say.');
  	}
});

client.on('message', message => {
    if (message.content === 'You just say what?') {
    	message.reply('I did not say what, I say You.');
  	}
});

client.on('message', message => {
    if (message.content === 'That is what I am asking you.') 
    	message.reply('And you is answering.');
  	}
});

client.on('message', message => {
    if (message.content === 'You!') 
    	message.reply('Yes?.');
  	}
});

client.on('message', message => {
    if (message.content === 'I am Mikan') {
    	message.reply('She is Mikan, I am You.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

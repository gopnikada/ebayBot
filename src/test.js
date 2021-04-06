process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');
const token = '1746976450:AAFmbjrWyBV-A3k1EQhfZ6-OC8TkkNCH-60';

const bot = new TelegramBot(token, {polling:true,request:{
    agentClass: Agent,
    agentOptions: {
        socksHost: 'Your socks Host',
        socksPort: 'Your socks Port'
    }
}});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, "hello");
});

bot.on("polling_error", (msg) => console.log(msg));
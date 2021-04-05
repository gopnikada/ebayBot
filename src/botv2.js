const TelegramBot = require('node-telegram-bot-api'); 
const token = '1746976450:AAFL6EmOS39agaIFTCgK5veuabpXGjt1BWc';
const bot = new TelegramBot(token, {polling: true});
const {getData} = require("./getDatav2");

    
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Wellcome, choose your category or type search request", {
        "reply_markup":{
            "keyboard": [["show", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });
        
});
bot.on('message', (msg) => {
    var startShow = "show";
    if (msg.text.toString().toLowerCase().indexOf(startShow) === 0) {           

        setInterval(() => {
            getData(bot, msg)
        }, 2000);

    }
});

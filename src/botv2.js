const TelegramBot = require('node-telegram-bot-api'); 
const token = '1746976450:AAEUq5Kjimgp60lX0laGy_iOgo3X5iw06p0';
const bot = new TelegramBot(token, {polling: {
    interval: 1000
 }});
const {getData} = require("./getDatav2");
const {getCats} = require("./getCats");

    
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Wellcome, choose your category or type search request", {
        "reply_markup":{
            "keyboard": [["show", "categories"],   ["Keyboard"], ["I'm robot"]]
        }
    });
        
});
bot.on('message', (msg) => {
    var startShow = "show";
    let categories="categories";
    let elektronik = 'elektronik';
    let laptops = 'laptops'
    if (msg.text.toString().toLowerCase().indexOf(startShow) === 0) {           

        setInterval(() => {
            getData(bot, msg)
        }, 2000);

    }
    else if(msg.text.toString().toLowerCase().indexOf(categories) === 0){
        bot.sendMessage(msg.chat.id, " choose main category or type yours", {
            "reply_markup":{
                "keyboard": [['elektronik'],['...']]
            }
        });
        console.log('ok in cats')
    }
    else if(msg.text.toString().toLowerCase().indexOf(elektronik) === 0){
        bot.sendMessage(msg.chat.id, " choose main category or type yours", {
            "reply_markup":{
                "keyboard": [['laptops'],['PCs']]
            }
        });
        console.log('ok in test')
    }
    else if(msg.text.toString().toLowerCase().indexOf(laptops) === 0){
        setInterval(() => {
            getData(bot, msg)
        }, 2000);
        console.log('showwing')
    }
 
   
    
   
    
});

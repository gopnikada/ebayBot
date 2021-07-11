const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs')
const token = '1746976450:AAEUq5Kjimgp60lX0laGy_iOgo3X5iw06p0';
const bot = new TelegramBot(token, {polling: {
    interval: 1000
 }});
const {getData} = require("./getData");
const {getCats} = require("./getCats")

getCats().then(r=>{

})
let cats;
try {
    cats = JSON.parse(fs.readFileSync('cats.json').toString());
} catch (e) {console.log(e)}

bot.onText(/\/start/, (msg) => {


    bot.sendMessage(msg.chat.id, "Wellcome, choose your category or type search request", {
        "reply_markup":{
            "keyboard": [
                [...Object.keys(cats).slice(0,3)],
                [...Object.keys(cats).slice(3,6)],
                [...Object.keys(cats).slice(6,9)],
                [...Object.keys(cats).slice(9,12)],
                [...Object.keys(cats).slice(12,15)],

            ]
        }

    });



});
bot.on('message', (msg) => {
    var startShow = "show";
    let categories="categories";
    let elektronik = 'elektronik';
    let laptops = 'laptops'
    let pcs = 'pcs'
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
            getData(bot, msg, item='s-notebooks', num='/c278')
        }, 2000);
        console.log('showwing')
    }
    else if(msg.text.toString().toLowerCase().indexOf(pcs) === 0){
        setInterval(() => {
            getData(bot, msg, item='s-pcs', num='/c228')
        }, 2000);
        console.log('showwing')
    }
});

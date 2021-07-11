const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs')
const token = '1746976450:AAEUq5Kjimgp60lX0laGy_iOgo3X5iw06p0';
const Agent = require('socks5-https-client/lib/Agent')
const bot = new TelegramBot(token,
    {
        polling:true,

});
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
      Object.keys(cats).forEach(s=>{
        if(msg.text.indexOf(s) == 0){
            let kbArr = [];
            [...cats[s]].forEach(s=>{
                let __ = []
                __.push(s)
                kbArr.push(__)

            });
            console.log(Object.values(cats))

            bot.sendMessage(msg.chat.id, " choose main category or type yours", {
                "reply_markup":{
                    "keyboard": kbArr
                }
            });
        }
    });

});

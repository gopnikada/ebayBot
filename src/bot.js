const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs')
const token = '1746976450:AAEUq5Kjimgp60lX0laGy_iOgo3X5iw06p0';
const Agent = require('socks5-https-client/lib/Agent')
const {search} = require("./search");
const {getUrl} = require("./getUrl");
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
    const values = Object.values(cats).reduce((acc, cur)=>{return acc+cur}).split(',')
      Object.keys(cats).forEach(s=>{
        if(msg.text.indexOf(s) == 0){
            let kbArr = [];
            [...cats[s]].forEach(s=>{
                let __ = []
                __.push(s)
                kbArr.push(__)
            });
            bot.sendMessage(msg.chat.id, " choose main category or type yours", {
                "reply_markup":{
                    "keyboard": kbArr
                }
            });
        }
    });

    values.forEach(catTS=>{
        if(msg.text.indexOf(catTS) == 0){
                getUrl(catTS).then(r=>
                    setInterval(() => {
                        if(typeof r == "undefined"){

                        }else {
                            getData(bot, msg, r)
                        }
                    }, 2000)
                )
        }
    })

});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    console.log(search('https://www.ebay-kleinanzeigen.de/s-handy-telekom/c173', 'sumsung'))
    //https://www.ebay-kleinanzeigen.de/s-handy-telekom/samsung/k0c173
});

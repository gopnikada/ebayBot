const TelegramBot = require('node-telegram-bot-api'); 
const token = '1746976450:AAFL6EmOS39agaIFTCgK5veuabpXGjt1BWc';
const bot = new TelegramBot(token, {polling: true});
const {getData} = require("./getData");
const axios = require('axios')
    
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
        
            async function getData(){
            try {
                const response = await axios.get('https://www.ebay-kleinanzeigen.de/s-notebooks/06217/c278l13779r100')
                let seemsToShow = Array.from(response.data.matchAll(/(?<=data-imgsrc=")(.*)(?=")/g), m => m[0])[2]
                bot.sendMessage(msg.chat.id, seemsToShow);

            } catch (error) {
                console.log(error.response.body);
            }
        }

        setInterval(() => {
            getData()
        }, 5000);

    }
});

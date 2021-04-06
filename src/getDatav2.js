const axios = require('axios')

async function getData(bot, msg, item, num){
    try {
        const response = await axios.get('https://www.ebay-kleinanzeigen.de/'+item+num)
        let seemsToShow = Array.from(response.data.matchAll(/(?<=data-imgsrc=")(.*)(?=")/g), m => m[0])[2]
        bot.sendMessage(msg.chat.id, seemsToShow);
        console.log('showwing '+ item)

    } catch (error) {
        console.log(error.response.body);
    }
    
}
module.exports = {getData}
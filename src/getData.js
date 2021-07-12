const axios = require('axios')

async function getData(bot, msg, cat){
    try {
        const response = await axios.get(cat)
        let seemsToShow = Array.from(response.data.matchAll(/(?<=data-imgsrc=")(.*)(?=")/g), m => m[0])[2]
        bot.sendPhoto(msg.chat.id, seemsToShow );
    } catch (error) {
        console.log(error.response.body);
    }
    
}
module.exports = {getData}
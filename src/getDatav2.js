const axios = require('axios')
const fs = require('fs');
const fetch = require('node-fetch');

async function getData(bot, msg, item, num){
    try {
        let url = 'https://www.ebay-kleinanzeigen.de/'+item+num;
        const response = await axios.get(url)
        let seemsToShow = Array.from(response.data.matchAll(/(?<=data-imgsrc=")(.*)(?=")/g), m => m[0])[2]
        //bot.sendMessage(msg.chat.id, seemsToShow);
        console.log('showwing '+ item)
        console.log(url)
        bot.sendPhoto(msg.chat.id, seemsToShow );
    } catch (error) {
        console.log(error.response.body);
    }
    
}


module.exports = {getData}
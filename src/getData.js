const axios = require('axios')
const fs = require('fs');
const fetch = require('node-fetch');
const jsdom = require("jsdom");

const globalUrl = 'https://www.ebay-kleinanzeigen.de/'

async function getData(bot, msg, item, num){
    try {
        const url = globalUrl+item+num;
        const response = await axios.get(url)
        let seemsToShow = Array.from(response.data.matchAll(/(?<=data-imgsrc=")(.*)(?=")/g), m => m[0])[2]
        bot.sendPhoto(msg.chat.id, seemsToShow );
    } catch (error) {
        console.log(error.response.body);
    }
    
}
module.exports = {getData}
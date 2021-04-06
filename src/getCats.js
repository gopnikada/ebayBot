const axios = require('axios')
const jsdom = require("jsdom");
const fs = require('fs')

async function getCats(bot, msg){
    try {
        let response = await axios.get('https://www.ebay-kleinanzeigen.de')        
        
        let dom = new jsdom.JSDOM(response.data);
      
        var list = dom.window.document.getElementsByClassName('splitfield-dropdown splitfield-input splitfield-right-input')[0].click()
        console.log(list.innerHTML)
       
       
        
        bot.sendMessage(msg.chat.id, "sent");

    } catch (error) {
        console.log(error.response.body);
    }
    
}
module.exports = {getCats}
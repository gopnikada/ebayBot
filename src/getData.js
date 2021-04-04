const axios = require('axios')

async function getData(ctx){
    try {
        const response = await axios.get('https://www.ebay-kleinanzeigen.de/s-notebooks/06217/c278l13779r100')
        let seemsToShow = Array.from(response.data.matchAll(/(?<=data-imgsrc=")(.*)(?=")/g), m => m[0])[2]
        ctx.reply(seemsToShow)

    } catch (error) {
        console.log(error.response.body);
    }
}
module.exports={getData}

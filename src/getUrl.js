const jsdom = require("jsdom");
const axios = require('axios')



const catsUrl = 'https://www.ebay-kleinanzeigen.de/s-kategorien.html'
const baseUrl = 'https://www.ebay-kleinanzeigen.de'

async function getUrl(item){
    const resp = await axios.get(catsUrl)
    const dom = new jsdom.JSDOM(resp.data);
    const catsNames = [...dom.window.document.getElementsByClassName('treelist-headline')]
    let url;
    catsNames.forEach((e, i, a)=>{
        [...catsNames[i].parentNode.children.item(1).children].forEach(s=>{
            if(s.children.item(0).textContent == item){
                url = baseUrl+s.children.item(0).getAttribute('href')
            }
        })
    })
    return url
}

module.exports = {getUrl}
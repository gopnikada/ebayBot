const jsdom = require("jsdom");
const axios = require('axios')


const catsUrl = 'https://www.ebay-kleinanzeigen.de/s-kategorien.html'

async function getCats(){
    const responseCats = await axios.get(catsUrl)
    try{
        const catsObj = {}
        const dom = new jsdom.JSDOM(responseCats.data);
        const catsNames = [...dom.window.document.getElementsByClassName('treelist-headline')]
        catsNames.forEach((e, i, a)=>{
            let subs = [];
            [...catsNames[i].parentNode.children.item(1).children].forEach(s=>{
               let subCat = s.children.item(0).textContent
                subs.push(subCat)
            })
            catsObj[e.children.item(0).textContent] = subs
        })
        return catsObj

    }catch (e) {console.log(e)}
}

module.exports={getCats}

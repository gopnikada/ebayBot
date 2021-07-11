const jsdom = require("jsdom");
const axios = require('axios')


const catsUrl = 'https://www.ebay-kleinanzeigen.de/s-kategorien.html'

async function getCats(){
    const responseCats = await axios.get(catsUrl)
    try{
        const cats=[]
        const subCats=[]
        const dom = new jsdom.JSDOM(responseCats.data);
        const catsNames = [...dom.window.document.getElementsByClassName('treelist-headline')]
        catsNames.forEach((e, i, a)=>{

            cats.push(e.children.item(0).textContent);

            [...catsNames[i].parentNode.children.item(1).children].forEach(s=>{
               console.log(s.children.item(0).textContent)
            })

        })
        console.log("CATS" + cats)

    }catch (e) {console.log(e)}
}

module.exports={getCats}

const jsdom = require("jsdom");
const axios = require('axios')

function search(url, query){
    let arr = url.split('/')
    let last = arr.pop()
    arr.push(query)
    last = 'k0' + last
    arr.push(last)
    return arr.join('/')
}

module.exports = {search}
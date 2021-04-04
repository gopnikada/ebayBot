const { Telegraf } = require('telegraf')
const http = require('http');
const https = require('https');
const axios = require('axios')
const {getData} = require("./getData");
process.env['BOT_TOKEN'] = '1746976450:AAFL6EmOS39agaIFTCgK5veuabpXGjt1BWc';
//const bot = new Telegraf(process.env.BOT_TOKEN)
console.log(process.env.BOT_TOKEN)
const {bibFun} = require('./bibFun')

const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu')

const menuTemplate = new MenuTemplate(ctx => `Hey ${ctx.from.first_name}!`)

menuTemplate.interact('I am excited!', 'a', {
  do: async ctx => ctx.reply('As am I!')
})

const bot = new Telegraf(process.env.BOT_TOKEN)

const menuMiddleware = new MenuMiddleware('/', menuTemplate)
bot.command('start', ctx => menuMiddleware.replyToContext(ctx))
bot.use(menuMiddleware)



bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Elina', (ctx) => {

    setInterval(()=>{getData(ctx)}, 5000)

})
bot.hears('Ясос', (ctx) => {
    bibFun(ctx, '👍')


})
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster👍', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
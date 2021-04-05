const { Telegraf } = require('telegraf')
// const Markup = require('telegraf/markup')
// const Extra = require('telegraf/extra')
const http = require('http');
const https = require('https');
const axios = require('axios')
const {getData} = require("./getData");
process.env['BOT_TOKEN'] = '1746976450:AAFL6EmOS39agaIFTCgK5veuabpXGjt1BWc';
//const bot = new Telegraf(process.env.BOT_TOKEN)
console.log(process.env.BOT_TOKEN)
const {bibFun} = require('./bibFun')



const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const response_time = new Date() - start
  console.log(`(Response Time: ${response_time})`)
})

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Elina', (ctx) => {

    setInterval(()=>{getData(ctx)}, 5000)


})
bot.hears('Ясос', (ctx) => {
    bibFun(ctx, '👍') 


})
bot.hears('hello', (ctx) => {
  ctx.reply('<b>Hello</b>. <i>How are you today?</i>',
    Extra.HTML()
    .markup(Markup.inlineKeyboard([
      Markup.callbackButton('Not bad', 'not bad'),
      Markup.callbackButton('All right', 'all right')
    ])))
})
bot.action('not bad', (ctx) => {
  ctx.editMessageText('<i>Have a nice day 😊</i>',
    Extra.HTML())
})
bot.action('all right', (ctx) => {
  ctx.editMessageText('<i>May happiness be with you 🙏</i>',
    Extra.HTML())
})
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster👍', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
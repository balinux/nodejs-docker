const telebot = require('telebot');
const express = require('express');
const app = express();

const bot = new telebot({
    // unud monitoring
    //   token: '327469938:AAFwsN__2VWQwwUPX1RFH5kweUFdoO4eNcY',
    // balinuxbot   
    token: '202473943:AAEfDTAViIvPb9HXpXYASl2TOqBoeSzS32Y',
    usePlugins: ['askUser']
});

app.get('/', (req, res) => {
    res.send('index nodejs Docker container')
})

bot.on('/checkid', (msg) => {
    bot.sendMessage(msg.chat.id,
        `message \nfrom id : ${msg.from.id}, \nis_bot : ${msg.from.is_bot}, \nfirst name:${msg.from.first_name} \nchat_id : ${msg.chat.id}, \nfirst name : ${msg.chat.first_name}, \ntype : ${msg.chat.type} `
        // console.log(msg)
    )
})

// bot.sendMessage(-1001378763588,'tes pesan :)')
// bot.start()

app.listen(3000, () => { console.log('port:3000') })
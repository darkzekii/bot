const axios = require('axios')

let handler = async(m, { conn }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let les = await axios.get('https://meme-api.herokuapp.com/gimme/yaoi')
conn.sendFile(m.chat, les.data.url, 'yaoi', `*YAOI*`, m)
}

handler.help = ['yaoi']
handler.tags = ['nsfw']
handler.command = /^(yaoi)$/i

module.exports = handler

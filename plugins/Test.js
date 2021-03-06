let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix }) => {
await m.reply(`${shortNum(10000)}`)
}

//handler.help = ['test']
//handler.tags = ['info']
handler.command = /^(test)$/i

module.exports = handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function createHash(data, len) {
    return crypto.createHash("shake256", { outputLength: len })
      .update(data)
      .digest("hex");
}

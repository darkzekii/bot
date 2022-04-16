const { createHash } = require('crypto')

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let sn = createHash('md5').update(m.sender).digest('hex')
    m.reply(`*Tu codigo es:* ${sn}`)
}

handler.help = ['codigo']
handler.tags = ['exp']
handler.command = /^(código|sn|codigo)$/i
handler.register = true

module.exports = handler

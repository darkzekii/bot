let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/del/i, '')
    if (!text) throw `Usar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (!text in msgs) throw `'${text}' no registrado en la lista de mensajes`
    delete msgs[text]
    m.reply(`Eliminó con éxito el mensaje en la lista de mensajes con el nombre '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + '')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/
handler.rowner = true

module.exports = handler

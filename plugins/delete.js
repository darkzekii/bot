let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw 'Etiqueta un mensaje mio para eliminarlo!'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['delete']
handler.tags = ['info']

handler.command = /^(delete|del)$/i

module.exports = handler

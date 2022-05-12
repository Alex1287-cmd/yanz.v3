async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply( `🤴 *Owner Yanz Bot* : *\n⤷ wa.me/6288272489919?text=Assalamualaikum+Kak (Owner)\n\n`+ `🌟 *Bot Utama :*\n⤷ wa.me/6282186172016?text=.menu (Yanz)\n\n`+ `🤖 *JadiBot :*\n` + users.map(v => '✎ wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
}
handler.command = handler.help = ['listjadibot','listbot','ljb']
handler.tags = ['jadibot']

module.exports = handler

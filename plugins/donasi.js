let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
_*Hanya Menerima Mata Uang Indonesia Ya Dek🗿*_
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*DANA*_✅ : 
║│- 088272489919
║│
║│➸ _*PULSA*_✅: 
║│- 082186172016
║│
║│➸ _*OWNER*_
║│- wa.me/6288272489919
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `

┌───❑〘 *P R O F I L E* 〙─────
│📇 Nama : ${username} ${registered ? '(' + name + ') ': ''} 
│📧 Tag : @${who.replace(/@.+/, '')}
│📞 Number : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│💻 Api : https://wa.me/${who.split`@`[0]}
${registered ? '🎨 • *Age:* ' + age : ''}
${about ? '🗒️ • *About:* ' + about : ''}
├───────────────────⬡
│💹 Limit :${limit}
│💱 Role : ${role}
│🏧 Level : ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
│🏦 Xp : ${level}
├───────────────────⬡
│🌟 Premium : ${premium ? "Ya✔" :"Tidak❌"}
│👨‍ Register : ${registered ? 'Ya✔ (' + new Date(regTime).toLocaleString() + ')' : 'Tidak❌'}${lastclaim > 0 ? '\nTerakhir Klaim: ' + new Date(lastclaim).toLocaleString() : ''}
└───────────────────⬡
╭─────────────────
│Note: 
│➥ Gunakan Bot Secukupnya!
│➥ Gunakan Bot Dengan Bijak!
│➥ Jangan Call/Vc Bot!
│➥ Demi Kenyamanan Bersama!
╰──────────────────

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|pp$/i
module.exports = handler

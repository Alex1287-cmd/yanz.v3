let fs = require('fs')
let moment = require('moment-timezone')
let img1 = fs.readFileSync('./src/umbreon.jpg')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: 'Ini Kak Owner Ku OωO', //Kasih namalu
                            orderTitle: ``,
                            thumbnail: img1, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
          }
}
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:📍 Creator Ynz Bot\nitem2.EMAIL;type=INTERNET:YanzBotz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL: Only You\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Sumatera Barat\nitem5.X-ABLabel:──────[ Yᴀɴᴢ Bᴏᴛᴢ ]──────\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '#menu', buttonText: {displayText: 'Menu'}, type: 1},
  {buttonId: '#donasi', buttonText: {displayText: 'Donasi'}, type: 1},
]
const buttonsMessage = {
    contentText: `
Donasi/Sewa? Chat Owner
`.trim(),    footerText: ``,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { quoted: test})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

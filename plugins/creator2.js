const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Yᴀɴᴢ Bᴏᴛ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Yanz\nitem1.TEL;waid=6288287810316:6282186172016\nitem1.X-ABLabel:📍 Creator Yanz Bot\nitem2.EMAIL;type=INTERNET:yannzbotz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3JH6rSB/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Sumatera Barat\nitem5.X-ABLabel:──────[ Yᴀɴᴢ Bᴏᴛᴢ ]──────\nEND:VCARD"
  }, {
    "displayName": "Zɪᴠғᴜʀʀ Cʜᴀɴ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Zivfurr\nitem1.TEL;waid=6285158866902:0\nitem1.X-ABLabel:📍 Partner Yanz Bot\nitem2.EMAIL;type=INTERNET:haoribotz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3JH6rSB/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Bengkulu\nitem5.X-ABLabel:────[ Zivfurr ]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler

let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 SEWA BOT 〙 ═
╠➥ *1 Minggu* : *Rp 5.00*
╠➥ *2 Minggu* : *Rp 10.00*
╠➥ *3 Minggu* : *Rp 15.00*
╠➥ *1 Bulan* :  *Rp 20.00*
║
╠═〘 USER PREMIUM 〙 ═
╠➥ *1 Minggu* : *Rp 5.00*
╠➥ *2 Minggu* : *Rp 10.00*
╠➥ *3 Minggu* : *Rp15.00*
╠➥ *1 Bulan* :  *Rp 20.00*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Topup
╠➥ Pin
║
╠═〘 INGIN BELI BOT? 〙 ═
╠➥Klik Button Di Bawah
║
╠═〘 YANZ 〙 ═`.trim(), '©Yanz', 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler

let handler = function (m) {
	this.sendContact(m.chat, '6288287810316', 'Owner Bot Ynz :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler

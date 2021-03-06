let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let { performance } = require('perf_hooks')
let neww = Math.round(performance.now())
let old = Math.round(performance.now())
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `
γγγγ π π π΄ π π γγγγ
βΊ π½πππ: %name
βΊ πΏππππππ: %prems
βΊ π°ππ: %age
βΊ π»ππππ: %limit
βΊ πΌππππ’: %money
βΊ ππππ: %role
βΊ π»ππππ: %level [%xp4levelup]
βΊ ππ: %exp / %maxexp
βΊ πππππ ππ: %totalexp
βΊ π» = *LIMIT*
βΊ πΏ = *PREMIUM*

γγγγ π πΎ π³ π° π γγγγ
βΊ ${ucapan()}
βΊ πππππππ: %week %weton, %date
βΊ πππππππ πΈππππ: %dateIslamic
βΊ πππππ: %time

γγγγ πΈ π½ π΅ πΎ γγγγ
βΊ π½πππ π±ππ: ππππ£π£ π±ππ
βΊ πΏπππππππ: %platform
βΊ πΌπππ π·π: Realme
βΊ ππππππ: %muptime
βΊ π³πππππππ: %rtotalreg dari %totalreg

γγγγ π² πΎ πΌ πΌ π° π½ π³ γγγγ
%readmore`.trimStart(),
  header: 'β­βγ *%category* γββ¬£\nβ΄',
  body: 'ββ¬‘ %cmd %islimit %isPremium',
  footer: 'β¬\nβ°βββββββββββ¬£',
  after: `β ββββββββββββββββββββββββββββββββ β.
     %me
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let bzz = './audio/robot.m4a'
	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vn', 'sound', 'vote', 'tanpakategori', 'owner', 'gift', 'thnks']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'rpg': 'Epic Rpg',
    'xp': 'Exp & Limit',
    'fun': 'Fun',
    'jodoh': 'Jodoh',
    'gift': 'Gift',
    'anime': 'Anime',
    'hentai': `NSFW`,
    'premium': 'Premium',
    'anonymous': 'Anonymous Chat',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'absen': 'Absen',
    'voting': 'vote',
    'admin': `Admin`,
    'group': 'Grup',
    'news': 'News',
    'internet': 'Internet',
    'edukasi': 'Edukasi',
    'quran': 'Islam',
    'image': 'Random Image',
    'sticker': 'Stiker',
    'nulis': 'MagerNulis & Logo',
    'audio': 'Pengubah Suara',
    'sound': 'Sound',    
    'downloader': 'Downloader',
    'vn': 'Voice Note Imut',
    'tools': 'Tools',
    'database': 'Database',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
    'thnks': 'THANKS TO',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'NSFW',
    'nsfw': 'HENTAI',
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun',
    'jodoh': 'Jodoh'
  }
  if (teks == 'jodoh') tags = {
    'jodoh': 'Jodoh'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'gift') tags = {
    'gift': 'Gift'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'vn') tags = {
    'vn': 'Voice Note Imut'
    }
  if (teks == 'sound') tags = {
    'sound': 'Sound'
  }
  if (teks == 'thnks') tags = {
    'thnks': 'THANKS TO'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let premium = global.db.data.users[m.sender].premium
    let prems = `${premium ? 'Yes': 'No'}`
    let wm = global.botwm
    let logo = global.logo
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `β§ββββββΒ·Β·Β·[ π³ππππππππ ]Β·Β·Β·ββββββββ§`.trim(),
          "description": `${ucapan()}, ${name} !`.trim(),
          "footerText": `β­βββββββββββββββββββ§
ββ¬‘ π°ππππ ππππππ ${uptime}
ββ¬‘ π±ππππππ ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'π pengisian' : ''}` : 'tidak diketahui'}
ββ¬‘ ${Object.keys(global.db.data.users).length} πΏπππππππ
ββ¬‘ ${totaljadibot.length} πΉππππππ
ββ¬‘ ${conn.blocklist.length} ππππππππ
ββ¬‘ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} π²πππ πππππππππ
ββ¬‘ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} πΏπππππππ πππππππππ
β°βββββββββββββββββββ
     ββββββββββββββββ
     
         ${week}, ${date}`,
          "buttonText": "π²ππππ π·πππ!",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": "STATUS",
                                         "description": "Status Bot",
                                         "rowId": ".botstat"
                                    }, {
                                         "title": "SPEED",
                                         "description": "Menampilkann Kecepatan Respon Bot",
                                         "rowId": ".ping"
                                    }, {
                                         "title": "INFO",
                                         "description": "Menampilkan Info Bot",
                                         "rowId": ".info"
                                    }, {
                                         "title": "CREATOR",
                                         "description": "Kontak Creator ku ^~^",
                                         "rowId": ".owner"
                       }],
                    "title": "β§βββββββββββββββ[ Stats ]ββββββββββββββββ§"
                }, {
              "rows": [{              
                "title": `β° Semua Perintah`,
                "description": "Menu Semua Perintah",
                "rowId": `.? all`
                }],
              "title": "β§βββββββββββββββ[ All Menu ]ββββββββββββββββ§"
               }, {
               "rows": [{
                  "title": "β° Game",
                  "description": "Game",
                  "rowId": ".? game"
                }, {
                  "title": "β° RPG",
                  "description": "RPG",
                  "rowId": ".? rpg"
                }, {
                  "title": "β° EXP & LIMIT",
                  "description": "Exp & limit",
                  "rowId": ".? xp"
                }, {
                  "title": "β° FUN",
                  "description": "Fun",
                  "rowId": ".? fun"
                }, {
                  "title": "β° GIFT",
                  "description": "Gift",
                  "rowId": ".? gift"
                }, {
                  "title": "β° NSFW",
                  "description": "Nsfw",
                  "rowId": ".? nsfw"
                }, {
                  "title": "β° ANIME",
                  "description": "Anime",
                  "rowId": ".? anime"
                }, {
                  "title": "β° NEWS",
                  "description": "News",
                  "rowId": ".? News"
                },  {
                  "title": "β° ISLAMI",
                  "description": "Islami",
                  "rowId": ".? quran"
                }, {
                  "title": "β° EDUKASI",
                  "description": "Edukasi",
                  "rowId": ".? edukasi"
                }, {
                  "title": "β° RANDOM IMAGE",
                  "description": "Radom Image",
                  "rowId": ".? image"
                },  {
                  "title": "β° STICKER",
                  "description": "Sticker",
                  "rowId": ".? stiker"
                }, {
                  "title": "β° KERANG AJAIB",
                  "description": "Kerang ajaib",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "β° QOUTES",
                  "description": "Quotes",
                  "rowId": ".? quotes"
                }, {
                  "title": "β° ADMIN",
                  "description": "Admin Group",
                  "rowId": ".? admin"
                }, {
                  "title": "β° GROUP",
                  "description": "Group Chat",
                  "rowId": ".? grup"
                }, {
                  "title": "β° PREMIUM",
                  "description": "Premium Users",
                  "rowId": ".? premium"
                }, {
                  "title": "β° INTERNET",
                  "description": "Internet",
                  "rowId": ".? internet"
                }, {
                  "title": "β° ANONYMOUS",
                  "description": "Anonymous Chat",
                  "rowId": ".? anonymous"
                }, {
                  "title": "β° MAGER NULIS",
                  "description": "Menulis & Membuat Logo",
                  "rowId": ".? nulis"
                }, {
                  "title": "β° SOUND",
                  "description": "Sound",
                  "rowId": ".? sound"                
                }, {
                  "title": "β° DONWLOADER",
                  "description": "Downloader",
                  "rowId": ".? downloader"                
                }, {
                  "title": "β° VOICE NOTE",
                  "description": "Voice Note Imut",
                  "rowId": ".? vn"
                }, {
                  "title": "β° TOOLS",
                  "description": "Tools",
                  "rowId": ".? tools"
                }, {
                  "title": "β° DATABASE",
                  "description": "Database",
                  "rowId": ".? database"
                }, {
                  "title": "β° VOTE & ABSEN",
                  "description": "Vote & Absen",
                  "rowId": ".? vote"
                }, {
                  "title": "β° VOICE CHANGER",
                  "description": "Voice Changer",
                  "rowId": ".? audio"
                }, {
                  "title": "β° MULTI SESSIONS",
                  "description": "Jadibot",
                  "rowId": ".? jadibot"
                }, {
                  "title": "β° INFO",
                  "description": "Info",
                  "rowId": ".? info"
                }, {
                  "title": "β° NO KATEGORY",
                  "description": "No Category",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "β° MENU OWNER",
                  "description": "Owner",
                  "rowId": ".? owner"
                }],
                                "title": "β§βββββββββββββββ[ Menu ]ββββββββββββββββ§"
                                }, {
                                "rows": [{
                                "title": "Note",
                                "description": "Pembaruan",
                                "rowId": ".note"                                
                }],
                                "title": "β§βββββββββββββββ[ Pembaruan ]ββββββββββββββββ§"
                                }, {
                                "rows": [{                                
                                "title": "DONASI",
                                "description": "Donasi Agar Bot On 24 Jam",
                                "rowId": ".donasi"
                                }, {
                                "title": "SEWA",
                                "description": "Menampilkan List harga sewabot",
                                "rowId": ".sewa"
                                }, {
                                "title": "PREMIUM",
                                "description": "Menampilkan List Harga premium",
                                "rowId": ".premium"
                                }, {
                                "title": "SCRIPT",
                                "description": "Script Bot",
                                "rowId": ".sc"
                                }, {
                                "title": "THANKS TO",
                                "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam bot",
                                "rowId": ".? thnks"
                                }],
                                "title": "β§ββββββββββββββββ[ Info ]βββββββββββββββββ§"
                            }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                    }
                 }, {}), {waitForAck: true})
  
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // βγ DAFTAR MENU γ
    // β ${_p + command} all
    // β ${_p + command} game
    // β ${_p + command} xp
    // β ${_p + command} stiker
    // β ${_p + command} kerang
    // β ${_p + command} quotes
    // β ${_p + command} admin
    // β ${_p + command} group
    // β ${_p + command} premium
    // β ${_p + command} internet
    // β ${_p + command} anonymous
    // β ${_p + command} nulis
    // β ${_p + command} downloader
    // β ${_p + command} tools
    // β ${_p + command} fun
    // β ${_p + command} database
    // β ${_p + command} vote
    // β ${_p + command} quran
    // β ${_p + command} audio
    // β ${_p + command} jadibot
    // β ${_p + command} info
    // β ${_p + command} tanpa kategori
    // β ${_p + command} owner
    // βββββ  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'π»' : '')
                .replace(/%isPremium/g, menu.premium ? 'πΏ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      money, age, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    // await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), 'π? Ynz Π²ΟΡ', 'Owner', '.owner', 'Donasi', '.donasi', 'Rules', '.infobot', m)
    await conn.send3ButtonLoc(m.chat, logo, 'ββββββββββ[ *DASHBOARD* ]ββββββββββ', text.trim(), 'Owner', '.nowner', 'Donasi', '.donasi', 'Rules', '.rules', m)
    let nama = await conn.getName(m.sender)
    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}


  logo2 = global.logo
  kanna = fs.readFileSync('./src/logo3.jpg')
  kannaImg = (await conn.prepareMessage('0@s.whatsapp.net', kanna, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  sumberImg = await (await fetch(fla + teks + ' menu')).buffer()
  image = (await conn.prepareMessage('0@s.whatsapp.net', logo2, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  /*res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": 'β§βββββββΒ·Β·Β·[ Menu ]Β·Β·Β·βββββββββ§',
        "description": `\n${wm}\n` + text,
        "retailerId": `${week}, ${date}  |  π±π’ ππππ£π£ β·βͺ`,
        "url": '\n',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6288287810316@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)*/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu|\?|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi π"
  }
  if (time > 10) {
    res = "Selamat siang βοΈ"
  }
  if (time >= 15) {
    res = "Selamat sore π"
  }
  if (time >= 18) {
    res = "Selamat malam π"
  }
  return res
}

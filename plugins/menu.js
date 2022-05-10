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
〓〓〓〓 𝚄 𝚂 𝙴 𝚁 𝚂 〓〓〓〓
➺ 𝙽𝚊𝚖𝚎: %name
➺ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖: %prems
➺ 𝙰𝚐𝚎: %age
➺ 𝙻𝚒𝚖𝚒𝚝: %limit
➺ 𝙼𝚘𝚗𝚎𝚢: %money
➺ 𝚁𝚘𝚕𝚎: %role
➺ 𝙻𝚎𝚟𝚎𝚕: %level [%xp4levelup]
➺ 𝚇𝚙: %exp / %maxexp
➺ 𝚃𝚘𝚝𝚊𝚕 𝚇𝚙: %totalexp

〓〓〓〓 𝚃 𝙾 𝙳 𝙰 𝚈 〓〓〓〓
➺ ${ucapan()}
➺ 𝚃𝚊𝚗𝚐𝚐𝚊𝚕: %week %weton, %date
➺ 𝚃𝚊𝚗𝚐𝚐𝚊𝚕 𝙸𝚜𝚕𝚊𝚖: %dateIslamic
➺ 𝚆𝚊𝚔𝚝𝚞: %time

〓〓〓〓 𝙸 𝙽 𝙵 𝙾 〓〓〓〓
➺ 𝙽𝚊𝚖𝚊 𝙱𝚘𝚝: 𝚈𝚊𝚗𝚣𝚣 𝙱𝚘𝚝
➺ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖: %platform
➺ 𝙼𝚎𝚛𝚔 𝙷𝚙: Realme
➺ 𝚄𝚙𝚝𝚒𝚖𝚎: %muptime
➺ 𝙳𝚊𝚝𝚊𝚋𝚊𝚜𝚎: %rtotalreg dari %totalreg

〓〓〓〓 𝙲 𝙾 𝙼 𝙼 𝙰 𝙽 𝙳 〓〓〓〓
%readmore`.trimStart(),
  header: '╭─〔 *%category* 〕─⬣\n┴',
  body: '│⬡ %cmd %islimit %isPremium',
  footer: '┬\n╰──────────⬣',
  after: `⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕.
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
          "title": `✧──────···[ 𝙳𝚊𝚜𝚑𝚋𝚘𝚊𝚛𝚍 ]···───────✧`.trim(),
          "description": `${ucapan()}, ${name} !`.trim(),
          "footerText": `╭━━━━━━━━━━━━━━━━┈─✧
│⬡ 𝙰𝚔𝚝𝚒𝚏 𝚂𝚎𝚕𝚊𝚖𝚊 ${uptime}
│⬡ 𝙱𝚊𝚝𝚎𝚛𝚊𝚒 ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│⬡ ${Object.keys(global.db.data.users).length} 𝙿𝚎𝚗𝚐𝚐𝚞𝚗𝚊
│⬡ ${totaljadibot.length} 𝙹𝚊𝚍𝚒𝚋𝚘𝚝
│⬡ ${conn.blocklist.length} 𝚃𝚎𝚛𝚋𝚕𝚘𝚌𝚔
│⬡ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 𝙲𝚑𝚊𝚝 𝚃𝚎𝚛𝚋𝚊𝚗𝚗𝚎𝚍
│⬡ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 𝙿𝚎𝚗𝚐𝚐𝚞𝚗𝚊 𝚃𝚎𝚛𝚋𝚊𝚗𝚗𝚎𝚍
╰━━━━━━━━━━━━━━━━┈─◂
     ▌│█║▌║▌║║▌║▌║█│▌
     
        ${week}, ${date}`,
          "buttonText": "𝙲𝚕𝚒𝚌𝚔 𝙷𝚎𝚛𝚎!",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": "[📊] Status",
                                         "description": "Status Bot",
                                         "rowId": ".botstat"
                                    }, {
                                         "title": "[⚡] Speed",
                                         "description": "Menampilkann Kecepatan Respon Bot",
                                         "rowId": ".ping"
                                    }, {
                                         "title": "[🗒️] Info",
                                         "description": "Menampilkan Info Bot",
                                         "rowId": ".info"
                                    }, {
                                         "title": "[🎐] Creator",
                                         "description": "Kontak Creator ku ^~^",
                                         "rowId": ".nowner"
                       }],
                    "title": "✧───────────────[ Stats ]───────────────✧"
                }, {
              "rows": [{
                "title": `Menu 01 |🧾|`,
                "description": "Menu Semua Perintah",
                "rowId": `.? all`
                }],
              "title": "✧───────────────[ All Menu ]───────────────✧"
               }, {
               "rows": [{
                  "title": "Menu 02 |🎮|",
                  "description": "Game",
                  "rowId": ".? game"
                }, {
                  "title": "Menu 03 |🌱|",
                  "description": "RPG",
                  "rowId": ".? rpg"
                }, {
                  "title": "Menu 04 |✨|",
                  "description": "Exp & limit",
                  "rowId": ".? xp"
                }, {
                  "title": "Menu 05 |🧩|",
                  "description": "Fun",
                  "rowId": ".? fun"
                }, {
                  "title": "Menu 06 |🎁|",
                  "description": "Gift",
                  "rowId": ".? gift"
                }, {
                  "title": "Menu 07 |🔞|",
                  "description": "Nsfw",
                  "rowId": ".? nsfw"
                }, {
                  "title": "Menu 08 |⛩️|",
                  "description": "Anime",
                  "rowId": ".? anime"
                }, {
                  "title": "Menu 09 |📰|",
                  "description": "News",
                  "rowId": ".? News"
                },  {
                  "title": "Menu 10 |🕋|",
                  "description": "Islami",
                  "rowId": ".? quran"
                }, {
                  "title": "Menu 11 |🏫|",
                  "description": "Edukasi",
                  "rowId": ".? edukasi"
                }, {
                  "title": "Menu 12 |🖼️|",
                  "description": "Radom Image",
                  "rowId": ".? image"
                },  {
                  "title": "Menu 13 |🎫|",
                  "description": "Sticker",
                  "rowId": ".? stiker"
                }, {
                  "title": "Menu 14 |🐚|",
                  "description": "Kerang ajaib",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "Menu 15 |📑|",
                  "description": "Quotes",
                  "rowId": ".? quotes"
                }, {
                  "title": "Menu 16 |👑|",
                  "description": "Admin Group",
                  "rowId": ".? admin"
                }, {
                  "title": "Menu 17 |👥|",
                  "description": "Group Chat",
                  "rowId": ".? grup"
                }, {
                  "title": "Menu 18 |🌟|",
                  "description": "Premium Users",
                  "rowId": ".? premium"
                }, {
                  "title": "Menu 19 |💻|",
                  "description": "Internet",
                  "rowId": ".? internet"
                }, {
                  "title": "Menu 20 |🎭|",
                  "description": "Anonymous Chat",
                  "rowId": ".? anonymous"
                }, {
                  "title": "Menu 21 |✍️|",
                  "description": "Menulis & Membuat Logo",
                  "rowId": ".? nulis"
                }, {
                  "title": "Menu 22 |🎶|",
                  "description": "Sound",
                  "rowId": ".? sound"                
                }, {
                  "title": "Menu 23 |📥|",
                  "description": "Downloader",
                  "rowId": ".? downloader"                
                }, {
                  "title": "Menu 24 |🎧|",
                  "description": "Voice Note Imut",
                  "rowId": ".? vn"
                }, {
                  "title": "Menu 25 |🧰|",
                  "description": "Tools",
                  "rowId": ".? tools"
                }, {
                  "title": "Menu 26 |📂|",
                  "description": "Database",
                  "rowId": ".? database"
                }, {
                  "title": "Menu 27 |🗳️|",
                  "description": "Vote & Absen",
                  "rowId": ".? vote"
                }, {
                  "title": "Menu 28 |🎙️|",
                  "description": "Voice Changer",
                  "rowId": ".? audio"
                }, {
                  "title": "Menu 29 |🤖|",
                  "description": "Jadibot",
                  "rowId": ".? jadibot"
                }, {
                  "title": "Menu 30 |ℹ️|",
                  "description": "Info",
                  "rowId": ".? info"
                }, {
                  "title": "Menu 31 |❓|",
                  "description": "No Category",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "Menu 32 | 🧑‍💻|",
                  "description": "Owner",
                  "rowId": ".? owner"
                }],
                                "title": "✧───────────────[ Menu ]───────────────✧"
                                }, {
                                "rows": [{
                                "title": "[🗳️] Donasi",
                                "description": "Donasi kak, jangan enak pakenya doang",
                                "rowId": ".donasi"
                                }, {
                                "title": "[🔖] Sewa",
                                "description": "Menampilkan List harga sewabot",
                                "rowId": ".sewa"
                                }, {
                                "title": "[🎗️] Premium",
                                "description": "Menampilkan List Harga premium",
                                "rowId": ".premium"
                                }, {
                                "title": "[🔬] Script",
                                "description": "Script Bot",
                                "rowId": ".sc"
                                }, {
                                "title": "[🎖️] Thanks To",
                                "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam bot",
                                "rowId": ".? thnks"
                                }],
                                "title": "✧────────────────[ Info ]────────────────✧"
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
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
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
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
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
    // await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), '🎮 Ƙαɴɴα вσт', 'Owner', '.owner', 'Donasi', '.donasi', 'Rules', '.infobot', m)
    await conn.send3ButtonLoc(m.chat, logo, '──────────[ *DASHBOARD* ]──────────', text.trim(), 'Owner', '.nowner', 'Donasi', '.donasi', 'Rules', '.rules', m)
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
        "title": '✧───────···[ Menu ]···────────✧',
        "description": `\n${wm}\n` + text,
        "retailerId": `${week}, ${date}  |  𝙱𝚢 𝚈𝚊𝚗𝚣𝚣 ‷♪`,
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
    res = "Selamat pagi 🌄"
  }
  if (time > 10) {
    res = "Selamat siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat malam 🌙"
  }
  return res
}

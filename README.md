
<p align="center">
    <img src="https://telegra.ph/file/4637101da58e21976363b.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<p align="center"> <a href="https://Lexxy24.github.io"> <img src="http://readme-typing-svg.herokuapp.com?color=FFFFFF&center=true&vCenter=true&multiline=false&lines=I'm+Yanzz+Bot;Give+Star+And+Forks+This+Repo;Follow+My+Github" alt="Lexxy Official" /> </a> </p>

<a href="https://github.com/Kannachann/kanna-wabot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Kannachann/kanna-wabot?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Kannachann/kanna-wabot/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/Kannachann/kanna-wabot?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Kannachann/kanna-wabot/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Kannachann/kanna-wabot?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Kannachann/kanna-wabot/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/Kannachann/kanna-wabot?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/Kannachann/kanna-wabot/issues"><img title="Issues" src="https://img.shields.io/github/issues/Kannachann/kanna-wabot?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/Kannachann/kanna-wabot/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/Kannachann/kanna-wabot?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/Kannachann/kanna-wabot/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/Kannachann/kanna-wabot?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/Kannachann/kanna-wabot/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/Kannachann/kanna-wabot?label=PullRequest&color=red&style=flat-square"></a>

 FOR DEPLOY HEROKU USER

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Lord-Ammar/REST-FREE)

 Heroku Buildpack

| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |
| **Node.js [salin]**     | heroku/nodejs|


 FOR DEPLOY RAILWAY USER

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FKangsad01%2FWabot-Tsb01)

 FOR DEPLOY REPLIT USER

[![Run on Repl.it](https://repl.it/badge/github/FadliDarmawan/haruno)](https://repl.it/github/Yanzz-Bot/Lord-BotV3/)
```cmd
Open Console
------------
> npm i
> npm i qrcode
> install-pkg webp
> install-pkg ffmpeg
-------------
Click Run
```
 Whatsapp

[![WhatsApp Me](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6288287810316/)
[![Whatsapp BOT](https://img.shields.io/badge/WhatsApp%20BOT-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6282186172016/)

 UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Yanzz-Bot/Yanzz-V2
cd Yanzz-V2
npm i
npm update
node .
```

---------

 UNTUK PENGGUNA TERMUX
```bash
termux-setup-storage
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install libwebp
git clone https://github.com/Yanzz-Bot/Yanzz-V2
cd Yanzz-V2
npm install -g npm@6.14.14
npm start
```

---------

 Arguments `node . [--options] [<session name>]`

  Contoh: `node . --self --restrict --autoread`

 `--self`

Aktifkan mode self (Mengabaikan yang lain)

 `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

 `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

 `--db <json-server-url>`

Gunakan db eksternal alih-alih db lokal, 
Contoh Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

Server harus memiliki spesifikasi seperti ini

 GET

```http
GET /
Accept: application/json
```

 POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

 `--big-qr`

Jika qr unicode kecil tidak mendukung

 `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **diblokir** jika digunakan terlalu sering)

* Administrasi Grup `add, kick, promote, demote`

 `--img`

Aktifkan pemeriksa gambar melalui terminal

 `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

 `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

 `--test`

**Development** Testing Mode

 `--trace`

```js
conn.logger.level = 'trace'
```

 `--debug`

```js
conn.logger.level = 'debug'
```

---------



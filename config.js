
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}


global.ownername = 'โคอกอโ๐๐๐ ๐๐๐๐-๐๐'
global.Anticall = false
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['60178251004','60178251004','60178251004']
global.premium = ['60178251004']
global.packname = 'แฅฌ๐คซแญ๐ท+60178251004โแญโฟ'
global.author = '๊งโฟ๐ฌ๐ฎ๐ป ๐ง๐ต๐ฒ๐๐ผ๐ฝ๐ฝใ๐ฎ๐ฑ๐ดใ โฟ๊ง'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','๐ฆ','๐ค','๐ฟ']
global.sp = 'โญ'
global.mess = {
    success: 'โ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./src/gambar/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

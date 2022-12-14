
require('./config')
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { intro } = require('./lib/intro')
const { entri } = require('./lib/entri')
const { thejo } = require('./src/virtex/thejo')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
  
async function startjobotz() {
    const jobotz = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['BOT PRIVATE', 'Safari','1.0.0'],
        auth: state
    })

    store.bind(jobotz.ev)
    
    // anticall auto block
    jobotz.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await jobotz.sendContact(callerId, global.owner)
    jobotz.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!`}, { quoted : pa7rick })
    await sleep(8000)
    await jobotz.updateBlockStatus(callerId, "block")
    }
    })

    jobotz.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!jobotz.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(jobotz, mek, store)
        require("./jo")(jobotz, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    // Group Update
    jobotz.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await jobotz.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       jobotz.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       jobotz.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       jobotz.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       jobotz.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       jobotz.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
     }
    })

jobotz.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await jobotz.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    pp_user = await jobotz.profilePictureUrl(num, 'image')
                } catch {
                   var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await jobotz.profilePictureUrl(anu.id, 'image')
                } catch {
                   var ppgroup =  "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
                }
	 
 if (anu.action == 'add') {
 anunya =`
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐖𝐄𝐋𝐂𝐎𝐌𝐄️🎗•╼⃟݊⃟̥⃝̇݊݊⃟  
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━╾╮
┃│╭┈────────────╮
┃││ ݊⃟̥⃝̇݊⃟╾• @${num.split("@")[0]}•╼⃟݊⃟̥⃝̇݊݊⃟  
┃│╰┈────────────╯
┃│᭄⃟ꪶ⃟•╾•🌷 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐈𝐍
┃│᭄⃟ꪶ⃟•╾• ${metadata.subject}
┃╰━━━━━━━━━━━━━━━╾╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━╾╮
┃│╭┈────────────╮
┃││  ݊⃟̥⃝̇݊⃟╾️•⭕️𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄⭕️•╼⃟݊⃟̥⃝̇݊݊⃟  
┃│╰┈────────────╯
┃│᭄⃟ꪶ⃟•╾ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄
┃│᭄⃟ꪶ⃟•╾ 𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓
┃│᭄⃟ꪶ⃟•╾ https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w
┃╰━━━━━━━━━━━━━━━╾╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰
 
© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`

let buttons = [
{buttonId: `${intro}`, buttonText: { displayText: `𝐖𝐄𝐋𝐂𝐎𝐌𝐄    \n${intro}` }, type: 1 },
]
let buttonMessage = {
image: { url: pp_user },
caption: anunya,
footer: `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(anu.id, buttonMessage)
 } else if (anu.action == 'remove') {
 anunya2 =`
╭━━━━╼⃟݊⃟̥⃝̇݊݊⃟⭕️𝐏𝐑𝐈𝐕𝐀𝐓𝐄⭕️ ݊⃟̥⃝̇݊⃟━━━━╮
┃ ╭━─━─━─≪✠≫─━─━─━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•🎗𝐆𝐎𝐎𝐃 𝐁𝐘𝐄🎗•╼⃟݊⃟̥⃝̇݊݊⃟  
┃ ┃ ╰┈────────────╯
┃ ╰━─━─━─≪✠≫─━─━─━╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━╾╮
┃│╭┈────────────╮
┃││ ݊⃟̥⃝̇݊⃟╾• @${num.split("@")[0]}•╼⃟݊⃟̥⃝̇݊݊⃟  
┃│╰┈────────────╯
┃│᭄⃟ꪶ⃟•╾•🌷 𝐋𝐄𝐀𝐕𝐈𝐍𝐆 𝐅𝐑𝐎𝐌
┃│᭄⃟ꪶ⃟•╾• ${metadata.subject}
┃╰━━━━━━━━━━━━━━━╾╯
┣━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟━•⊰᯽
┃╭━━━━━━━━━━━━━━━╾╮
┃│╭┈────────────╮
┃││  ݊⃟̥⃝̇݊⃟╾•⭕️𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄⭕️•╼⃟݊⃟̥⃝̇݊݊⃟  
┃│╰┈────────────╯
┃│᭄⃟ꪶ⃟•╾ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄
┃│᭄⃟ꪶ⃟•╾ 𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓
┃│᭄⃟ꪶ⃟•╾ https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w
┃╰━━━━━━━━━━━━━━━╾╯
╰━━╼⃟݊⃟̥⃝̇݊݊⃟᯽⃟⃘⃰〘𝚈̲̅𝙰̲̅𝙽̲̅𝙱̲̅𝙾̲̅𝚃̲̅𝚉̲̅:̲̅𝙼̲̅𝙳̲̅〙⃟⃘⃰᯽ ݊⃟̥⃝̇݊⃟╾━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͜͡★𝐘𝐀𝐍 𝐁𝐎𝐓𝐙-𝐌𝐃

 ♡ ㅤ    ❍ㅤ        ⎙ㅤ        ⌲
ᴸⁱᵏᵉ   ᶜᵒᵐᵐᵉⁿᵗ   ᵈᵒʷⁿˡᵒᵃᵈ     ˢʰᵃʳᵉ`
let buttons = [
{buttonId: `${entri}`, buttonText: { displayText: `𝐆𝐎𝐎𝐃 𝐁𝐘𝐄     \n${entri}` }, type: 1 },
]
let buttonMessage = {
image: { url: pp_user },
caption: anunya2,
footer: `© ꧁✿𝗬𝗮𝗻 𝗧𝗵𝗲𝘀𝗼𝗽𝗽ッ𝟮𝟱𝟴〠✿꧂`,
buttons: buttons,
headerType: 4
}
jobotz.sendMessage(anu.id, buttonMessage)
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting
    jobotz.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    jobotz.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = jobotz.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    jobotz.getName = (jid, withoutContact  = false) => {
        id = jobotz.decodeJid(jid)
        withoutContact = jobotz.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = jobotz.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === jobotz.decodeJid(jobotz.user.id) ?
            jobotz.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    jobotz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await jobotz.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await jobotz.getName(i + '@s.whatsapp.net')}\nFN:${await jobotz.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:okeae2410@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/cak_haho\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	jobotz.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    jobotz.setStatus = (status) => {
        jobotz.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    jobotz.public = false

    jobotz.serializeM = (m) => smsg(jobotz, m, store)

    jobotz.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); jobotz.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startjobotz(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startjobotz(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); jobotz.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); jobotz.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startjobotz(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startjobotz(); }
            else jobotz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    jobotz.ev.on('creds.update', saveState)

    // Add Other

      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     jobotz.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return jobotz.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return jobotz.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return jobotz.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return jobotz.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return jobotz.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        jobotz.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        jobotz.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        jobotz.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        jobotz.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    jobotz.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: jobotz.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            jobotz.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    jobotz.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: jobotz.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            jobotz.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    jobotz.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: jobotz.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            jobotz.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    jobotz.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        jobotz.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendText = (jid, text, quoted = '', options) => jobotz.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await jobotz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await jobotz.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await jobotz.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendTextWithMentions = async (jid, text, quoted, options = {}) => jobotz.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await jobotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await jobotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    jobotz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    jobotz.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    jobotz.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await jobotz.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await jobotz.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    jobotz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await jobotz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    jobotz.cMod = (jid, copy, text = '', sender = jobotz.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === jobotz.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    jobotz.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../lib/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return jobotz
}

startjobotz()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
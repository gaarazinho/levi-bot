exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Olá, *${id.split("@s.whatsapp.net")[0]}* 👋️
Aqui estão as informações sobre este bot!✨

[ ️ *${tampilTanggal}* ]
[️ *${tampilWaktu}* ]

🔴 INFO BOT! :

=> *AUTHOR*: ./MrG3P5
=> *YOUTUBE*: X - MrG3P5

🔴 OUTRAS INFORMAÇÕES! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✅Official Grub [1] : ${grupch1}

✅Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
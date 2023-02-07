/**********************************************************
 * @INFO  [PROJECT DISCORD FIVEM RICHPRESENCE]
 * CODED BY: เดินทางไปอวกาศ#6590 & QUALITY SHOP
 * ง่ายๆสั้นๆ ^_^
 *********************************************************/
let playerName = GetPlayerName(PlayerId())
let playerID = GetPlayerServerId(PlayerId());
// อย่าแตะต้อง หากคุณไม่รู้ว่าสิ่งนี้คืออะไร!!
on('onClientResourceStart', async () => {
    await Wait(1000)
    SetDiscordAppId('') //ไอดีบอท https://discord.com/developers/applications/
    SetRichPresence(`${playerName} [${playerID}]`)
    SetDiscordRichPresenceAsset("ชื่อรูป")
    SetDiscordRichPresenceAssetSmall("ชื่อรูป")
    SetDiscordRichPresenceAssetText("ชื่อตรงไอคอน")
    SetDiscordRichPresenceAssetSmallText("ชื่อตรงไอคอน")
    SetDiscordRichPresenceAction(0, "JOIN SERVER", 'https://google.comx')
    SetDiscordRichPresenceAction(1, "FAN PAGE",'https://google.comx')
    console.log('RichPresence Started!')
})
/**********************************************************
 * @INFO  [PROJECT DISCORD FIVEM RICHPRESENCE]
 * CODED BY: เดินทางไปอวกาศ#6590 & QUALITY SHOP
 * ง่ายๆสั้นๆ ^_^
 *********************************************************/ 

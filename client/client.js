
let playerName = GetPlayerName(PlayerId())
let playerID = GetPlayerServerId(PlayerId());

/**********************************************************
 * @INFO  [PROJECT DISCORD FIVEM RICHPRESENCE]
 * CODED BY: เดินทางไปอวกาศ#6590 & QUALITY SHOP
 * ง่ายๆสั้นๆ ^_^
 *********************************************************/

// อย่าแตะต้อง หากคุณไม่รู้ว่าสิ่งนี้คืออะไร!!
on('onClientResourceStart', async () => {
    await Wait(Config.update_delay)
    SetDiscordAppId(Config.ApplicationId)
    SetRichPresence(`PowerBy:JJ COPYX?\n\Username: ${playerName}\nID: ${playerID}`);
    SetDiscordRichPresenceAssetText(Config.text)
    SetDiscordRichPresenceAsset(Config.Assetslogo)
    SetDiscordRichPresenceAssetSmall(Config.LogoSmall)
    SetDiscordRichPresenceAssetSmallText(Config.TextSmall)
    SetDiscordRichPresenceAction(0, Config.ButtonName, Config.dc_invite)
    SetDiscordRichPresenceAction(1, Config.ButtonName1, Config.sv_invit)
    console.log('JJ COPY X? BY: QUALITY SHOP https://discord.gg/Jsmbn79Q4Y')
})
/**********************************************************
 * @INFO  [PROJECT DISCORD FIVEM RICHPRESENCE]
 * CODED BY: เดินทางไปอวกาศ#6590 & QUALITY SHOP
 * ง่ายๆสั้นๆ ^_^
 *********************************************************/
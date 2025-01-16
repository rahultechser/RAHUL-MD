const { System, IronMan, isPrivate, getJson, getBuffer } = require("../lib/");

System({ 
    pattern: "waifu", 
    fromMe: isPrivate, 
    desc: "Send a waifu image", 
    type: "anime" 
}, async (message) => {
    const response = await getJson(await IronMan("ironman/waifu"));
    if (!response.status) return await message.send("_*Failed to fetch image*_");
    await message.send(response.ironman.url, { caption: "*here is your waifu*", quoted: message.data }, "image");
});

System({ 
    pattern: "neko", 
    fromMe: isPrivate, 
    desc: "Send Neko images", 
    type: "anime" 
}, async (message) => {
    const response = await getJson(await IronMan("ironman/neko"));
    if (!response.status) return await message.send("Failed to fetch image");
    await message.send(response.ironman.url, { caption: "*here is your neko*", quoted: message.data }, "image");
});

System({
    pattern: 'fanime (.*)',
    fromMe: isPrivate,
    desc: 'find anime details',
    type: 'anime',
}, async (message, match) => {
    if (!match) return await message.send("*Need an anime name*\n_Example: .anime Future Diary_");    
    const res = await fetch(IronMan(`ironman/s/anime?anime=${encodeURI(match)}`));
    if (!res.ok) return await message.send("*Not Found*\nCheck if the anime name is correct");
    const data = await res.json();
    const { 
        Romaji, Japanese, Summary, Released, Ended, Popularity, 
        Rating, 'Age Rating': AgeRating, Subtype, Status, 
        Poster, Episodes, 'Episode Length': EpisodeLength, 
        'Total Length': TotalLength, 'Show Type': ShowType, 
        NSFW, Low_Cover: Cover, YouTube 
    } = data;
    const caption = `➥ *ɴᴀᴍᴇ:* ${Romaji}\n✰ *ᴛʏᴘᴇ:* ${ShowType}\n✰ *ꜱᴜʙᴛʏᴘᴇ:* ${Subtype}\n✰ *ꜱᴛᴀᴛᴜꜱ:* ${Status}\n✰ *ʀᴇʟᴇᴀꜱᴇᴅ:* ${Released}\n✰ *ᴇɴᴅᴇᴅ:* ${Ended}\n✰ *ᴇᴘɪꜱᴏᴅᴇꜱ:* ${Episodes}\n✰ *ᴛᴏᴛᴀʟ ʟᴇɴɢᴛʜ:* ${TotalLength}\n✰ *ᴇᴘɪꜱᴏᴅᴇ ʟᴇɴɢᴛʜ:* ${EpisodeLength}\n✰ *ᴀɢᴇ ʀᴀᴛɪɴɢ:* ${AgeRating}\n✰ *ᴘᴏᴘᴜʟᴀʀɪᴛʏ:* ${Popularity}\n✰ *ʀᴀᴛɪɴɢ:* ${Rating}\n✰ *ɴꜱꜰᴡ:* ${NSFW}\n✰ *ꜱᴜᴍᴍᴀʀʏ:* ${Summary}\n➥ *ᴛʀᴀɪʟᴇʀ:* https://youtube.com/watch?v=${YouTube}\n`;    
    await message.send({ url: Poster }, { caption, linkPreview: { title: data['English Title'], body: Japanese, thumbnail: await getBuffer(Cover), mediaType: 1, mediaUrl: "https://github.com/Loki-Xer/Jarvis-md", sourceUrl: "https://github.com/Loki-Xer/Jarvis-md", showAdAttribution: false, renderLargerThumbnail: true }, quoted: message }, 'image');
});

System({
    pattern: 'aquote ?(.*)',
    fromMe: isPrivate,
    desc: 'Get a random anime quote',
    type: 'anime',
}, async (message, match) => {
    const data = await getJson(IronMan('api/aquote'));
    if (!data && !data.result && !data.result.length > 0) return await message.reply('_*No quotes found.*_');
    const randomIndex = Math.floor(Math.random() * data.result.length);
    const { english: enquote, character, anime } = data.result[randomIndex];
    await message.send(`*➭QUOTE:* ${enquote}\n*➭CHARACTER:* ${character}\n*➭ANIME:* ${anime}`);
});

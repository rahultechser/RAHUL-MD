const {
    System,
    IronMan,
    getJson,
    postJson,
    isPrivate,
    interactWithAi,
    makeUrl,
    gemini,
    config
} = require("../lib/");

System({
    pattern: "thinkany", 
    fromMe: isPrivate,
    desc: "ai thinkany", 
    type: "ai",
}, async (m, match) => {
    match = match || m.reply_message.text;
    if(match && m.quoted) match = match + m.reply_message.text;
    if(!match) return m.reply("_*need query !!*_\n_*eg: .thinkany who is rahul ser*_");
    const { result } = await interactWithAi("thinkany", match);
    await m.send(result, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ᴛʜɪɴᴋᴀɴʏ ᴀɪ' }}});
});

System({
    pattern: "aoyo", 
    fromMe: isPrivate,
    desc: "ai aoyo", 
    type: "ai",
}, async (m, match) => {
    match = match || m.reply_message.text;
    if(match && m.quoted) match = match + m.reply_message.text;
    if(!match) return m.reply("_*need query !!*_\n_*eg: .aoyo who is rahul ser*_");
    const { result } = await interactWithAi("aoyo", match);
    await m.send(result, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ᴀᴏʏᴏ ᴀɪ' }}});
});

System({
    pattern: "prodia", 
    fromMe: isPrivate,
    desc: "prodia image gen ai", 
    type: "ai",
}, async (m, match) => {
    match = match || m.reply_message.text;
    if(match && m.quoted) match = match + m.reply_message.text;
    if(!match) return m.reply("_*need query !!*_\n_*eg: .prodia a girl in full moon*_");
    await m.reply("*please wait generating*");
    const img = await interactWithAi("prodia", match);
    await m.sendFromUrl(img, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ᴩʀᴏᴅɪᴀ ᴀɪ' }}});
});


System({
    pattern: "dalle", 
    fromMe: isPrivate,
    desc: "dalle image gen ai", 
    type: "ai",
}, async (m, match) => {
    match = match || m.reply_message.text;
    if(match && m.quoted) match = match + m.reply_message.text;
    if(!match) return m.reply("_*need query !!*_\n_*eg: .dalle a girl in full moon*_");
    await m.reply("*please wait generating*");
    const img = await interactWithAi("dalle", match);
    await m.sendFromUrl(img, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ᴅᴀʟʟᴇ ᴀɪ' }}});
});


System({
    pattern: "lepton", 
    fromMe: isPrivate,
    desc: "ai lepton", 
    type: "ai",
}, async (m, match) => {
    match = match || m.reply_message.text;
    if(match && m.quoted) match = match + m.reply_message.text;
    if(!match) return m.reply("_*need query !!*_\n_*eg: .lepton who is rahul ser*_");
    const { result } = await interactWithAi("lepton", match);
    await m.send(result.replace(/\[[^\]]*\]|\([^)]*\)|<[^>]*>/g, ''), { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ʟᴇᴩᴛᴏɴ ᴀɪ' }}});
});

System({
    pattern: "gpt", 
    fromMe: isPrivate,
    desc: "ai chatgpt", 
    type: "ai",
}, async (m, match) => {
    match = match || m.reply_message.text;
    if(match && m.quoted) match = match + m.reply_message.text;
    if(!match) return m.reply("_*need query !!*_\n_*eg: .chatgpt who is rahul ser*_");
    const { response } = await interactWithAi("gpt", match);
    await m.send(response, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ᴄʜᴀᴛɢᴩᴛ 4' }}});
});

System({
    pattern: "bb", 
    fromMe: isPrivate,
    desc: "blackbox ai", 
    type: "ai",
}, async (m, match) => {
       match = match || m.reply_message.text;
       if(match && m.quoted) match = match + m.reply_message.text;
       if(!match) return m.reply("_*need query !!*_\n_*eg: .bb who is rahul ser*_");
       const { result } = await interactWithAi("blackbox", match);
       await m.send(result, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ʙʟᴀᴄᴋ ʙᴏx' }}});
});

System({
    pattern: "chatgpt", 
    fromMe: isPrivate,
    desc: "ai chatgpt", 
    type: "ai",
}, async (m, match) => {
    match = match || m.reply_message.text;
    if(match && m.quoted) match = match + m.reply_message.text;
    if(!match) return m.reply("_*need query !!*_\n_*eg: .chatgpt who is rahul ser*_");
    const response = await interactWithAi("chatgpt", match);
    await m.send(response, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ᴄʜᴀᴛɢᴩᴛ' }}});
});

System({
    pattern: 'upscale ?(.*)',
    fromMe: isPrivate,
    desc: 'Enhance images with AI',
    type: 'ai',
}, async (message, match) => {
    if (!message.quoted || !message.reply_message.image) return await message.send("Reply to an image baka!");
    const img = await message.reply_message.downloadAndSave();
    const upscale = await interactWithAi("upscale", img);
    await message.send(upscale, { caption: "_*upscaled 🍉*_" }, "img");
});

System({
	pattern: 'ocr ?(.*)',
	fromMe: isPrivate,
	desc: 'Text Recognition from image',
	type: 'ai',
}, async (message, match) => {
    if(!message.reply_message.image) return await message.reply("_Reply to a image_");
    const data = await makeUrl(await message.reply_message.downloadAndSaveMedia());
    const res = await fetch(IronMan(`ironman/ai/ocr?url=${data}`));
    if (res.status !== 200) return await message.reply('*Error*');
    const text = await res.json()
    if (!text.text) return await message.reply('*Not found*');
    await message.reply(`\`\`\`${text.text}\`\`\``);
});

System({
  pattern: 'detectai ?(.*)',
  fromMe: isPrivate,
  desc: 'Detects AI-generated text',
  type: 'ai',
}, async (message, match) => {
  const text = message.reply_message.text || match;
  const data = await getJson(IronMan(`ironman/ai/detectai?text=${encodeURIComponent(text)}`));
  let output = "*𝙰𝙸 𝙳𝙴𝚃𝙴𝙲𝚃𝙸𝙾𝙽*\n\n" + data.slice(0, 3).map((item, i) => `*тєχт:* ${item.text}\n*ѕ¢σяє:* ${(item.score * 100).toFixed(2)}%\n*туρє:* ${item.type}\n\n` + (i === 2 && data.length > 3 ? readMore : '')).join('');
  await message.reply(output.trim());
});


System({
   pattern: 'gemini ?(.*)',
   fromMe: isPrivate,
   desc: 'Chat with gemini ai',
   type: 'ai',
}, async (message, match) => {
  match = match || message.reply_message.text;
  if (!(match || message.quoted) || (message.quoted && !message.reply_message.image)) return message.reply("_*Need Prompt !!*_\n_*eg: .gemini who is iron man?*_\n _For image you have to Reply to an image and also give a prompt_");
  const path = message.quoted && message.reply_message?.image ? await message.reply_message.downloadAndSaveMedia() : null;
  const res = await gemini(match, path);
  await message.send(res, { contextInfo: { forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363197401188542@newsletter', newsletterName: 'ɢᴇᴍɪɴɪ ᴀɪ' } } });
});

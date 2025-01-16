const {
    System,
    setData,
    getData,
    transformData,
    makeInDb
} = require('../lib');
const { parsedJid, isAdmin } = require("./client/");
const actions = ['kick','warn','null']


System({
    pattern: 'antiword ?(.*)',
    type: "manage",
    fromMe: true,
    onlyGroup: true,
    adminAccess: true,
    desc: 'remove users who use restricted words'
}, async (message, match) => {
    if (!match) return await message.reply("_*antiword* on/off_\n_*antiword* action warn/kick/null_");
    const antiword = await transformData(message.jid, "antiword")
    if(match.toLowerCase() == 'get') {
    	const status = antiword && antiword.status == 'true' ? true : false
        if(!status  || !antiword.value) return await message.send('_Not Found_');
        return await message.send(`_*activated antiwords*: ${antiword.value}_`);
    } else if(match.toLowerCase() == 'on') {
    	const action = antiword && antiword.action ? antiword.action : 'null';
        const word = antiword && antiword.value ? antiword.value : undefined;
        await makeInDb(message.jid, { status: "true", action: action, value: word }, "antiword");
        return await message.send(`_antiword Activated with action null_\n_*antiword action* warn/kick/null for chaning actions_`)
    } else if(match.toLowerCase() == 'off') {
    	const action = antiword && antiword.action ? antiword.action : 'null';
        const word = antiword && antiword.value ? antiword.value : undefined;
        await makeInDb(message.jid, { status: "false", action: action, value: word }, "antiword");
        return await message.send(`_antiword deactivated_`)
    } else if(match.toLowerCase().match('action')) {
    	const status = antiword && antiword.status ? antiword.status : 'false';
	const word = antiword && antiword.value ? antiword.value : undefined;
        match = match.replace(/action/gi,'').trim();
        if(!actions.includes(match)) return await message.send('_action must be warn,kick or null_')
        await makeInDb(message.jid, { status: status, action: match, value: word }, "antiword");
        return await message.send(`_antiword Action Updated_`);
    } else {
    	if(!match) return await message.send('_*Example:* antiword 🏳️‍🌈, gay, nigga_');
    	const status = antiword && antiword.status ? antiword.status : 'false';
        const action = antiword && antiword.action ? antiword.action : 'null';
        await makeInDb(message.jid, { status: status, action: action, value: match }, "antiword");
        return await message.send(`_Antiwords Updated_`);
    }
});

System({
    pattern: 'antilink ?(.*)',
    type: "manage",
    fromMe: true,
    onlyGroup: true,
    adminAccess: true,
    desc: 'remove users who use bot'
}, async (message, match) => {
    if (!match) return await message.reply(`_*antilink* on/off/get_\n_*antilink* action warn/kick/null_\n_*antilink:* null/whatsapp.com_`);
    const antilink = await transformData(message.jid, "antilink");
    if(match.toLowerCase() === 'on') {
    	const action = antilink && antilink.action ? antilink.action : 'null';
        const value = antilink && antilink.allowedUrls ? antilink.allowedUrls : 'null';
        await makeInDb(message.jid, { status: "true", action, value }, "antilink");
        return await message.send(`_antilink Activated with action null_\n_*antilink action* warn/kick/null for chaning actions_`)
    } else if(match.toLowerCase() === 'off') {
    	const action = antilink && antilink.action ? antilink.action : 'null';
        const value = antilink && antilink.allowedUrls ? antilink.allowedUrls : 'null';
        await makeInDb(message.jid, { status: "false", action, value }, "antilink");
        return await message.send(`_antilink deactivated_`)
    } else if(match.toLowerCase() === 'get') {
	const allowedUrls = antilink && antilink.allowedUrls ? antilink.allowedUrls : 'null';
        const withExclamation = allowedUrls.split(',').filter(item => item.startsWith('!')).join(',');
        const withoutExclamation = allowedUrls.split(',').filter(item => !item.startsWith('!')).join(',');
        const text = [withExclamation && `_Not Allowed URL: ${withExclamation}_`, withoutExclamation && `_Allowed urls: ${withoutExclamation}_`].filter(Boolean).join('\n');
        return message.send(`_Antlink_\n\n_Status : ${antilink.enabled}_\n_Action: ${antilink.action}_\n` + text);
    } else if(match.toLowerCase().match('action')) {
    	const status = antilink && antilink.enabled ? antilink.enabled : 'true';
        match = match.replace(/action/gi,'').trim();
        if(!actions.includes(match)) return await message.send('_action must be warn,kick or null_')
        const value = antilink && antilink.allowedUrls ? antilink.allowedUrls : 'null';
        await makeInDb(message.jid, { status, action: match, value }, "antilink");
        return await message.send(`_Antilink Action Updated_`);
    } else {
    	const action = antilink && antilink.action ? antilink.action : 'null';
    	const status = antilink && antilink.enabled ? antilink.enabled : 'true';
        await makeInDb(message.jid, { status, action, value: match }, "antilink");
	const withExclamation = match.split(',').filter(item => item.startsWith('!')).join(',');
        const withoutExclamation = match.split(',').filter(item => !item.startsWith('!')).join(',');
        return await message.send([withExclamation && `_Antilink Not Allowed URL updated: ${withExclamation}_`, withoutExclamation && `_Antilink allowed urls Updated to: ${withoutExclamation}_`].filter(Boolean).join('\n'));
    };
});

System({
    pattern: 'antifake ?(.*)',
    fromMe: true,
    type: 'manage',
    onlyGroup: true,
    adminAccess: true,
    desc: 'remove fake numbers'
}, async (message, match) => {
    if (!match) return await message.reply('_*antifake* 94,92_\n_*antifake* on/off_\n_*antifake* list_');
    const { antifake } = await getData(message.chat);
    if(match.toLowerCase()==='get'){
    if(!antifake || antifake.status === 'false' || !antifake.message) return await message.send('_Not Found_');
    return await message.send(`_*activated restricted numbers*: ${antifake.message}_`);
    } else if(match.toLowerCase() === 'on') {
    	const data = antifake && antifake.message ? antifake.message : '';
    	await setData(message.jid, data, "true", "antifake");
        return await message.send(`_Antifake Activated_`)
    } else if(match.toLowerCase() === 'off') {
        const data = antifake && antifake.message ? antifake.message : '';
    	await setData(message.jid, data, "false", "antifake");
    return await message.send(`_Antifake Deactivated_`)
    }
    match = match.replace(/[^0-9,!]/g, '');
    if(!match) return await message.send('value must be number');
    const status = antifake && antifake.status ? antifake.status : 'true';
    await setData(message.jid, match, status, "antifake");
    return await message.send(`_Antifake Updated_`);
});

System({
    pattern: 'antibot ?(.*)',
    type: "manage",
    fromMe: true,
    onlyGroup: true,
    adminAccess: true,
    desc: 'remove users who use bot'
}, async (message, match) => {
    if (!match) return await message.reply("_*antibot* on/off_\n_*antibot* action warn/kick/null_");
    const { antibot } = await getData(message.chat)
    if(match.toLowerCase() === 'on') {
    	const action = antibot && antibot.message ? antibot.message : 'null';
        await setData(message.jid, action, "true", "antibot");
        return await message.send(`_antibot Activated with action null_\n_*antibot action* warn/kick/null for chaning actions_`)
    } else if(match.toLowerCase() === 'off') {
    	const action = antibot && antibot.message ? antibot.message : 'null';
        await setData(message.jid, action, "false", "antibot");
        return await message.send(`_antibot deactivated_`)
    } else if(match.toLowerCase().match('action')) {
    	const status = antibot && antibot.status ? antibot.status : 'true';
        match = match.replace(/action/gi,'').trim();
        if(!actions.includes(match)) return await message.send('_action must be warn,kick or null_')
        await setData(message.jid, match, status, "antibot");
        return await message.send(`_AntiBot Action Updated_`);
    }
});

System({
    pattern: 'antidemote ?(.*)',
    type: 'manage',
    fromMe: true,
    onlyGroup: true,
    adminAccess: true,
    desc: 'demote actor and re-promote demoted person'
}, async (message, match) => {
    if (!match) return await message.send("Choose settings to change antidemote settings", { values: [{ displayText: "on", id: "antidemote on"}, { displayText: "off", id: "antidemote off"}], onlyOnce: true, withPrefix: true, participates: [message.sender] }, "poll");
    if (match != 'on' && match != 'off') return message.reply('_antidemote on_');
    const { antidemote } = await getData(message.jid);
    if (match === 'on') {
        if (antidemote && antidemote.status == 'true') return message.reply('_Already activated_');
        await setData(message.jid, "active", "true", "antidemote");
        return await message.reply('_activated_');
    } else if (match === 'off') {
        if (antidemote && antidemote.status == 'false') return message.reply('_Already Deactivated_');
        await setData(message.jid, "disactive", "false", "antidemote");
        return await message.reply('_deactivated_')
    }
});

System({
    pattern: 'antipromote ?(.*)',
    type: 'manage',
    fromMe: true,
    onlyGroup: true,
    adminAccess: true,
    desc: 'demote actor and re-promote demoted person'
}, async (message, match) => {
    if(!message.isGroup) return;
    if (!match) return await message.send("Choose settings to change antipromote settings", { values: [{ displayText: "on", id: "antipromote on"}, { displayText: "off", id: "antipromote off"}], onlyOnce: true, withPrefix: true, participates: [message.sender] }, "poll");
    if (match != 'on' && match != 'off') return message.reply('antipromote on');
    const { antipromote } = await getData(message.chat);
    if (match === 'on') {
        if (antipromote && antipromote.status == 'true') return message.reply('_Already activated_');
        await setData(message.jid, "active", "true", "antipromote");
        return await message.reply('_activated_')
    } else if (match === 'off') {
        if (antipromote && antipromote.status == 'false') return message.reply('_Already Deactivated_');
        await setData(message.jid, "disactive", "false", "antipromote");
        return await message.reply('_deactivated_')
    }
});

System({
    pattern: "antidelete",
    fromMe: true,
    type: "manage",
    desc: "Manage anti-delete settings",
}, async (message, match) => {
    if(!match) return await message.reply("*Example:*\n\n_*antidelete on/off*_\n_*antidelete jid/chat/pm*_\n");
    const { antidelete } = await getData(message.user.id);
    if (match === "off") {
         const jid = antidelete && antidelete.message ? antidelete.message : "chat";
        await setData(message.user.id, jid, "false", "antidelete");
        await message.reply("_*antidelete disabled*_");
    } else if (match === "on") {
        const jid = antidelete && antidelete.message ? antidelete.message : "chat";
        await setData(message.user.id, jid, "true", "antidelete");
        await message.reply("_*antidelete enabled*_");
    } else {
        const [jid] = await parsedJid(match);
        if (!jid && match !== "chat" && match !== "pm") return await message.reply("*Example:*\n\n_*antidelete on/off*_\n_*antidelete jid/chat/pm*_");
        const status = antidelete?.status || "false";
        await setData(message.user.id, jid || match, status, "antidelete");
        await message.reply(`_*antidelete set to ${jid || match}*_`);
    }
});


System({
    pattern: 'welcome ?(.*)',
    type: 'greetings',
    fromMe: true,
    onlyGroup: true,
    adminAccess: true,
    desc: 'set welcome message'
}, async (message, match) => {
    const { welcome } = await getData(message.from);
    if (match.toLowerCase() === 'get') {
        if (!welcome && !welcome.message) return await message.send('*_Not Set Yet_*');
        return await message.send(welcome.message);
    } else if (match.toLowerCase() === 'off') {
        const status = welcome && welcome.status ? welcome.status : 'false';
        if (status === 'false') return await message.send(`_already deactivated_`);
        await setData(message.jid, welcome.message, 'false', 'welcome');
        return await message.send('*successfully deactivated*');
    } else if (match.toLowerCase() === 'on') {
        const status = welcome && welcome.status ? welcome.status : 'false';
        if (status === 'true') return await message.send(`_already activated_`);
        await setData(message.jid, welcome.message, 'true', 'welcome');
        return await message.send('*successfully activated*');
    } else if (match) {
        const status = welcome && welcome.status ? welcome.status : 'true';
        await setData(message.jid, match, status, 'welcome');
        return await message.send('*successfully set*');
    }
    return await message.reply('_*welcome get*_\n_*welcome* thank you for joining &mention_\n*_welcome false_*');
});

System({
    pattern: 'goodbye ?(.*)',
    type: 'greetings',
    fromMe: true,
    onlyGroup: true,
    adminAccess: true,
    desc: 'set goodbye message'
}, async (message, match) => {
    const { exit } = await getData(message.jid);
    if (match.toLowerCase() === 'get') {
        if (!exit && !exit.message) return await message.send('*_Not Set Yet_*');
        return await message.send(exit.message);
    } else if (match.toLowerCase() === 'off') {
        const status = exit && exit.status ? exit.status : 'false';
        if (status === 'false') return await message.send(`_already deactivated_`);
        await setData(message.jid, exit.message, 'false', 'exit');
        return await message.send('*successfully deactivated*');
    } else if (match.toLowerCase() === 'on') {
        const status = exit && exit.status ? exit.status : 'false';
        if (status === 'true') return await message.send(`_already activated_`);
        await setData(message.jid, exit.message, 'true', 'exit');
        return await message.send('*successfully activated*');
    } else if (match) {
        const status = exit && exit.status ? exit.status : 'true';
        await setData(message.jid, match, status, 'exit');
        return await message.send('*successfully set*');
    }
    return await message.reply('_*goodbye get*_\n_*goodbye* thank you for joining &mention_\n*_goodbye false_*');
});

System({
    pattern: "pdm",
    fromMe: true,
    type: "manage",
    onlyGroup: true,
    adminAccess: true,
    desc: "To get info about promot and demote"
}, async (message, match) => {
    if (match === "on") { 
      await setData(message.jid, "active", "true", "pdm");
      return await message.send("_*activated*_");
    } else if (match === "off") {
      await setData(message.jid, "disactive", "false", "pdm");
      return await message.send("_*deactivated*_");
    } else {
     await message.send("\n*Choose a setting to pdm settings*\n", { values: [ { displayText: "*on*", id: "pdm on" }, { displayText: "*off*", id: "pdm off" } ], withPrefix: true, participates: [message.sender] }, "poll");
    }
});

System({
    pattern: "gcaccess",
    fromMe: true,
    type: "manage",
    onlyGroup: true,
    adminAccess: true,
    desc: "To give access to group cmds"
}, async (message, match) => {
    if (!await isAdmin(message, message.user.jid)) return await message.send("_I'm not an admin_");
    if (match === "on") { 
      await setData(message.jid, "active", "true", "adminAccess");
      return await message.send("_*activated*_");
    } else if (match === "off") {
     await setData(message.jid, "disactive", "false", "adminAccess");
     return await message.send("_*deactivated*_");
    } else {
     await message.send("\n*Choose a option to set admin access to this group*\n", { values: [ { displayText: "*on*", id: "gcaccess on" }, { displayText: "*off*", id: "gcaccess off" } ], withPrefix: true, participates: [message.sender] }, "poll");
    }
});

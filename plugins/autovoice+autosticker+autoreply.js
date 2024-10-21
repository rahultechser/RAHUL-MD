
/**

//══════════════════════════════════════════════════════════════════════════════\\
//                                                                                            \\
//          ██████╗  █████╗ ██╗  ██╗██╗   ██╗██╗         ███╗   ███╗██████╗            \\
//          ██╔══██╗██╔══██╗██║  ██║██║   ██║██║         ████╗ ████║██╔══██╗          \\
//          ██████╔╝███████║███████║██║   ██║██║         ██╔████╔██║██║  ██║          \\
//          ██╔══██╗██╔══██║██╔══██║██║   ██║██║         ██║╚██╔╝██║██║  ██║          \\
//          ██║  ██║██║  ██║██║  ██║╚██████╔╝███████╗    ██║ ╚═╝ ██║██████╔╝          \\
//          ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝     ╚═╝╚═════╝            \\
//                                                                                             \\
//═══════════════════════════════════════════════════════════════════════════════\\

   * @Project_Name : Rahul-Md
   * @author : Rahul Tech Ser
   * @youtube : https://youtube.com/@rahultech009
   * @description : Rahul-Md ,A Multi-functional whatsapp user bot.
   * @version : V1
*
* 
   * Created By Rahul Debnath.
   * © 2024 Rahul-Md.
*/



const _0x4faea3=_0x4b65;(function(_0x514fcf,_0x590121){const _0x343faf=_0x4b65,_0x40554c=_0x514fcf();while(!![]){try{const _0x4bdef9=-parseInt(_0x343faf(0xaf))/0x1*(-parseInt(_0x343faf(0xbb))/0x2)+parseInt(_0x343faf(0xa9))/0x3*(parseInt(_0x343faf(0xb0))/0x4)+parseInt(_0x343faf(0xaa))/0x5*(-parseInt(_0x343faf(0xa5))/0x6)+parseInt(_0x343faf(0x9f))/0x7+parseInt(_0x343faf(0xb5))/0x8+parseInt(_0x343faf(0xba))/0x9*(-parseInt(_0x343faf(0xa6))/0xa)+parseInt(_0x343faf(0xa4))/0xb;if(_0x4bdef9===_0x590121)break;else _0x40554c['push'](_0x40554c['shift']());}catch(_0x4ed117){_0x40554c['push'](_0x40554c['shift']());}}}(_0x4f18,0xa7996));const fs=require('fs'),path=require(_0x4faea3(0xbd)),{readEnv}=require(_0x4faea3(0xa0)),{cmd,commands}=require('../command');function _0x4f18(){const _0x256e1c=['../rahul-md/autovoice.json','10QHrVCa','1264764YnaahD','readFileSync','toLowerCase','utf8','reply','124896kxcwEw','true','join','../rahul-md/autosticker.json','audio/mpeg','234VAqark','132654ztZfEc','AUTO_REPLY','path','8052338WglUHP','../lib/database','body','RAHUL\x20TECH\x20SER','sendMessage','2575232UTPyfs','2558970PBGjRQ','487130QvQdpD','AUTO_VOICE','AUTO_STICKER','3QhNmbx','5wiINHT','../rahul-md/autoreply.json','recording','sendPresenceUpdate'];_0x4f18=function(){return _0x256e1c;};return _0x4f18();}function _0x4b65(_0x162135,_0x10d8ce){const _0x4f1868=_0x4f18();return _0x4b65=function(_0x4b654f,_0x4ede6c){_0x4b654f=_0x4b654f-0x9f;let _0x165631=_0x4f1868[_0x4b654f];return _0x165631;},_0x4b65(_0x162135,_0x10d8ce);}cmd({'on':'body'},async(_0x51ff49,_0x273294,_0x3e6124,{from:_0x1392fb,body:_0x1f25e6,isOwner:_0x2be174})=>{const _0x3f57ff=_0x4faea3,_0x365dbd=path['join'](__dirname,_0x3f57ff(0xae)),_0x373b7f=JSON['parse'](fs['readFileSync'](_0x365dbd,_0x3f57ff(0xb3)));for(const _0x3da261 in _0x373b7f){if(_0x1f25e6['toLowerCase']()===_0x3da261['toLowerCase']()){const _0x5aec53=await readEnv();_0x5aec53[_0x3f57ff(0xa7)]==='true'&&(await _0x51ff49[_0x3f57ff(0xad)](_0x3f57ff(0xac),_0x1392fb),await _0x51ff49[_0x3f57ff(0xa3)](_0x1392fb,{'audio':{'url':_0x373b7f[_0x3da261]},'mimetype':_0x3f57ff(0xb9),'ptt':!![]},{'quoted':_0x273294}));}}}),cmd({'on':_0x4faea3(0xa1)},async(_0x4de260,_0x565f1b,_0x29ff4e,{from:_0x14758e,body:_0x2a16ce,isOwner:_0x56f0f4})=>{const _0xb67a90=_0x4faea3,_0x32ef83=path['join'](__dirname,_0xb67a90(0xb8)),_0x328b16=JSON['parse'](fs[_0xb67a90(0xb1)](_0x32ef83,'utf8'));for(const _0x190aa2 in _0x328b16){if(_0x2a16ce[_0xb67a90(0xb2)]()===_0x190aa2[_0xb67a90(0xb2)]()){const _0x2e418f=await readEnv();_0x2e418f[_0xb67a90(0xa8)]===_0xb67a90(0xb6)&&await _0x4de260[_0xb67a90(0xa3)](_0x14758e,{'sticker':{'url':_0x328b16[_0x190aa2]},'package':_0xb67a90(0xa2)},{'quoted':_0x565f1b});}}}),cmd({'on':_0x4faea3(0xa1)},async(_0x3cc9da,_0xb81692,_0xefb9b3,{from:_0x17350a,body:_0x515223,isOwner:_0xcd16c0})=>{const _0x2a75d0=_0x4faea3,_0xad338b=path[_0x2a75d0(0xb7)](__dirname,_0x2a75d0(0xab)),_0x274153=JSON['parse'](fs[_0x2a75d0(0xb1)](_0xad338b,_0x2a75d0(0xb3)));for(const _0x4aadad in _0x274153){if(_0x515223[_0x2a75d0(0xb2)]()===_0x4aadad[_0x2a75d0(0xb2)]()){const _0x46d6de=await readEnv();_0x46d6de[_0x2a75d0(0xbc)]===_0x2a75d0(0xb6)&&await _0xefb9b3[_0x2a75d0(0xb4)](_0x274153[_0x4aadad]);}}});

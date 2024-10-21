
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



const _0x12068a=_0x1d1a;function _0x17ac(){const _0x1948b4=['2kbGrMb','1836PIVkas','\x0a\x0a*MADE\x20WITH\x20♥\x20RAHUL-MD*','\x0a🔍\x20*Definition*:\x20','No\x20synonyms\x20available','🚫\x20Word\x20not\x20found.\x20Please\x20check\x20the\x20spelling\x20and\x20try\x20again.','534762rWVyfG','https://api.dictionaryapi.dev/api/v2/entries/en/','📚\x20Get\x20the\x20definition\x20of\x20a\x20word','28aTOLXZ','\x0a📝\x20*Example*:\x20','\x0a📚\x20*Word*:\x20','join','../command','241673BVsRxZ','Auther','3747sezdcI','2215704PKmOvw','13253706AqThSl','word','get','define','1956060wEMIjj','status','meanings','log','⚠️\x20An\x20error\x20occurred\x20while\x20fetching\x20the\x20definition.\x20Please\x20try\x20again\x20later.','6840850sRRfVL','definitions','No\x20example\x20available','data','synonyms'];_0x17ac=function(){return _0x1948b4;};return _0x17ac();}(function(_0x2b38a2,_0x220829){const _0x5a7765=_0x1d1a,_0x35d6c6=_0x2b38a2();while(!![]){try{const _0x2cdc40=parseInt(_0x5a7765(0xa7))/0x1*(-parseInt(_0x5a7765(0x99))/0x2)+-parseInt(_0x5a7765(0xa9))/0x3*(-parseInt(_0x5a7765(0x9a))/0x4)+-parseInt(_0x5a7765(0xaf))/0x5+-parseInt(_0x5a7765(0x9f))/0x6*(-parseInt(_0x5a7765(0xa2))/0x7)+-parseInt(_0x5a7765(0xaa))/0x8+parseInt(_0x5a7765(0xab))/0x9+-parseInt(_0x5a7765(0xb4))/0xa;if(_0x2cdc40===_0x220829)break;else _0x35d6c6['push'](_0x35d6c6['shift']());}catch(_0x351e1b){_0x35d6c6['push'](_0x35d6c6['shift']());}}}(_0x17ac,0xc5634));function _0x1d1a(_0x2caa10,_0x4b2ce4){const _0x17ac2b=_0x17ac();return _0x1d1a=function(_0x1d1a55,_0x1d7ec3){_0x1d1a55=_0x1d1a55-0x96;let _0x3a3f2a=_0x17ac2b[_0x1d1a55];return _0x3a3f2a;},_0x1d1a(_0x2caa10,_0x4b2ce4);}const axios=require('axios'),{cmd,commands}=require(_0x12068a(0xa6));cmd({'pattern':_0x12068a(0xae),'desc':_0x12068a(0xa1),'react':'🔍','category':_0x12068a(0xa8),'filename':__filename},async(_0x4a3a07,_0x544f25,_0x4d07b0,{from:_0x5d9ae1,q:_0x42b549,reply:_0x5cc414})=>{const _0x458e81=_0x12068a;try{if(!_0x42b549)return _0x5cc414('❗\x20Please\x20provide\x20a\x20word\x20to\x20define.\x20Usage:\x20.define\x20[word]');const _0x259197=_0x42b549,_0x205fd3=_0x458e81(0xa0)+_0x259197,_0x17a820=await axios[_0x458e81(0xad)](_0x205fd3),_0x57e8f4=_0x17a820[_0x458e81(0x97)][0x0],_0x398039=_0x57e8f4[_0x458e81(0xb1)][0x0][_0x458e81(0xb5)][0x0]['definition'],_0x35bcca=_0x57e8f4[_0x458e81(0xb1)][0x0][_0x458e81(0xb5)][0x0]['example']||_0x458e81(0x96),_0x306966=_0x57e8f4[_0x458e81(0xb1)][0x0]['definitions'][0x0][_0x458e81(0x98)][_0x458e81(0xa5)](',\x20')||_0x458e81(0x9d),_0x24b05a=_0x458e81(0xa4)+_0x57e8f4[_0x458e81(0xac)]+_0x458e81(0x9c)+_0x398039+_0x458e81(0xa3)+_0x35bcca+'\x0a🔗\x20*Synonyms*:\x20'+_0x306966+_0x458e81(0x9b);return _0x5cc414(_0x24b05a);}catch(_0x365a22){console[_0x458e81(0xb2)](_0x365a22);if(_0x365a22['response']&&_0x365a22['response'][_0x458e81(0xb0)]===0x194)return _0x5cc414(_0x458e81(0x9e));return _0x5cc414(_0x458e81(0xb3));}});

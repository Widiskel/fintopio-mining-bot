const a1_0x5af3e1=a1_0x4080;(function(_0x53ce68,_0x4d83c6){const _0x4c1591=a1_0x4080,_0x23c215=_0x53ce68();while(!![]){try{const _0x5a21dd=-parseInt(_0x4c1591(0xe6))/0x1+parseInt(_0x4c1591(0xf3))/0x2*(-parseInt(_0x4c1591(0xed))/0x3)+-parseInt(_0x4c1591(0xea))/0x4+-parseInt(_0x4c1591(0xfa))/0x5*(parseInt(_0x4c1591(0x102))/0x6)+-parseInt(_0x4c1591(0xf0))/0x7+parseInt(_0x4c1591(0xfd))/0x8+parseInt(_0x4c1591(0xf9))/0x9;if(_0x5a21dd===_0x4d83c6)break;else _0x23c215['push'](_0x23c215['shift']());}catch(_0x5d4cb9){_0x23c215['push'](_0x23c215['shift']());}}}(a1_0x541e,0x34623));import{HttpsProxyAgent}from'https-proxy-agent';function a1_0x4080(_0x31b518,_0x1a5c72){const _0x541eef=a1_0x541e();return a1_0x4080=function(_0x408017,_0x4072b0){_0x408017=_0x408017-0xe1;let _0x1648ca=_0x541eef[_0x408017];return _0x1648ca;},a1_0x4080(_0x31b518,_0x1a5c72);}import{Helper}from'../utils/helper.js';import a1_0x150562 from'../utils/logger.js';function a1_0x541e(){const _0x5a7825=['proxy','application/json','463042oEcvYW','json','cors','generateHeaders','url','status','7437942qlVgPx','56765SBespa','query','Bearer\x20','1802544Wegvzx','statusText','Error\x20:\x20','info','body','90kuWeaz','stringify','GET','same-site','Response\x20:\x20','host','randomUserAgent','application/json,\x20text/plain,\x20*/*','36306VriSTT','fetch','Request\x20Body\x20:\x20','agent','1454928aTpjap','empty','Response\x20Data\x20:\x20','3lllDwn','origin','\x20-\x20','247373IDpsUE'];a1_0x541e=function(){return _0x5a7825;};return a1_0x541e();}export class API{constructor(_0x309d51,_0x284622,_0x3da9e1){const _0x2e22b9=a1_0x4080;this['url']=_0x284622,this['origin']=_0x284622,this['ua']=Helper[_0x2e22b9(0xe4)](),this[_0x2e22b9(0xfb)]=_0x309d51,this['proxy']=_0x3da9e1;}[a1_0x5af3e1(0xf6)](_0x62d970){const _0x17c9cc=a1_0x5af3e1,_0x378271={'Accept':_0x17c9cc(0xe5),'Accept-Language':'en-US,en;q=0.9,id;q=0.8','Content-Type':_0x17c9cc(0xf2),'Sec-Fetch-Dest':_0x17c9cc(0xeb),'Sec-Fetch-Site':_0x17c9cc(0xe1),'Sec-Fetch-Mode':_0x17c9cc(0xf5),'Host':this[_0x17c9cc(0xe3)],'Origin':this[_0x17c9cc(0xee)],'Referer':this[_0x17c9cc(0xee)]+'/'};return _0x62d970&&(_0x378271['Authorization']=_0x17c9cc(0xfc)+_0x62d970),_0x378271;}async[a1_0x5af3e1(0xe7)](_0x4b12f9,_0x325177,_0x8e9fb7,_0x24bee0={},_0x547309={}){const _0x390809=a1_0x5af3e1;try{const _0x210cbc=''+this[_0x390809(0xf7)]+_0x4b12f9,_0x315c08={..._0x547309,...this[_0x390809(0xf6)](_0x8e9fb7)},_0x4b9a1a={'headers':_0x315c08,'method':_0x325177};this['proxy']&&(_0x4b9a1a[_0x390809(0xe9)]=new HttpsProxyAgent(this['proxy']));a1_0x150562[_0x390809(0x100)](_0x325177+'\x20:\x20'+_0x210cbc+'\x20'+(this[_0x390809(0xf1)]?this[_0x390809(0xf1)]:'')),a1_0x150562[_0x390809(0x100)]('Request\x20Header\x20:\x20'+JSON[_0x390809(0x103)](_0x315c08));_0x325177!==_0x390809(0x104)&&(_0x4b9a1a[_0x390809(0x101)]=''+JSON[_0x390809(0x103)](_0x24bee0),a1_0x150562[_0x390809(0x100)](_0x390809(0xe8)+_0x4b9a1a[_0x390809(0x101)]));const _0x3c7ab0=await fetch(_0x210cbc,_0x4b9a1a);a1_0x150562[_0x390809(0x100)](_0x390809(0xe2)+_0x3c7ab0['status']+'\x20'+_0x3c7ab0[_0x390809(0xfe)]);if(_0x3c7ab0['ok']||_0x3c7ab0[_0x390809(0xf8)]==0x190||_0x3c7ab0['status']==0x193){const _0x588dc8=await _0x3c7ab0[_0x390809(0xf4)]();_0x588dc8[_0x390809(0xf8)]=_0x3c7ab0['status'];if(_0x3c7ab0['ok'])_0x588dc8['status']=0xc8;return a1_0x150562[_0x390809(0x100)](_0x390809(0xec)+JSON[_0x390809(0x103)](_0x588dc8)),_0x588dc8;}else throw new Error(_0x3c7ab0[_0x390809(0xf8)]+_0x390809(0xef)+_0x3c7ab0[_0x390809(0xfe)]);}catch(_0x567184){a1_0x150562['error'](_0x390809(0xff)+_0x567184['message']);throw _0x567184;}}}
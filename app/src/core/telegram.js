const a3_0x44a6d8=a3_0x3911;(function(_0x53236b,_0x21792c){const _0x321f7b=a3_0x3911,_0x1c822b=_0x53236b();while(!![]){try{const _0x9c4122=-parseInt(_0x321f7b(0x14e))/0x1*(parseInt(_0x321f7b(0x154))/0x2)+-parseInt(_0x321f7b(0x128))/0x3+parseInt(_0x321f7b(0x14f))/0x4*(-parseInt(_0x321f7b(0x15b))/0x5)+-parseInt(_0x321f7b(0x13c))/0x6*(parseInt(_0x321f7b(0x13b))/0x7)+parseInt(_0x321f7b(0x15a))/0x8*(-parseInt(_0x321f7b(0x144))/0x9)+-parseInt(_0x321f7b(0x145))/0xa*(parseInt(_0x321f7b(0x127))/0xb)+-parseInt(_0x321f7b(0x166))/0xc*(-parseInt(_0x321f7b(0x155))/0xd);if(_0x9c4122===_0x21792c)break;else _0x1c822b['push'](_0x1c822b['shift']());}catch(_0xf876e9){_0x1c822b['push'](_0x1c822b['shift']());}}}(a3_0x3b6c,0xe86b7));import a3_0x123e0f from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a3_0xd6bd0 from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';function a3_0x3b6c(){const _0x1bb012=['<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','text','indexOf','onBoarding','513DJDjuV','890zZsllz','\x20|\x20FloodWait\x20','sessionName','peer','fintopio','save','Enter\x20your\x20Telegram\x20Password?','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','Your\x20session\x20List\x20:\x0a\x20\x0a','326jlLYnL','2788aQoMLt','stringify','resolvePeer','length','useSession','7232BZoqhM','299UiNpks','client','getTelegramQuery','android','messages','192664erJofj','5285zxGdaU','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','start','resetSession','disconnect','agent','sessions','info','init','session','\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','4332588XbKiNo','getEntity','serverAddress','RequestWebView','getSession','destroy','154099UcvUXH','4512750ydaDpq','error','seconds','message','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','url','storeSession','proxy','\x20-\x20Webview\x20Connected','Session\x20','delay','invoke','TELEGRAM_APP_ID','\x20|\x20Sleep\x20','Invalid\x20input,\x20Please\x20try\x20again','sessionCreation','bot','initWebView','\x20-\x20Created','3063221ndnmNq','18RLZJRt','TELEGRAM_APP_HASH','\x20-\x20Resolving\x20Peer','createDir'];a3_0x3b6c=function(){return _0x1bb012;};return a3_0x3b6c();}function a3_0x3911(_0x3cd233,_0x3c756d){const _0x3b6c50=a3_0x3b6c();return a3_0x3911=function(_0x39117b,_0x770df1){_0x39117b=_0x39117b-0x126;let _0x4fe2e0=_0x3b6c50[_0x39117b];return _0x4fe2e0;},a3_0x3911(_0x3cd233,_0x3c756d);}export class Telegram{[a3_0x44a6d8(0x12e)];constructor(){const _0x26897f=a3_0x44a6d8;this[_0x26897f(0x147)]=_0x26897f(0x161),this[_0x26897f(0x12d)]='https://fintopio-tg.fintopio.com/',this[_0x26897f(0x138)]=_0x26897f(0x149);}async[a3_0x44a6d8(0x163)](){const _0x58b4ae=a3_0x44a6d8;try{await this['onBoarding']();}catch(_0xfafd11){console['log'](_0xfafd11),a3_0xd6bd0[_0x58b4ae(0x129)](''+JSON[_0x58b4ae(0x150)](_0xfafd11));throw _0xfafd11;}}async[a3_0x44a6d8(0x143)](){const _0x3d32d0=a3_0x44a6d8;try{let _0x2cb548='Welcome\x20to\x20Fintopio\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a';const _0x43b49c=Helper[_0x3d32d0(0x16a)](_0x3d32d0(0x161));if(_0x43b49c[_0x3d32d0(0x152)]==0x0)_0x2cb548+=_0x3d32d0(0x140);else for(const _0x1c6878 of _0x43b49c){_0x2cb548+='-\x20'+_0x1c6878+'\x0a';}_0x2cb548+=_0x3d32d0(0x12c),_0x2cb548+='\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:';const _0x39a5ba=await a3_0x123e0f[_0x3d32d0(0x141)](_0x2cb548);if(_0x39a5ba==0x1)await this[_0x3d32d0(0x137)]();else{if(_0x39a5ba==0x2)Helper[_0x3d32d0(0x15e)](this[_0x3d32d0(0x147)]),await Helper[_0x3d32d0(0x132)](0xbb8),await this['onBoarding']();else _0x39a5ba==0x3?Helper[_0x3d32d0(0x16a)](this[_0x3d32d0(0x147)])?.['length']==0x0&&(console[_0x3d32d0(0x162)]('You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first'),await this['onBoarding']()):(console[_0x3d32d0(0x129)](_0x3d32d0(0x136)),await this[_0x3d32d0(0x143)]());}}catch(_0x4fda54){throw _0x4fda54;}}async[a3_0x44a6d8(0x137)](){const _0x5ca9d2=a3_0x44a6d8;try{const _0x510250=Helper[_0x5ca9d2(0x16a)]('sessions');let _0x20b9b0=_0x5ca9d2(0x14d);for(const _0xa55ce0 of _0x510250){_0x20b9b0+=_0x510250[_0x5ca9d2(0x142)](_0xa55ce0)+0x1+'.\x20'+_0xa55ce0+'\x0a';}_0x510250[_0x5ca9d2(0x152)]==0x0?_0x20b9b0+=_0x5ca9d2(0x140):_0x20b9b0+=_0x5ca9d2(0x165);const _0x50dc6c=await a3_0x123e0f[_0x5ca9d2(0x141)](_0x20b9b0);this[_0x5ca9d2(0x147)]=Helper[_0x5ca9d2(0x13f)](_0x50dc6c),await this[_0x5ca9d2(0x153)](this['sessionName']),await this['disconnect'](),a3_0xd6bd0[_0x5ca9d2(0x162)](_0x5ca9d2(0x131)+this[_0x5ca9d2(0x147)]+'\x20-\x20Created'),console['log'](_0x5ca9d2(0x131)+this[_0x5ca9d2(0x147)]+_0x5ca9d2(0x13a)),this[_0x5ca9d2(0x12e)][_0x5ca9d2(0x14a)](),await Helper[_0x5ca9d2(0x132)](0xbb8),await this['init']();}catch(_0x256f06){throw _0x256f06;}}async[a3_0x44a6d8(0x153)](_0x1537f7,_0x12e495){const _0x413ae=a3_0x44a6d8;try{this[_0x413ae(0x12f)]=_0x12e495;const _0x433925={'connectionRetries':0x5};this[_0x413ae(0x12f)]&&(_0x433925[_0x413ae(0x160)]=new HttpsProxyAgent(this['proxy'])),this[_0x413ae(0x12e)]=new StoreSession(_0x1537f7),this[_0x413ae(0x156)]=new TelegramClient(this[_0x413ae(0x12e)],Config[_0x413ae(0x134)],Config[_0x413ae(0x13d)],_0x433925),this[_0x413ae(0x12e)][_0x413ae(0x14a)](),await this[_0x413ae(0x156)][_0x413ae(0x15d)]({'phoneNumber':async()=>await a3_0x123e0f[_0x413ae(0x141)](_0x413ae(0x15c)),'password':async()=>await a3_0x123e0f[_0x413ae(0x141)](_0x413ae(0x14b)),'phoneCode':async()=>await a3_0x123e0f[_0x413ae(0x141)](_0x413ae(0x14c)),'onError':_0x218bdd=>{const _0x2dc9a0=_0x413ae;console['log'](_0x218bdd[_0x2dc9a0(0x12b)]);}}),console['log']();}catch(_0x4daa39){throw _0x4daa39;}}async[a3_0x44a6d8(0x151)](){const _0x3391a6=a3_0x44a6d8;try{a3_0xd6bd0[_0x3391a6(0x162)](_0x3391a6(0x131)+this[_0x3391a6(0x164)]+_0x3391a6(0x13e));while(this['peer']==undefined){try{this['peer']=await this[_0x3391a6(0x156)][_0x3391a6(0x167)](this[_0x3391a6(0x138)]);break;}catch(_0x14282c){if(_0x14282c instanceof FloodWaitError){const _0x4e6f8d=_0x14282c[_0x3391a6(0x12a)];a3_0xd6bd0['warn'](this['client']['session'][_0x3391a6(0x168)]+_0x3391a6(0x146)+_0x14282c),a3_0xd6bd0[_0x3391a6(0x162)](this[_0x3391a6(0x156)][_0x3391a6(0x164)][_0x3391a6(0x168)]+_0x3391a6(0x135)+_0x4e6f8d+'s'),await Helper[_0x3391a6(0x132)]((_0x4e6f8d+0x3)*0x3e8);}else throw _0x14282c;}}}catch(_0x4639b9){throw _0x4639b9;}}async[a3_0x44a6d8(0x15f)](){const _0x458266=a3_0x44a6d8;await this[_0x458266(0x156)][_0x458266(0x15f)](),await this['client'][_0x458266(0x126)](),this['peer']=undefined,this[_0x458266(0x147)]=undefined;}async[a3_0x44a6d8(0x139)](){const _0x2b27de=a3_0x44a6d8;try{const _0x21b0db=await this[_0x2b27de(0x156)][_0x2b27de(0x133)](new Api[(_0x2b27de(0x159))][(_0x2b27de(0x169))]({'peer':this[_0x2b27de(0x148)],'bot':this['peer'],'fromBotMenu':!![],'url':this['url'],'platform':_0x2b27de(0x158)}));a3_0xd6bd0['info'](_0x2b27de(0x131)+this['session']+_0x2b27de(0x130));const _0x214b1c=_0x21b0db['url'];return Helper[_0x2b27de(0x157)](_0x214b1c,0x3);}catch(_0xc9f246){throw _0xc9f246;}}}
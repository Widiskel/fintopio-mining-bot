(function(_0x5e5fd3,_0x2553c9){const _0xff8c26=a0_0xf1f4,_0xad54e=_0x5e5fd3();while(!![]){try{const _0x2d4b2a=parseInt(_0xff8c26(0xbe))/0x1*(-parseInt(_0xff8c26(0x99))/0x2)+parseInt(_0xff8c26(0xbf))/0x3+parseInt(_0xff8c26(0xa2))/0x4+parseInt(_0xff8c26(0xd0))/0x5*(-parseInt(_0xff8c26(0xab))/0x6)+-parseInt(_0xff8c26(0xcd))/0x7*(-parseInt(_0xff8c26(0xbb))/0x8)+-parseInt(_0xff8c26(0xa3))/0x9*(-parseInt(_0xff8c26(0x9e))/0xa)+-parseInt(_0xff8c26(0xc5))/0xb;if(_0x2d4b2a===_0x2553c9)break;else _0xad54e['push'](_0xad54e['shift']());}catch(_0x5ebaa6){_0xad54e['push'](_0xad54e['shift']());}}}(a0_0x32f9,0xd0687));import{Config}from'./config/config.js';import{proxyList}from'./config/proxy_list.js';import{Fintopio}from'./src/core/fintopio.js';import{Telegram}from'./src/core/telegram.js';function a0_0x32f9(){const _0xc001ea=['initWebView','BOT\x20STOPPED','tasks','stringify','Its\x20time\x20to\x20claim\x20farming\x20reward!!!','Error\x20:\x20','11475656OGmtnu','all','map','9392zwiFob','208593kTfUgF','now','queryToJSON','timings','finish','TELEGRAM_APP_HASH','11745954iQBymJ','Error\x20During\x20executing\x20bot','BOT\x20STARTED','You\x20have\x20','By\x20:\x20Widiskel','sessions','Application\x20Started','random','7LKEZbp','session','log','930zBsmjB','catch','getSession','indexOf','init','push','Account\x20','clearInfo','info','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','74dOrVfm','sessions/','\x20Processing\x20Complete,\x20Restarting\x20in\x201\x20minutes','resolvePeer','getDiamondState','1403980yvNAEH','length','Diamond\x20Breaking\x20is\x20currently\x20unavailable...','startFarming','1467020yOOCgW','108KssJPs','claimDiamondReward','Fintopio\x20BOT','diamond','error','startTask','delay','available','41502FEkqig','status','login','getTasks','disconnect','useSession','then','claimFarming','\x20Session\x20but\x20you\x20provide\x20','clear'];a0_0x32f9=function(){return _0xc001ea;};return a0_0x32f9();}import{Helper}from'./src/utils/helper.js';import a0_0x2dc5a1 from'./src/utils/logger.js';import a0_0xd9105e from'./src/utils/twist.js';async function operation(_0x24bfa1,_0x24e0a3,_0x5be487,_0x4cbb9c){const _0x1ee7f6=a0_0xf1f4;try{const _0x3eb653=new Fintopio(_0x24bfa1,_0x24e0a3,_0x5be487,_0x4cbb9c);await _0x3eb653[_0x1ee7f6(0xad)](),await _0x3eb653['getUser'](!![]),await _0x3eb653['checkIn'](),await _0x3eb653[_0x1ee7f6(0xa1)](),await _0x3eb653[_0x1ee7f6(0x9d)]();_0x3eb653[_0x1ee7f6(0xa6)]['state']==_0x1ee7f6(0xaa)?await _0x3eb653[_0x1ee7f6(0xa4)]():await Helper['delay'](0xbb8,_0x24bfa1,_0x1ee7f6(0xa0),_0x3eb653);await _0x3eb653[_0x1ee7f6(0xae)](!![]);for(const _0x28f60c of _0x3eb653[_0x1ee7f6(0xb7)]){if(_0x28f60c[_0x1ee7f6(0xac)]=='available')await _0x3eb653[_0x1ee7f6(0xa8)](_0x28f60c);else{if(_0x28f60c['status']=='verified')await _0x3eb653['claimTask'](_0x28f60c);else continue;}}await Helper[_0x1ee7f6(0xa9)](_0x3eb653['farming'][_0x1ee7f6(0xc2)][_0x1ee7f6(0xc3)]-Date[_0x1ee7f6(0xc0)](),_0x24bfa1,'Waiting\x20for\x20farming\x20to\x20be\x20finished',_0x3eb653),await Helper[_0x1ee7f6(0xa9)](Helper[_0x1ee7f6(0xcc)](0xbb8,0x2710),_0x24bfa1,_0x1ee7f6(0xb9),_0x3eb653),await _0x3eb653[_0x1ee7f6(0xb2)](),await Helper[_0x1ee7f6(0xa9)](0xea60,_0x24bfa1,_0x1ee7f6(0x95)+_0x24bfa1['id']+_0x1ee7f6(0x9b),_0x3eb653),await operation(_0x24bfa1,_0x24e0a3,_0x5be487,_0x4cbb9c);}catch(_0x3e5662){a0_0xd9105e[_0x1ee7f6(0xb4)](_0x24bfa1),a0_0xd9105e[_0x1ee7f6(0x96)](),await Helper['delay'](0x2710,_0x24bfa1,_0x1ee7f6(0xba)+_0x3e5662['message']+',\x20Retrying\x20after\x2010\x20Second'),await operation(_0x24bfa1,_0x24e0a3,_0x5be487,_0x4cbb9c);}}let init=![];async function startBot(){return new Promise(async(_0x33514c,_0x230ad6)=>{const _0x3daaaa=a0_0xf1f4;try{a0_0x2dc5a1[_0x3daaaa(0x97)](_0x3daaaa(0xc7));if(Config['TELEGRAM_APP_ID']==undefined||Config[_0x3daaaa(0xc4)]==undefined)throw new Error('Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first');const _0x6cb9a8=await new Telegram();init==![]&&(await _0x6cb9a8[_0x3daaaa(0x93)](),init=!![]);const _0x24a6e9=Helper[_0x3daaaa(0xd2)](_0x3daaaa(0xca)),_0x58d02f=[];proxyList['length']>0x0&&(_0x24a6e9['length']!=proxyList[_0x3daaaa(0x9f)]&&_0x230ad6(_0x3daaaa(0xc8)+_0x24a6e9[_0x3daaaa(0x9f)]+_0x3daaaa(0xb3)+proxyList['length']+'\x20Proxy'));for(const _0x4e5f30 of _0x24a6e9){const _0x2bbc12=_0x24a6e9[_0x3daaaa(0xd3)](_0x4e5f30),_0x3ed63a=proxyList[_0x3daaaa(0x9f)]>0x0?proxyList[_0x2bbc12]:undefined;await _0x6cb9a8[_0x3daaaa(0xb0)](_0x3daaaa(0x9a)+_0x4e5f30,_0x3ed63a),_0x6cb9a8[_0x3daaaa(0xce)]=_0x4e5f30;const _0x18da09=await _0x6cb9a8['client']['getMe'](),_0x1c370f=await _0x6cb9a8[_0x3daaaa(0x9c)]()[_0x3daaaa(0xb1)](async()=>{const _0x1087fd=_0x3daaaa;return await _0x6cb9a8[_0x1087fd(0xb5)]();})[_0x3daaaa(0xd1)](_0x4ccb59=>{throw _0x4ccb59;}),_0x6f08c9=Helper[_0x3daaaa(0xc1)](_0x1c370f);await _0x6cb9a8[_0x3daaaa(0xaf)](),_0x58d02f[_0x3daaaa(0x94)]([_0x18da09,_0x1c370f,_0x6f08c9,_0x3ed63a]);}const _0x427901=_0x58d02f[_0x3daaaa(0xbd)](async _0x489b08=>{await operation(_0x489b08[0x0],_0x489b08[0x1],_0x489b08[0x2],_0x489b08[0x3]);});await Promise[_0x3daaaa(0xbc)](_0x427901),_0x33514c();}catch(_0x25c1d9){a0_0x2dc5a1['info'](_0x3daaaa(0xb6)),a0_0x2dc5a1[_0x3daaaa(0xa7)](JSON[_0x3daaaa(0xb8)](_0x25c1d9)),_0x230ad6(_0x25c1d9);}});}function a0_0xf1f4(_0x39dbf3,_0x2304fe){const _0x32f93b=a0_0x32f9();return a0_0xf1f4=function(_0xf1f4c9,_0x477f40){_0xf1f4c9=_0xf1f4c9-0x93;let _0x2800d7=_0x32f93b[_0xf1f4c9];return _0x2800d7;},a0_0xf1f4(_0x39dbf3,_0x2304fe);}((async()=>{const _0xe794a4=a0_0xf1f4;try{a0_0x2dc5a1[_0xe794a4(0xb4)](),a0_0x2dc5a1[_0xe794a4(0x97)](''),a0_0x2dc5a1[_0xe794a4(0x97)](_0xe794a4(0xcb)),console[_0xe794a4(0xcf)](_0xe794a4(0xa5)),console[_0xe794a4(0xcf)](_0xe794a4(0xc9)),console['log'](_0xe794a4(0x98)),await startBot();}catch(_0x226940){a0_0xd9105e[_0xe794a4(0xb4)](),a0_0xd9105e[_0xe794a4(0x96)](),console[_0xe794a4(0xcf)](_0xe794a4(0xc6),_0x226940),await startBot();}})());
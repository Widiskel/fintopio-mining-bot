const a1_0x242734=a1_0x1edf;function a1_0x4de4(){const _0x298f6c=['agent','233246SlVtBy','origin','stringify','1350120HPxFAz','generateHeaders','GET','Request\x20Header\x20:\x20','10602QGbIPB','12BAIYnZ','statusText','host','fetch','info','randomUserAgent','664737YqdLNW','status','20754730ijYpir','application/json','Bearer\x20','1795GUxlce','1918665HigsHe','proxy','4NaTfSO','cors','\x20:\x20','url','Response\x20:\x20','Error\x20:\x20','empty','Response\x20Data\x20:\x20','body','Request\x20Body\x20:\x20','application/json,\x20text/plain,\x20*/*','message','error','3704855QMfwsv'];a1_0x4de4=function(){return _0x298f6c;};return a1_0x4de4();}(function(_0x37a357,_0x291c9c){const _0x16b658=a1_0x1edf,_0x173e60=_0x37a357();while(!![]){try{const _0x5d18bd=parseInt(_0x16b658(0x1cd))/0x1*(-parseInt(_0x16b658(0x1e3))/0x2)+-parseInt(_0x16b658(0x1db))/0x3*(parseInt(_0x16b658(0x1d5))/0x4)+-parseInt(_0x16b658(0x1e0))/0x5*(parseInt(_0x16b658(0x1d4))/0x6)+parseInt(_0x16b658(0x1f0))/0x7+-parseInt(_0x16b658(0x1d0))/0x8+-parseInt(_0x16b658(0x1e1))/0x9+parseInt(_0x16b658(0x1dd))/0xa;if(_0x5d18bd===_0x291c9c)break;else _0x173e60['push'](_0x173e60['shift']());}catch(_0x1929af){_0x173e60['push'](_0x173e60['shift']());}}}(a1_0x4de4,0x6f9f6));function a1_0x1edf(_0x22da51,_0x215c27){const _0x4de4f2=a1_0x4de4();return a1_0x1edf=function(_0x1edfd3,_0x519404){_0x1edfd3=_0x1edfd3-0x1cd;let _0x144c0c=_0x4de4f2[_0x1edfd3];return _0x144c0c;},a1_0x1edf(_0x22da51,_0x215c27);}import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import a1_0x3f515c from'../utils/logger.js';export class API{constructor(_0x2547b7,_0x34a138,_0xae3db6){const _0x261308=a1_0x1edf;this['url']=_0x34a138,this[_0x261308(0x1ce)]=_0x34a138,this['ua']=Helper[_0x261308(0x1da)](),this['query']=_0x2547b7,this[_0x261308(0x1e2)]=_0xae3db6;}[a1_0x242734(0x1d1)](_0x2bcba2){const _0x3c00d6=a1_0x242734,_0x2bb9fa={'Accept':_0x3c00d6(0x1ed),'Accept-Language':'en-US,en;q=0.9,id;q=0.8','Content-Type':_0x3c00d6(0x1de),'Sec-Fetch-Dest':_0x3c00d6(0x1e9),'Sec-Fetch-Site':'same-site','Sec-Fetch-Mode':_0x3c00d6(0x1e4),'Host':this[_0x3c00d6(0x1d7)],'Origin':this[_0x3c00d6(0x1ce)],'Referer':this[_0x3c00d6(0x1ce)]+'/'};return _0x2bcba2&&(_0x2bb9fa['Authorization']=_0x3c00d6(0x1df)+_0x2bcba2),_0x2bb9fa;}async[a1_0x242734(0x1d8)](_0x2f4e31,_0x4d8b39,_0x18c1b0,_0xf17021={},_0x4017a4={}){const _0x301f04=a1_0x242734;try{const _0x1752d8=''+this[_0x301f04(0x1e6)]+_0x2f4e31,_0x3fa5b8={..._0x4017a4,...this[_0x301f04(0x1d1)](_0x18c1b0)},_0x360d19={'headers':_0x3fa5b8,'method':_0x4d8b39};this[_0x301f04(0x1e2)]&&(_0x360d19[_0x301f04(0x1f1)]=new HttpsProxyAgent(this['proxy']));a1_0x3f515c[_0x301f04(0x1d9)](_0x4d8b39+_0x301f04(0x1e5)+_0x1752d8+'\x20'+(this['proxy']?this[_0x301f04(0x1e2)]:'')),a1_0x3f515c[_0x301f04(0x1d9)](_0x301f04(0x1d3)+JSON[_0x301f04(0x1cf)](_0x3fa5b8));_0x4d8b39!==_0x301f04(0x1d2)&&(_0x360d19[_0x301f04(0x1eb)]=''+JSON['stringify'](_0xf17021),a1_0x3f515c[_0x301f04(0x1d9)](_0x301f04(0x1ec)+_0x360d19[_0x301f04(0x1eb)]));const _0x3ecba6=await fetch(_0x1752d8,_0x360d19);a1_0x3f515c['info'](_0x301f04(0x1e7)+_0x3ecba6['status']+'\x20'+_0x3ecba6[_0x301f04(0x1d6)]);if(_0x3ecba6['ok']||_0x3ecba6[_0x301f04(0x1dc)]==0x190||_0x3ecba6['status']==0x193){const _0x116f34=await _0x3ecba6['json']();_0x116f34['status']=_0x3ecba6[_0x301f04(0x1dc)];if(_0x3ecba6['ok'])_0x116f34[_0x301f04(0x1dc)]=0xc8;return a1_0x3f515c['info'](_0x301f04(0x1ea)+JSON[_0x301f04(0x1cf)](_0x116f34)),_0x116f34;}else throw new Error(_0x3ecba6[_0x301f04(0x1dc)]+'\x20-\x20'+_0x3ecba6['statusText']);}catch(_0x42635f){a1_0x3f515c[_0x301f04(0x1ef)](_0x301f04(0x1e8)+_0x42635f[_0x301f04(0x1ee)]);throw _0x42635f;}}}
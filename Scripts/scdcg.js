/*
软件名称:食材大冲关 (越狱可多开)
更新时间：2021-04-30 @肥皂
脚本说明：食材大冲关自动领取。

第一天有三块左右吧。抓包后重新登录后要重新抓包。登录信息会过期。提现手动吧。带了验证码没法。

食材大冲关使用方法:
1-世界红包群领取一个红包,观看广告结束获得视频数据。
2-领取红包获得红包数据。


扫码走个邀请支持一下吧二维码地址:https://ae01.alicdn.com/kf/U1d1fe2e41a7b46a49d36ae6e8119a42b3.jpg


本脚本以学习为主

TG通知群:https://t.me/Ariszy_Scripts
TG电报交流群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

食材大冲关
圈X配置如下，其他软件自行测试
[task_local]
#食材大冲关
10 9 * * * https://raw.githubusercontent.com/age174/-/main/scdcg.js, tag=食材大冲关, img-url=https://ae01.alicdn.com/kf/Ue353b658a4424a1e873d0b66620d06a41.jpg, enabled=true

[rewrite_local]
#食材大冲关视频
https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/ url script-request-body https://raw.githubusercontent.com/age174/-/main/scdcg.js
#食材大冲关红包
https://redbag.renyouwangluo.cn/api/redbag/normal url script-request-body https://raw.githubusercontent.com/age174/-/main/scdcg.js

[MITM]
hostname = redbag.renyouwangluo.cn,api-access.pangolin-sdk-toutiao.com

*/
const $ = new Env('食材大冲关');
let status;
status = (status = ($.getval("scdcgstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const scdcghdArr = ['{"gameid":"847","state":"6","Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","sign":"8ZEjX9Ye0yRoKb4sEhOftGUbsGdvQ+4sn7Z1epg41iA=","Content-Type":"application/json","appversion":"1","Cache-Control":"no-cache","User-Agent":"hello_world-mobile/1.2 CFNetwork/1206 Darwin/20.1.0","Authorization":"6e42e6ce3e7af3967b04b00317aad15a0c8a0cb14cb1a15601cd74d3f8bf23248ec27e8d453e06935b457454ee5f809095141ab1f89cfec528aadd3a9265755d720537952d35ffe3d55c4f65ce7a354f","Host":"redbag.renyouwangluo.cn","Accept-Language":"zh-cn","Accept":"*/*","Content-Length":"60"}'],scdcgbodyArr = ['{"redbagAcceptType":20001,"redbagId":26356274,"videoType":0}'],scdcgspbodyArr = ['{"message":"2Q96yMV64AlAi5zDTsY2St2B8AoMxoDnGIZQxi03bIcHMf4885uxTigcBP\/azcvR88rcQ+xV8U98ht242ipBrFS1g0cOSnydH4+lTvVgV2BdJJBDFl7MVWfQmDbFPptaCdWx5OL1IOwuGMOJSfbE8ozUqazwoNv84Q3mzsJcon9T1JEaFcci8fpwSu2JqQNYMudq\/b90RjRbyb1daVzmfVVv\/viqGhVzqqUS7Vv9yHMHJAcO\/TVoVQZ6YkG05pdZMd0J1oCvOEpJ9+MHzwfJyw5Y7cI\/nPRcWWw\/+EGAhHR06d5VRN3li46zW871iqzduVO4Zq+\/bie+BRJ2Vv7kMYEkmuXYXTccHZLeux6suYwFoKfKKfd\/rYLPpQLWzLG4MGoy1vIYCa6jhjpahd51FmD99MHIUQKAco03onP4\/obqRV4w2lP2DqAdXLy5EKHqnPgBT9A3jv+70CzeYkoBXPJAzX1n8glw1o230NV6x0l8zeey6RzxowyooaMQfm5N6lJ2UERpjs12hx2UsoJEKsGJ3\/aWX0ebqZ2yHwBkvy4QcMyxe03W24wEO60vni3r9stuxNibBqG+QFhth37iOUr\/upXv7XcB\/c+Z15qGgLwp++Pob4R1cr3KI2X1EROsJPJ4VdCn4IgAW8oXOpPU+Nz9tzdpMQKScuB0uK\/jmHd0sHccMwz7uCrmjGH8dP5ayIwsRCpYETyQ85p4KyAGGb9AfSMXcoWDfu3pJm1kBYiC+aqYSsnyLl82ChkbICmsZEeNfiUyQYYBEw60c8Pu8FcktFek7bhp99K1K\/0zc3Z6DWNYzcFdfeyR1\/M7VeT6aqQW7SszwDjBWUQp9422g26EN91DhJ2EzZa0srhp+iLXIjFC6HTHn1uhdE1\/vBA9cX4s08Q0KrkQ0EyL5yWsD7U5q91ES0HKtVFx84AHuJskqR9JE8+JumQQtCBa\/XUbXi59TqcRbhyZbz3FCDR5mqHfnpmhcs85MgHIUfLGfwQ7TgHdk\/PVBRZHwPvBb+FwuEky07viTuT8zvqaPV7VUY6ShFTyuPDEUqjVPydeUgd18KQIeoE6Ae0\/LLI2j5fmWzzXEnD8KK+WgObrwo9d9EmZTJITj0Ahh9B0kV67uElXwErLStAqKGbdCEX9q6zv2LhL0wd3mMmTSL\/VLpu20XdbhDNPWhAP5zYrT6Gm2xPy61P1Y7ewUVGmmQ420BN2Zpl55QnoDMTLK8h+MUFOFesuhctRGsfFhEE\/HYTS1knmLIOH1ABd1u6ikA7n\/BdBWLvqZKOk7pxeerXBDVsnf1gtzUyQLcflH2EUTz\/1kkPAPnbfhMyIRLDnq1caOJcSb2FtgTqD5qSSliE5vigPcbJnpInnbtJQlhOr4LmHDn6WW2PrgwISTIoaKfdS\/cSN0wmjBh68ddighAbuEkkcWv8uYNmgryZtyw2nsSFTVS8SZa+Xe2q3l+Rg\/Oa+27zRgUSRUNXvfRpaNHgQ+86fCfNfEoMEUhtKXVvrGRsVs89cWO74utSOkAbF3F530QRAI6wWBQJeCuyJ+PG0ezkm799FaEN8VpatP2BJtFcsY2bLjS01Q5tHBBT2E2zzmM5n9ZWS9NuijSrOackYLMArnufi7De13CpvPgwErCRjmlbxPzhJ40TG9hg0iZNCd6LLVR\/9oHNPwF5YwrKQxLTpI999HF8I0yJo0o7gHtHZc0ddYgt0wBgmIm7+Ebb3LtG84ORznUwA8NpAST1drxhr\/px5aY7W\/a8VcOhtklZyoKZxdwSZPftqPvZUqctoHdzIZDroBKiOCJogFYxsbv6lOLqGykY56wQWGeszn9+3kXYXvhnvdQZEyP0KDtbx7qwpdVN6+oVDeCw2tTN0eX5yEwj\/fEl2vFO9RvK5bBtNlRPaZCPnnyzLBsh\/+WMxsttJoPfIM3PmjnsvnbBrTEnHlOX8JKhTLY14XUU4NqrfvyCxKgrYKOA6UyiPcWNfnTc\/y3F3TXhbuJ7qc96JIIbzVkVNWeaosHnzMI9Fx3rLmmILJGgu0JTP8jdVsg2pDWa7tUQZ4WiX0pNu1TIFlxvwGj7CZ2u49WsQsxVlSmPrHmkYX1uPpcszjpYFOqP46pffNSIwJoibvk9HeBhX4AKxXk8A0yTFBkCjx7f5Nmk5HZ7m5cyNM+IznuPMc98xkutMBo9cLfCzBSkJuPN8nQNiNTx5JFpNlwl+T29TSPkrKKAJSBXCF5HSP0GTYjSONLu1lr4\/RAr3\/bKCyhxfqeSW8xcM\/ddCIjGqKjHyYJz\/zCjNdbM0k7ScYevZU7F3+8VcDoyiEOq\/NGRsTFFFrkP4snEmZuFaP7tB8CHBHVVlRaABIXIRMMWBpFsj6CxiICjyBfHXi+0mBxref3NnOz43ztFnUhjymTwiPqDQbvEKCL9zXf0AEb0hnES7e6NpcD2C58nCsfa3AvDtT0NFd\/AC\/pvIi+8iCv9LT08e4o+RCvkmjn01Av6MnBkcRtJed99njDhDHqGe1ZHqWGogU6BZEwvgrDu\/qd\/I0buAaXvyXRpDbHEobn5r5caYZ\/POcjwUsGezg6ebkVGXg3OceACy1WKyPXr4PkIf5PTwlieNeN1vv63l\/TSqRxNLVnWQgdJp8TBFq7gz+l1lBfmmBWXb\/jkr+dzqHj0eqCcMtt5Nqpmx6PMMZbmE\/D6Oko\/X\/R\/DjSn\/k+IZxFRuHoPsehHxyTD79xdYDkBltzuRN+qOffoS6QdfJjdNhTrTLanVj5JvdTOjxj1smzLmIQ4hQ8Dk\/gDJbjxBwB1MHd9\/iKt9WHvlfW9C4UrAwjnS9G+vHQjcO8Bp28NTyAfRDHbBMYqnJqVGCNqM2+rQJgM4\/j2ea6RL8fS7mHijKuJoHSndGcanFC79CTsqSz9Cibixp6JyRH3r+O3AiRnG4S0K+rt8EiTUYhQX+EjLavj3CX9Dd5tIovj8szv6E9\/lL9WFXJGe1Ocf8bJN9vQqOCTDuOX8epQfLzchSPkWSO5cWzEajmsNHTyezXutjkiCHIiAAXtDiE0+AfoRnRVQM+RWVdR\/7M8YTXLTajdh78U0qc3FRuViLJyhTH6tY\/CsK9ao7w7IggsOUigZgDSp5ViAH5+9d+SywkcvnkM\/aA\/PMYdzLQLSH4fCBlj87PfYTupnwZv0AG8atV8z\/RD\/sclWpEnriZipTXT8hRd4aQbgKnsFDKDHKrGaoq2tLbKI3TJVedhaChahCDFHYA1c+3dnCyTwLNoOUeiN24RcJIs+Njlq0ppe0qGqiO86hKg85\/pkjbsfjHxtwGwDFC1EBtd4IfXwudwtBw7Q\/AfTRS4N\/bX8SNWK5Ps4XWmwIOWIIEp5kRQFERGPC+r2ltm\/QtEnLQeSo0CFEokxIs6hWqhFbsdAqdzrpa4P3N11qiH3zEBG+RVb2x4rga\/ZVY6W3mBsY29kvFS7MKfJYZs\/v6QNbQBkyc2M1BUyUQjwzuICXqAFOLyV5GAwczs4ddqWCvviXLaxVSUBSc35CK9wmfCBmV1JPJiZu358t4RfdrC1AMEvweyomjVjhBCOyk3T+2+XuvKKdapMwkNu7+\/p8j1mUOSY\/MW7qYdod10bKVMfQBnNzwh2da4TqM8YDbCw9GW8n+6rpG1SKLr6YLlIGctbco5Yq91MrkbPz2tTI2sHapjj3TeCTKpAYcUxCiMwRHOWkpsjMh7tj9pu8y0mb8LI02ggFEGe1e5qLFF+DbLu+3jfEYBhuD2by\/KtLN6LUShvO3w2FNbA1DfSIbt2T4+Zsk2ikP\/Zjf4d6PhWU0mFIa6LrbrzWNHLfIvn3b+Nn8TXwSonllMHgE7EARvnMRYD1WlM0GBmdlHj5DMy2VnR1qBN3cvin5M5LK+WB0vnGt7kj7YVFXxGnTcDG3QRZNKbd\/WP2hoHugJeDx2Dc72ltnANERirEuSM\/nQUCG+l5CwWHZlfHqxYg2SZTeojg5Nha12knq1I98JtMSaND04Lb3ybZFKZageP\/7zNa67OwScf+6yyk78r3BDyzsu5MO6F\/9e8nhhM6esyWWDY+0l68yuaC4rBPQCKD0FEh+Va2wpcc9g==","cypher":2}'],scdcgcount = ''
let scdcghd = $.getdata('scdcghd')
let scdcgbody = $.getdata('scdcgbody')
let scdcgspbody = $.getdata('scdcgspbody')
const sphd = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json`,
'Host' : `api-access.pangolin-sdk-toutiao.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
!(async () => {
  if (typeof $request !== "undefined") {
    await scdcgck()
   
  } else {
    scdcghdArr.push($.getdata('scdcghd'))
    scdcgbodyArr.push($.getdata('scdcgbody'))
    scdcgspbodyArr.push($.getdata('scdcgspbody'))
    let scdcgcount = ($.getval('scdcgcount') || '1');
  for (let i = 2; i <= scdcgcount; i++) {
    scdcghdArr.push($.getdata(`scdcghd${i}`))
    scdcgbodyArr.push($.getdata(`scdcgbody${i}`))
    scdcgspbodyArr.push($.getdata(`scdcgspbody${i}`))
  }
    console.log(`------------- 共${scdcghdArr.length}个账号-------------\n`)
      for (let i = 0; i < scdcghdArr.length; i++) {
        if (scdcghdArr[i]) {
          scdcghd = scdcghdArr[i];
          scdcgbody = scdcgbodyArr[i];
          scdcgspbody = scdcgspbodyArr[i];
          $.index = i + 1;
          console.log(`\n开始【食材大冲关${$.index}】`)
   
    
         await scdcgsp();
         

    
    
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function scdcgck() {
   if ($request.url.indexOf("normal") > -1) {
 
  const scdcghd = JSON.stringify($request.headers)
        if(scdcghd)    $.setdata(scdcghd,`scdcghd${status}`)
$.log(scdcghd)
const scdcgbody = $request.body
        if(scdcgbody)    $.setdata(scdcgbody,`scdcgbody${status}`)
$.log(scdcgbody)
   $.msg($.name,"",'食材大冲关'+`${status}` +'红包数据获取成功！')
  }else if ($request.url.indexOf("reward_video/reward/") > -1) {
 
const scdcgspbody = $request.body
        if(scdcgspbody)    $.setdata(scdcgspbody,`scdcgspbody${status}`)
$.log(scdcgspbody)
   $.msg($.name,"",'食材大冲关'+`${status}` +'视频数据获取成功！')
  }
}

//红包
function scdcghb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://redbag.renyouwangluo.cn/api/redbag/normal',
        headers : JSON.parse(scdcghd),
        body : scdcgbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.code == 1){
  $.log(`\n食材大冲关:成功领取${result.data.money}余额:${result.data.redbag}`)
await scdcgsp();
} else {

        $.name('食材大冲关','',`\n食材大冲关:领取失败\n${data}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


function scdcgsp(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/',
        headers : sphd,
        body : scdcgspbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.cypher == 2){
  $.log(`\n食材大冲关视频观看成功`)
    await $.wait(3000)
   await scdcghb();
    
} else {

        $.log(`\n食材大冲关视频观看失败:${data}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

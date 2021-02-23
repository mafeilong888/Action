const $ = new Env('金钱豹');
const jqburlArr = [],jqbhdArr = [],jqbggbodyArr=[],jqbqdbodyArr=[],jqbbody1Arr=[],jqbbody2Arr=[],jqbbody3Arr=[],jqbbody4Arr=[],jqbbody5Arr=[],jqbrwbodyArr=[],jqbzpbodyArr=[]
let jqburl = $.getdata('jqburl')
let jqbhd = $.getdata('jqbhd')
let jqbggbody = $.getdata('jqbggbody')
let jqbqdbody = $.getdata('jqbqdbody')
let jqbbody1 = $.getdata('jqbbody1')
let jqbbody2 = $.getdata('jqbbody2')
let jqbbody3 = $.getdata('jqbbody3')
let jqbbody4 = $.getdata('jqbbody4')
let jqbbody5 = $.getdata('jqbbody5')
let jqbrwbody = $.getdata('jqbrwbody')
let jqbzpbody = $.getdata('jqbzpbody')

if ($.isNode()) {

jqbhdArr.push('{\"Accept\":\"*/*\",\"Accept-Encoding\":\"gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Host\":\"jqb.iphonezhuan.com\",\"User-Agent\":\"%E6%99%BA%E8%83%BD%E4%BC%98%E9%80%89/1.03 CFNetwork/1206 Darwin/20.1.0\",\"Content-Length\":\"28\",\"Accept-Language\":\"zh-cn\"}')
jqbggbodyArr.push('sign=d7e087a09847507d9f84aa1a9f89cb63&channelID=2&timestamp=1613364669422&type=2&uid=8544&ver=103')
jqbqdbodyArr.push('channelID=2&uid=8544&ver=103')
jqbbody1Arr.push('sign=7d1e2f0b98a9ef3666c19af8fb2fad94&adconfigid=6&channelID=2&timestamp=1613363962067&type=3&uid=8544&ver=103')
jqbbody2Arr.push('sign=666c0e8c144c1f017eea96f163fab202&adconfigid=7&channelID=2&timestamp=1613363881702&type=3&uid=8544&ver=103')
jqbbody3Arr.push('sign=ec8859321954e544bdd40c4af45ba6cf&adconfigid=8&channelID=2&timestamp=1613363932048&type=3&uid=8544&ver=103')
jqbbody4Arr.push('sign=210c60cc7887f2020279b3b7ac5fa4ba&adconfigid=9&channelID=2&timestamp=1613364003739&type=3&uid=8544&ver=103')
jqbbody5Arr.push('sign=1a5b187cf40a79f145ea00bedb062736&adconfigid=10&channelID=2&timestamp=1613364044607&type=3&uid=8544&ver=103')
jqbrwbodyArr.push('uid=8544&channelID=2&type=1&ver=103')	
jqbzpbodyArr.push('sign=e7506671c6f9e181ea2b8b1a57143d52&channelID=2&timestamp=1613364077435&type=4&uid=8544&ver=103')	
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
} else {
    jqbhdArr.push($.getdata('jqbhd'))
    jqbggbodyArr.push($.getdata('jqbggbody'))
    jqbqdbodyArr.push($.getdata('jqbqdbody'))
    jqbbody1Arr.push($.getdata('jqbbody1'))
    jqbbody2Arr.push($.getdata('jqbbody2'))
    jqbbody3Arr.push($.getdata('jqbbody3'))
    jqbbody4Arr.push($.getdata('jqbbody4'))
    jqbbody5Arr.push($.getdata('jqbbody5'))
    jqbrwbodyArr.push($.getdata('jqbrwbody'))	
    jqbzpbodyArr.push($.getdata('jqbzpbody'))
    let jqbcount = ($.getval('jqbcount') || '1');
  for (let i = 2; i <= jqbcount; i++) {
    jqbhdArr.push($.getdata('jqbhd${i}'))
    jqbggbodyArr.push($.getdata('jqbggbody${i}'))
    jqbqdbodyArr.push($.getdata('jqbqdbody${i}'))
    jqbbody1Arr.push($.getdata('jqbbody1${i}'))
    jqbbody2Arr.push($.getdata('jqbbody2${i}'))
    jqbbody3Arr.push($.getdata('jqbbody3${i}'))
    jqbbody4Arr.push($.getdata('jqbbody4${i}'))
    jqbbody5Arr.push($.getdata('jqbbody5${i}'))
    jqbrwbodyArr.push($.getdata('jqbrwbody${i}'))	
    jqbzpbodyArr.push($.getdata('jqbzpbody${i}'))	  
  }
}



!(async () => {

       console.log(`\n金钱豹开始执行签到任务！💦\n`)
       await jqbqd();
    for (let i = 0; i < 6; i++) {
      $.index = i + 1      
       console.log(`\n金钱豹已执行第一个看视频任务！💦\n等待10秒开始执行第二个看视频任务`)
       await jqbsp1();
       await $.wait(10000);
       console.log(`\n金钱豹已执行第二个看视频任务！💦\n等待10秒开始执行第三个看视频任务`)
       await jqbsp2();
       await $.wait(10000);
	  console.log(`\n金钱豹已执行第三个看视频任务！💦\n等待10秒开始执行第四个看视频任务`)
       await jqbsp3();
	  await $.wait(10000);  
	  console.log(`\n金钱豹已执行第四个看视频任务！💦\n等待10秒开始执行第五个看视频任务`)
       await jqbsp4();
	  await $.wait(10000);
	  console.log(`\n金钱豹已执行第五个看视频任务！💦\n等待10秒开始，准备执行下一轮视频任务`)
	  await jqbsp5();
       await $.wait(10000);
       console.log(`\n金钱豹视频任务已执行完第${i+1}轮视频任务！💦\n共有五轮视频任务，开始执行下一轮视频任务`)
  }for (let j = 0; j < 3; j++) {
	  $.index = j + 1
	  console.log(`\n金钱豹开始执行第${j+1}广告任务！💦\n等待10秒开始执行下一次广告任务`)
	  await jqbgg();
	  await $.wait(10000);
  }for (let x = 0; x < 20; x++) {
	  $.index = x + 1
	  console.log(`\n金钱豹开始执行第${x+1}转盘抽奖！💦\n等待10秒开始执行下一次转盘抽奖`)
	  await jqbzp();
	  await $.wait(10000);
	  }
	  console.log(`\n金钱豹执行转盘抽奖完成！💦\n等待10秒开始执行每日任务奖励领取`)
	  //await $.wait(10000);
	  await jqbrw();
	  await $.wait(3000);
$.msg("","","金钱豹任务已全部完成！")
  
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//金钱豹数据获取
function jqbck() {
if ($request.url.indexOf("submitsign") > -1){
  $.setdata(JSON.stringify($request.url),'jqburl')
    $.log(jqburl)
$.setdata(JSON.stringify($request.headers),'jqbhd');   $.msg($.name,"","金钱豹headers获取成功！")
    $.log(jqbhd)
  $.setdata($request.body,'jqbqdbody')
   $.msg($.name,"","金钱豹签到body获取成功！")
  }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("type=2") > -1){
    $.setdata($request.body,'jqbggbody')
$.log(jqbggbody)
   $.msg($.name,"","金钱豹广告body获取成功！")
  }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=6") > -1){
  $.setdata($request.body,'jqbbody1')
$.log(jqbbody1)
   $.msg($.name,"","金钱豹视频body1获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=7") > -1){
  $.setdata($request.body,'jqbbody2')
$.log(jqbbody2)
   $.msg($.name,"","金钱豹视频body2获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=8") > -1){
  $.setdata($request.body,'jqbbody3')
$.log(jqbbody3)
   $.msg($.name,"","金钱豹视频body3获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=9") > -1){
  $.setdata($request.body,'jqbbody4')
$.log(jqbbody4)
   $.msg($.name,"","金钱豹视频body4获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=10") > -1){
  $.setdata($request.body,'jqbbody5')
$.log(jqbbody5)
   $.msg($.name,"","金钱豹视频body5获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("type=4") > -1){
  $.setdata($request.body,'jqbzpbody')
$.log(jqbzpbody)
   $.msg($.name,"","金钱豹转盘body获取成功！")
    }else if ($request.url.indexOf("finishdailytask") > -1&&$request.body.indexOf("type=1") > -1){
  $.setdata($request.body,'jqbrwbody')
   $.msg($.name,"","金钱豹每日任务body获取成功！")
  }
}



//金钱豹视频1     
function jqbsp1(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse(jqbhd),
        body :  jqbbody1,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频1回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频1回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频2
function jqbsp2(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse(jqbhd),
        body :  jqbbody2,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频2回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频2回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频3
function jqbsp3(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse(jqbhd),
        body :  jqbbody3,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频3回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频3回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频4
function jqbsp4(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse(jqbhd),
        body :  jqbbody4,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频4回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频4回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频5
function jqbsp5(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse(jqbhd),
        body :  jqbbody5,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频5回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频5回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹转盘
function jqbzp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse(jqbhd),
        body :  jqbzpbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹转盘抽奖回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹转盘抽奖回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹广告
function jqbgg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse(jqbhd),
        body :  jqbggbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹广告任务回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹广告任务回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹每日任务
function jqbrw(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/finishdailytask',
        headers : JSON.parse(jqbhd),
        body :  jqbrwbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹每日任务回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 401){
        console.log('金钱豹每日任务回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹签到
function jqbqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/submitsign',
        headers : JSON.parse(jqbhd),
        body : jqbqdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹签到回执:成功🌝 '+result.msg+'等待10秒开始执行视频任务')
}
if(result.statuscode == 400 || result.statuscode == 401){
        console.log('金钱豹签到回执:失败🚫 '+result.msg)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}






































function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

/*
软件名称:阅友小说 商店自己下载
更新时间：2021-02-28 @肥皂
脚本说明：阅友小说自动任务


本脚本以学习为主
数据比较多，一步一步来吧

使用方法，开启阅友小说header并确认阅友小说body处于禁用状态
1,进入阅友小说，点击我的，获取用户信息成功
2,继续点击福利界面幸运大转盘，转一次获取抽奖数据
3,点击书架随便看一本书，等待一分钟左右获取时长数据，注意必须是要在阅读小说里面的数据才算成功，如果没进阅读里面提示获取数据成功是无效的。
4,继续等待右上角金币转圈完毕，获取计时奖励数据
5,禁用阅友小说header，开启阅友小说body
6,点击福利界面，点击看视频奖励，观看一个视频获取数据


TG电报群: https://t.me/hahaha8028

阅友小说的阅读福利和连续阅读福利暂时没加，跑完脚本自己去领取吧，下次再加入吧
boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json


阅友小说
圈X配置如下，其他软件自行测试
[task_local]
#阅友小说
15 12 * * * https://raw.githubusercontent.com/age174/-/main/yyxs.js, tag=阅友小说, img-url=https://s3.ax1x.com/2021/02/27/6pouiF.jpg, enabled=true


[rewrite_local]
#阅友小说header
http.*://.*.reader.yueyouxs.com/ url script-request-header https://raw.githubusercontent.com/age174/-/main/yyxs.js

#阅友小说body
http.*://.*.reader.yueyouxs.com/ url script-request-body https://raw.githubusercontent.com/age174/-/main/yyxs.js

#loon用户

#header
http.*://.*.reader.yueyouxs.com/ script-path=https://raw.githubusercontent.com/age174/-/main/yyxs.js, requires-header=true, timeout=10, tag=阅友小说

#body
http.*://.*.reader.yueyouxs.com/ script-path=https://raw.githubusercontent.com/age174/-/main/yyxs.js, requires-body=true, timeout=10, tag=阅友小说

#surge用户

#header
阅友小说 = type=http-request,pattern=http.*://.*.reader.yueyouxs.com/,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/yyxs.js,script-update-interval=0

#body
阅友小说 = type=http-request,pattern=http.*://.*.reader.yueyouxs.com/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/yyxs.js,script-update-interval=0


[MITM]
hostname = *.reader.yueyouxs.com


*/


const $ = new Env('阅友小说');
let status;
status = (status = ($.getval("yyxsstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const yyxsspurlArr = [], yyxssphdArr = [],yyxsspbodyArr = [],yyxsjsurlArr = [],yyxsjsbodyArr = [],yyxsscurlArr = [],yyxsschdArr = [],yyxscjurlArr = [],yyxscjhdArr = [],yyxsxxurlArr = [],yyxscount = ''
let yyxsspurl = $.getdata('yyxsspurl')
let yyxssphd = $.getdata('yyxssphd')
let yyxsspbody = $.getdata('yyxxspbody')
let yyxsjsurl = $.getdata('yyxsjsurl')
let yyxsjsbody = $.getdata('yyxsjsbody')
let yyxsscurl = $.getdata('yyxsscurl')
let yyxsschd = $.getdata('yyxsschd')
let yyxscjurl = $.getdata('yyxscjurl')
let yyxscjhd = $.getdata('yyxscjhd')
let yyxsxxurl = $.getdata('yyxsxxurl')

if ($.isNode()) {
     yyxsspurlArr.push('http://goway.reader.yueyouxs.com/assemble/app/video/notify?channelId=yueyou&platId=1&deviceId=6D2F4EDF-6797-492B-AD2A-C8A5206A59E6&appId=com.reader.xiyue&appVersion=2.9.7&time=1614522943&userId=y39450766&sex=boy&tmpToken=69F8DC7904CF4200AB9666008C9B73DD&wx=1&idfa=00000000-0000-0000-0000-000000000000&sign=x1LG0ckqqL%2BSZrJuv2eLTMMofB9zqkQKJZWQ2HvQssbKdqR7lTIOJyH1%2FCiS%201lOTys5X4VJX7lHIea3DNep2vcEqULJSsGen5YZr94ueiYrdtKeGsRRyYuN5%20MNl5Qh5zC1o7t58HJm%2FUa5IuZn4dux9Ijst3P5TRymrue16ghJZY72%2B2dFJS%20FsbaziwtWHXKE48gmxIdLrzAsW%2BqUGaTXvlqCsV%2BFPa9eYYT4j6WjHGW6Eo5%20miyihOTA77v5wHpOK9hUXir0sytU5IMEfhojaanF98g5bqkF08XcVhY07YJ0%20iEJckcWece%2FlBl74RDUR8Y2%2B9DCanCzYPgtQkRyhin0oEi9CBbVf9Au1YAkp%20bzqd8LWA6MsbFdajGc5x2Gm1Y%2FhElw9COIW1mAuZM2BmDU6Q1Ov6Ze1g4d6N%20n%2F9UEMk%3D')
     yyxssphdArr.push('{\"Accept\":\"*/*\",\"Accept-Encoding\":\"gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Host\":\"goway.reader.yueyouxs.com\",\"User-Agent\":\"yue you xiao shuo/2.9.71 (iPhone; iOS 14.2; Scale/3.00)\",\"Content-Length\":\"464\",\"Accept-Language\":\"zh-Hans-CN;q=1\"}')
     yyxsspbodyArr.push('\"adCp=toutiao&extra=%7B%22appId%22%3A%22com.reader.xiyue%22%2C%22channelId%22%3A%22yueyou%22%2C%22p%22%3A%22Wwqsk6sc40ZMMsjke6/wqAhET96jgpoMRL7WgZF%2BqlJ76KGMceLfOsUri0w8bcq76Mzia3tyYoAyUGqPxJ5nDI9TJs3jVyMwf5rdn8BI0sG4resSY5SEv/4tNisKbeUS0Q66MTSnCxImuWk2RmCzOoycgTT6WxzQ%22%2C%22platId%22%3A1%2C%22subType%22%3A0%2C%22taskId%22%3A22%2C%22ts%22%3A%221614522916%22%2C%22type%22%3A6%2C%22version%22%3A%222.9.7%22%7D&siteId=121&trans_id=b1340177fbc94d0da8c3d121a971b65f\"')
     yyxsjsurlArr.push('http://goway.reader.yueyouxs.com/goway/act/app/task/addTimerRcd?channelId=yueyou&platId=1&deviceId=6D2F4EDF-6797-492B-AD2A-C8A5206A59E6&appId=com.reader.xiyue&appVersion=2.9.7&time=1614522868&userId=y39450766&sex=boy&tmpToken=13C0E70CF0D34711AE2BFF1CD5D070DD&wx=1&idfa=00000000-0000-0000-0000-000000000000&sign=VNSVjmC0XeC5wjnrAiXu5QUmxDfljWstrDKAIVSuFZbY%2BCcsqEAmxedfRe0N%20RQPsegbntNkT%2FDYTKwxFrh64Q6RoPrTHBitsxSuLTDxtyrvozOJre3JigDJQ%20ao%2FEnmcMmoh9dC6UK0C2pp816YVxFpxsFUo%2FS6uOpnEkcgxkmNhEjAESF1H1%20RCtoloiecDajTUhYBlehc3IpdOniBKmCYNd6jRUaRmXOBmdMmkWcffjD6u00%202cjtg8Hct4oanBckAb%2FN6CYik%2FLcGOrU1%2B3qobSICSWe6mbuS5CFvyC5z9kO%20bZuiOyk4nzWYU6xVpvdA8Y2%2B9DCanCzYPgtQkRyhinyA6qevLnxjfSgSL0IF%20tV80tjjrokAy4vDCDyGHDs1%2FDOTsr7eO0hdvqGPcUTxmQ0Ewl98bzFiximP3%20LWXa23Q%3D')
     yyxsschdArr.push('{\"User-Agent\":\"yue you xiao shuo/2.9.71 (iPhone; iOS 14.2; Scale/3.00)\",\"Host\":\"bi.reader.yueyouxs.com\",\"Connection\":\"keep-alive\",\"Accept-Language\":\"zh-Hans-CN;q=1\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept\":\"*/*\"}')
     yyxsscurlArr.push('http://bi.reader.yueyouxs.com/api/valid/create.do?data=3W7oZG2p6eqCSIPdrp3h8W%2BfilmBYyP0M7HTh6XaNxJdK1FUP9Zg9U19Rb3f%20zKZMbl8FaZxFk3uAJICPLFBPg4zUOYsgwFdJz8pkK6HFN8xgVzLO9cGbmfp4%20jAfY73sXuUMgZ0Uy%2BKs%2FHyhK1Y3FBteaRq1rjzWiwc7UywrS3oXY2IBTmGW3%20xuJvgfQwOk5rytv%2BElEcxwMYyIC34ZhY4vsGNtGKMuj6VNNH6mYSNALssMOK%20RC5cuzNU9mq3l%2FyWTkkVQDjXQL1NOSO1t%2FgCM9kupB6PItFvdR91YFP1d17O%202OhE2nsopHF0H8SHL%2FshwTKW%2FKCxAsfymHLDwxTXxlb3vTQQPw6ZtUrj02s2%20SkQaTH7B1%2B6vlP7jdGULAs70VL%2BdiYJgfKc%3D')
     yyxscjhdArr.push('{\"Origin\":\"https://h5.reader.yueyouxs.com\",\"Accept\":\"application/json, text/plain, */*\",\"Connection\":\"keep-alive\",\"Referer\":\"https://h5.reader.yueyouxs.com/raffle?title=%25E5%25A4%25A7%25E8%25BD%25AC%25E7%259B%2598&YYFullScreen=1&channelId=yueyou&channelId=yueyou&platId=1&deviceId=6D2F4EDF-6797-492B-AD2A-C8A5206A59E6&appId=com.reader.xiyue&appVersion=2.9.7&time=1614522749&userId=y39450766&sex=boy&tmpToken=13C0E70CF0D34711AE2BFF1CD5D070DD&wx=1&idfa=00000000-0000-0000-0000-000000000000&sign=XxGsUC2sDl4bEmZPIhaI9GnGhFfkMxspyU4%2FLw78j69RRJ0hDQwgBSS3DOmy%20XtW9%2B5b003%2BkRe7ofLcW4aP%2BP2DrMORdn7XfVIwSR3oIyI7KdqR7lTIOJ8HK%20zf4U9zqhjLixvixS%2BvsY5NgC%2FCrO5pYdk3GNVRSPUD6U7iKS45ZoOy3loZ7L%20psOsHytfuJu%2BxtvCgl1VJYorxmt5fslWoKlspm4889mt8zCfl%2FgtcUCvlFLN%20xlth%2BiPXIOsZ5WBDuxcQwVaKejz1J0v4eBFFndW4PAY5I2F33%2FdKc21FDbOS%20f5C%2BLRhDHHqqU1P7uar31mfEh8Fk0TNV41hB7T1qUw%2FLuQYGNM3UPQ7Earse%20K7ldSPjY8hJCaC720uWqcaq6TkE8Z70I3Gt9KBIvQgW1X2dV7NOBr9LVDpP2%20zLlkA719KBIvQgW1X%2FBlNgH1UiPQH%2BIUgC3chW4lk6mu2S1BiQAFt5cgcDbd%20oqNhw7RydlV%2BpQCY4Dkd0WZ%2FI%2FpKk5ri\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Host\":\"goway.reader.yueyouxs.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148\",\"Accept-Language\":\"zh-cn\"}')
     yyxscjurlArr.push('https://goway.reader.yueyouxs.com/goway/act/h5/raffle/draw?channelId=yueyou&platId=1&deviceId=6D2F4EDF-6797-492B-AD2A-C8A5206A59E6&appId=com.reader.xiyue&appVersion=2.9.7&time=1614522794&userId=y39450766&sex=boy&tmpToken=13C0E70CF0D34711AE2BFF1CD5D070DD&wx=1&idfa=00000000-0000-0000-0000-000000000000&sign=VNSVjmC0XeBTmBv%2Fus8ZfP4imvLQeG8lhG7P%2BOPocPhKi4EEoJd38QkIKQPv%20ykfnWR%2B2k5JoO1QkVqnnJo9ySWGR%2BMgCK46feptagJM%2FFtVB7rC4gE%2FkYrSv%20GKPLbsdPmD0L%2BltubsDrcRrpyA2Xeb9opTp2eWzwJG36iocgtpq6kMdmeX77%20UGeXevixkO1n0%2FaMFxUZmljtvkqtrXwGFITHsfRaOJlViEKTQET5JvLUQ%2FYd%20rBNvb1HXWIxxX9cAH59PQfN3fCxFubm2Ng4C5JZMUQsUUD8PAgkvOW7ZWNkK%20Egh3xE5dG6ZvFXZs4IEHfIDqp68ufGNnVezTga%2FS1X0oEi9CBbVfbqy3sO0n%20UleDXblDRyFKX7zcWoVTzYRITiyeQkqKL%2BZNLzbGDiQyg95MyVU70dHL%2FIuB%20HU%2BgmUA%3D')
     yyxsxxurlArr.push('http://goway.reader.yueyouxs.com/assemble/app/ucenter/home?channelId=yueyou&platId=1&deviceId=6D2F4EDF-6797-492B-AD2A-C8A5206A59E6&appId=com.reader.xiyue&appVersion=2.9.7&time=1614522743&userId=y39450766&sex=boy&tmpToken=13C0E70CF0D34711AE2BFF1CD5D070DD&wx=1&idfa=00000000-0000-0000-0000-000000000000&sign=x1LG0ckqqL85OcllzoO52wnJbiHAFkRlMAN7rGp5V9jKdqR7lTIOJyH1%2FCiS%201lOTys5X4VJX7lHIea3DNep2vcEqULJSsGen5YZr94ueiYrdtKeGsRRyYuN5%20MNl5Qh5zC1o7t58HJm%2FUa5IuZn4dux9Ijst3P5TRymrue16ghJZY72%2B2dFJS%20FsbaziwtWHXK3omXHJLaQ0LAsW%2BqUGaTXvlqCsV%2BFPa9eYYT4j6WjHGW6Eo5%20miyihE5ntzeZx0o4WY5rNxV2E8ye7xQxaqWrliAYWXuhFnUBmLa1e3DtvHF0%20iEJckcWece%2FlBl74RDUR8Y2%2B9DCanCzYPgtQkRyhin0oEi9CBbVf9Au1YAkp%20bzqd8LWA6MsbFdajGc5x2Gm1Y%2FhElw9COIW1mAuZM2BmDU6Q1Ov6Ze1g4d6N%20n%2F9UEMk%3D')
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
} else {
     yyxsspurlArr.push($.getdata('yyxsspurl'))
     yyxssphdArr.push($.getdata('yyxssphd'))
	yyxsspbodyArr.push($.getdata('yyxsspbody'))
	yyxsjsurlArr.push($.getdata('yyxsjsurl'))
	yyxsjsbodyArr.push($.getdata('yyxsjsbody'))
     yyxsschdArr.push($.getdata('yyxsschd'))
     yyxsscurlArr.push($.getdata('yyxsscurl'))
     yyxscjhdArr.push($.getdata('yyxscjhd'))
     yyxscjurlArr.push($.getdata('yyxscjurl'))
     yyxsxxurlArr.push($.getdata('yyxsxxurl'))
    let yyxscount = ($.getval('yyxscount') || '1');
  for (let i = 2; i <= yyxscount; i++) {
    yyxsspurlArr.push($.getdata(`yyxsspurl${i}`))
    yyxssphdArr.push($.getdata(`yyxssphd${i}`))
    yyxsspbodyArr.push($.getdata(`yyxsspbody${i}`))
    yyxsjsurlArr.push($.getdata(`yyxsjsurl${i}`))
    yyxsjsbodyArr.push($.getdata(`yyxsjsbody${i}`))
    yyxsscurlArr.push($.getdata(`yyxsscurl${i}`))
    yyxsschdArr.push($.getdata(`yyxsschd${i}`))
    yyxscjurlArr.push($.getdata(`yyxscjurl${i}`))
    yyxscjhdArr.push($.getdata(`yyxscjhd${i}`))
    yyxsxxurlArr.push($.getdata(`yyxsxxurl${i}`))
  }
} 

    console.log(`------------- 共${yyxssphdArr.length}个账号-------------\n`)
      for (let i = 0; i < yyxssphdArr.length; i++) {
        if (yyxssphdArr[i]) {
         
          yyxsspurl = yyxsspurlArr[i];
          yyxssphd = yyxssphdArr[i];
		yyxsspbody = yyxsspbodyArr[i];
		yyxsjsurl = yyxsjsurlArr[i];
		//yyxsjsbody = yyxsjsbodyArr[i];
          yyxsscurl = yyxsscurlArr[i];
          yyxsschd = yyxsschdArr[i];
          yyxscjurl = yyxscjurlArr[i];
          yyxscjhd = yyxscjhdArr[i];
          yyxsxxurl = yyxsxxurlArr[i];
          $.index = i + 1;
          console.log(`\n开始【阅友小说${$.index}】`)
    
    for (let sc = 1 ; sc < 200 ; sc++) {
    console.log('\n阅友小说阅读时长上传回执:成功🌝 已上传'+sc+'分钟') 
    await yyxssc();
    await $.wait(100);
    
    }
	await yyxsjs();
     await yyxssp();
     await yyxscj();
     await yyxsxx();

      
  }
 
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//阅友小说数据获取
function yyxsck() {
   if ($request.url.indexOf("notify") > -1 && $request.body.indexOf("siteId") > -1) {
 const yyxsspurl = $request.url
  if(yyxsspurl)     $.setdata(yyxsspurl,`yyxsspurl${status}`)
    $.log(yyxsspurl)
  const yyxssphd = JSON.stringify($request.headers)
        if(yyxssphd)    $.setdata(yyxssphd,`yyxssphd${status}`)
$.log(yyxssphd)
const yyxsspbody = JSON.stringify($request.body)
        if(yyxsspbody)    $.setdata(yyxsspbody,`yyxsspbody${status}`)
$.log(yyxsspbody)
   $.msg($.name,"",'阅友小说'+`${status}` +'视频奖励数据获取成功！')
  }
if ($request.url.indexOf("addTimerRcd") > -1) {
 const yyxsjsurl = $request.url
  if(yyxsjsurl)     $.setdata(yyxsjsurl,`yyxsjsurl${status}`)
    $.log(yyxsjsurl)
  const yyxsjsbody = JSON.stringify($request.body)
        if(yyxsjsbody)    $.setdata(yyxsjsbody,`yyxsbody${status}`)
$.log(yyxsjsbody)
   $.msg($.name,"",'阅友小说'+`${status}` +'阅读计时数据获取成功！')
  }
if ($request.url.indexOf("valid/create.do") > -1) {
 const yyxsscurl = $request.url
  if(yyxsscurl)     $.setdata(yyxsscurl,`yyxsscurl${status}`)
    $.log(yyxsscurl)
  const yyxsschd = JSON.stringify($request.headers)
        if(yyxsschd)    $.setdata(yyxsschd,`yyxsschd${status}`)
$.log(yyxsschd)
$.msg($.name,"",'阅友小说'+`${status}` +'阅读时长数据获取成功！')
}
if ($request.url.indexOf("draw") > -1) {
 const yyxscjurl = $request.url
  if(yyxscjurl)     $.setdata(yyxscjurl,`yyxscjurl${status}`)
    $.log(yyxscjurl)
  const yyxscjhd = JSON.stringify($request.headers)
        if(yyxscjhd)    $.setdata(yyxscjhd,`yyxscjhd${status}`)
$.log(yyxscjhd)
$.msg($.name,"",'阅友小说'+`${status}` +'抽奖数据获取成功！')
}
if ($request.url.indexOf("ucenter/home") > -1) {
 const yyxsxxurl = $request.url
  if(yyxsxxurl)     $.setdata(yyxsxxurl,`yyxsxxurl${status}`)
    $.log(yyxsxxurl)
$.msg($.name,"",'阅友小说'+`${status}` +'用户信息数据获取成功！')
}
}

//阅友小说计时   
function yyxsjs(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : yyxsjsurl,
        headers : JSON.parse(yyxssphd),
        body : 'coins=50'
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 0) {
        console.log('\n阅友小说阅读计时奖励回执:成功🌝 获得:'+result.data+'金币') 
          await yyxsjs();
          await $.wait(1000);
        } else {
       
       console.log('\n阅友小说阅读计时奖励回执:失败🚫 '+result.msg) 
        
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//阅友小说视频奖励
function yyxssp(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof yyxssphd === "undefined") {
        $.msg($.name,"",'请先获取阅友小说数据!😓',)
        $.done()
      }
let url = {
        url : yyxsspurl,
        headers : JSON.parse(yyxsschd),
        body : yyxsspbody,}
      $.post(url, async (err, resp, data) => {
        try {
          
    const result = JSON.parse(data)
    console.log('\n阅友小说视频奖励领取回执:'+data)
        if(result.code == 0){
          console.log('\n阅友小说视频奖励领取回执:成功🌝') 
           await yyxssp();
           await $.wait(3000);
} else {
console.log('\n阅友小说视频奖励领取回执:失败🚫 '+result.msg)
}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


//阅友小说时长上传  
function yyxssc(timeout = 0) {
  return new Promise((resolve) => {
//console.log(yyxsscurl)

let url = {
        url : yyxsscurl,
      headers : JSON.parse(yyxsschd),
        
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
	 //console.log('\n阅友小说阅读时长上传回执:'+data)
        if (result.code == 0) {
           
        } else {
       
       console.log('\n阅友小说阅读时长上传回执:失败🚫 '+result.msg) 
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//阅友小说转盘
function yyxscj(timeout = 0) {
  return new Promise((resolve) => {
//console.log(yyxsscurl)

let url = {
        url : yyxscjurl,
      headers : JSON.parse(yyxscjhd),
        
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 0) {
          console.log('\n阅友小说转盘抽奖回执:成功🌝 '+result.data.prizeName) 
           await $.wait(1000);
           await yyxscj();
           
        } else {
       
       console.log('\n阅友小说转盘抽奖回执:失败🚫 '+result.msg) 
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//阅友小说信息
function yyxsxx(timeout = 0) {
  return new Promise((resolve) => {
//console.log(yyxsscurl)
let url = {
        url : yyxsxxurl,
      headers : JSON.parse(yyxssphd),
        body : '',
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 0) {
         // console.log(data)
          console.log('\n阅友小说用户信息回执:成功🌝 \n\n------------- 当前账号信息 -------------\n用户id:'+result.data.uc.User.id+'\n金币数:'+result.data.uc.User.acctInfo.coins+'个，约等于:'+result.data.uc.User.acctInfo.coins / 10000+'元\n'+result.data.uc.dailyMsg+'\n'+result.data.uc.totalMsg)
           
           
        } else {
       
       console.log('\n阅友小说用户信息回执:失败🚫 '+msg) 
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

const fs = require('fs');
const readline = require('readline');
const translate = require('@vitalets/google-translate-api');
function fn_convert(text, from, to){
    translate(text, {from, to}).then(res => {
        console.log(res.text);
    }).catch(err => {
        console.error(err);
    });
}


const sleep = (ms) => {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
const lang = {ko:'ko',zh:'zh-CN',en:'en',de:'de'};
const lineArr = [];
const fromLang = lang.ko;
const toLang = lang.de;
// read by line
async function readLine(filename) {
    var instream = fs.createReadStream(filename);
    var reader = readline.createInterface(instream, process.stdout);
    var count = 0;

    reader.on('line', function (line) {
        count+=1;
        const obj = {line:count,ko:line}
        lineArr.push(obj);
    });

    reader.on('close',  async (line) => {
        // await sleep(1000);
        // fn_convert(i,li,'ko','zh-CN');
        let message = '';
        for(let i=0;i<lineArr.length;i++) {
            const li = lineArr[i];
            message+=('\n'+li.ko);
            //limit 100 line
            if(i%100 == 99) {
                await sleep(2000);
                fn_convert(message,fromLang,toLang);
                message = '';
            }
        }
        await sleep(2000);
        if(message) {
            fn_convert(message,fromLang,toLang);
        }
        //lineArr.map(li=>console.log(li));

    });
}

// start
var filename = 'C:\\php_app.message_public.txt';
readLine(filename);

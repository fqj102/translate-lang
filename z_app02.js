const fs = require('fs');
const readline = require('readline');

const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'P@ssw0rd123!@#',
    database : 'test'
});

async function fn_convert(text, from,to){
    const translate = require('@k3rn31p4nic/google-translate-api');
    translate(text, { from,to}).then(res => {
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

const lineArr = [];
// 한 줄씩 읽어들이는 함수 정의
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
        console.log('파일을 모두 읽음.');
        // await sleep(1000);
        // fn_convert(i,li,'ko','zh-CN');
        let message = '';
        for(let i=0;i<lineArr.length;i++) {
            const li = lineArr[i];
            message+=('\n'+li.ko);
            if(i%100 == 99) {
                await sleep(2000);
                fn_convert(message,'ko','zh-CN');
                message = '';
            }
        }

        console.log('############## END #############')
        //lineArr.map(li=>console.log(li));

    });
}

// 함수 실행
var filename = 'C:\\php_app.message.txt';
readLine(filename);

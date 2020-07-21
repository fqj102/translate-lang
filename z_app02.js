const fs = require('fs');
const readline = require('readline');
async function fn_convert(text, from, to){
    let promise = new Promise((resolve, reject) => {
        const translate = require('@k3rn31p4nic/google-translate-api');
        translate(text, { from,to }).then(res => {
            //console.log(res.text);
            resolve(res.text);
        }).catch(err => {
            console.error(err);
        });
    });
    return promise;
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
        for(let i=0;i<lineArr.length;i++) {
            const li = lineArr[i];
            li.zh = await fn_convert(li.ko,'ko','zh-CN');
        }

        lineArr.map(li=>console.log(li));

    });
}

// 함수 실행
var filename = 'C:\\php_app.message.txt';
readLine(filename);
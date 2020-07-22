const fs = require('fs');
const readline = require('readline');
const translate = require('@vitalets/google-translate-api');

function fn_convert(text, from, to, fn){
    translate(text, {from, to}).then(res => {
        fn(res.text);
    }).catch(err => {
        console.error(err);
    });
}

// 한 줄씩 읽어들이는 함수 정의
function readLine(filename) {
    var instream = fs.createReadStream(filename);
    var reader = readline.createInterface(instream, process.stdout);
    var count = 0;
    reader.on('line', function (line) {
        fn_convert(line, 'ko', 'zh-CN', function (text) {
            console.log(line,'      ',text);
        });
        count += 1;
    });
    reader.on('close', function (line) {
        console.log('파일을 모두 읽음.');
    });
}

// 함수 실행
var filename = 'C:\\php_app.message.txt';
readLine(filename);
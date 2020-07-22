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

fs.readFile('C:\\php_app.message1.txt', 'utf8', function(err, data){
    fn_convert(data, 'ko', 'zh-CN', function (text) {
        console.log(text);
    });
});



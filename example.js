//Too many requests
const translate = require('@vitalets/google-translate-api');
translate('안녕하세요. 유통관리사 시험은 대한민국어디에서 든지 누구든지 볼 수 있습니다. 당연히 광주는 광역시 이고, 민주도시인데 그곳에서도 봅니다.', {from:'ko',to: 'en'}).then(res => {
    console.log(res.text);
    console.log(res.from.language.iso);
}).catch(err => {
    console.error(err);
});

// function fn_convert(text,from,to,fn) {
//     translate(text, {from,to}).then(res => {
//         fn(res.text);
//     }).catch(err => {
//         console.error(err);
//     });
// }

//https://soooprmx.com/archives/7718

// var text = "hello. 유통관리 is sdfsdfsdfsdfsdfsdfsdfs 대한민국 sdfsdfsdfsdf";
// // var convertLang = text.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"*")
// // console.log(convertLang);
// var re = /.*[가-힣]+.*/gi;
// var result = re.exec(text);
// console.log(result);



// fn_convert(convertLang,'ko','zh-CN',function(text){
//     console.log(text);
// });

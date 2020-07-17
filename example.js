const translate = require('@vitalets/google-translate-api');

translate('안녕하세요. 유통관리사 시험은 대한민국어디에서 든지 누구든지 볼 수 있습니다. 당연히 광주는 광역시 이고, 민주도시인데 그곳에서도 봅니다.', {from:'ko',to: 'en'}).then(res => {
    console.log(res.text);
    console.log(res.from.language.iso);
}).catch(err => {
    console.error(err);
});
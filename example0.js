// Imports the Google Cloud client library
const translate = require('@k3rn31p4nic/google-translate-api');

translate('Tu es incroyable!', { to: 'en' }).then(res => {
    console.log(res.text); // OUTPUT: You are amazing!
}).catch(err => {
    console.error(err);
});
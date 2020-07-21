const translate = require('@vitalets/google-translate-api');
const tunnel = require('tunnel');
translate('Ik spreek Engels', {to: 'en'}, {
    agent: tunnel.httpsOverHttp({
            proxy: {
                host: 'localhost',
                proxyAuth: 'user:pass',
                port: '8080',
                headers: {
                    'User-Agent': 'Node'
                }
            }
        }
    )}).then(res => {
    // do something
}).catch(err => {
    console.error(err);
});
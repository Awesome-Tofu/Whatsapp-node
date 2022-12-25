const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fetch = require("node-fetch").default;

const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

//fking chatbot code

client.on('message', msg => {
    // fetch(`http://api.brainshop.ai/get?bid=169976&key=vroVmiAsTNWUy5rZ&uid=${msg.from}&msg=${encodeURIComponent(msg.body)}`)
    fetch(`https://bakufuapi.vercel.app/api/chatbot/cleverbot?name=Yae%20Miku&owner=Tofu&message=${encodeURIComponent(msg.body)}`)
    .then(res => res.json())
    .then(json => {
        // let cnt= json.cnt;
        let cnt= json.reply;
        let result= cnt.replace('Kurumi','Yae Miku');
        let result1= result.replace('@aditya.agatsuma','Aditya (Tofu)');
      msg.reply(result1);
    }).catch(err => {});
//k
});
client.initialize();
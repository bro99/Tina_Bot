const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
	authStrategy: new LocalAuth({ clientId: "mandavideo" }),
	puppeteer: {
		executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
		headless: true
	}
});


client.on('qr', (qr) => {
	console.log('QR RECEIVED', qr);
	qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
	console.log('Client is ready!');
});

client.on('message', async msg => {
	console.log(msg.from,msg.body);

	if(msg.body.includes("video")){
		const media = await MessageMedia.fromFilePath("pudim.mp4");
		client.sendMessage(msg.from,media);
	}
});

client.initialize();

 


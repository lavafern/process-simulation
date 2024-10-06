const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
	console.log("receiver data tostring + json parsed :", JSON.parse(msg.toString()));
});

server.bind(3001, () => console.log('udp server listening on port 3001'));


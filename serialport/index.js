const { SerialPort } = require("serialport");

const port = new SerialPort({
    path:  'COM5',
    baudRate : 115200
});
port.on('error',(err) => {
    console.log('err',err);
    
})

setInterval(() => {
    const message = "!AIVDM,1,1,,B,B7lodS@05r6>L:wq;KugcwWRT59<,0*3C";
    port.write(message+'\r\n');
}, 3000);
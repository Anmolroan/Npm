// var Qrcode=require('qrcode')
// var QRCode = require('qrcode')
 
// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })
// var QRCode = require('qrcode')
 
// QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
//   console.log(url)
// })
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');
program.argument("<name>","name to change")
.argument("[number]","number of times to print",1)
.action(function(name,number){
    number=Number(number)
    for (let i =0;i<number;i++){
        console.log(name)
    }
    
})
// program.argument()
// node index.js <text_for_qrcode> --output filename.png
var ipList = [];
const args = process.argv.slice(2);

const exec = require('child_process').exec;
const child = exec('node ohlavpn.js ' + args[0] + ' ' + args[1],
    (error, stdout, stderr) => {
        ipList = JSON.parse(stdout.replace(/'/g, '"')); 
        console.log(ipList);
});
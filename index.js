const http = require("http");
const os = require("os");

const date = Date.now();

http.createServer((req, res) => {
    const result = `${getTimeInformation()}${getMachineInformation()}`;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(result);
}).listen(80);

function getMachineInformation() {
    const cpu = `<h4>CPU INFO</h4><pre>Core: ${os.cpus().length}\nName: ${os.cpus()[0].model}\nSpeed: ${os.cpus()[0].speed}</pre>`;
    const _os = `<h4>OS</h4><pre>Name: ${os.hostname}\nUptime: ${os.uptime}\nPlatform: ${os.platform}\Release: ${os.release}\nArch: ${os.arch}\nMarchine Type: ${os.machine}\nMemory: ${Math.floor((os.totalmem - os.freemem) / 1024 / 1024)}/ ${Math.floor(os.totalmem / 1000 / 1000)} MB</pre>`
    return cpu + _os;
}

function getTimeInformation() {
    return `<h4>Time</h4><pre>Start time: ${new Date(date)}\nUptime: ${Math.floor((Date.now() - date) / 1000)}s</pre>`;
}

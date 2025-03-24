const os = require("os");


const osInfo = {
    version: os.version(),
    machine: os.machine(),
    platform: os.platform()

}

console.log(osInfo)
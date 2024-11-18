const os = require("os");

const userName = os.hostname()

console.log(`Your computer's name is ${os.hostname()}.`)

const compinfo = {
operatingSystem: os.platform(),
machineArchitecture: os.machine()
}

console.log(compinfo)
const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime is seconds

console.log(`The system uptime is : ${os.uptime}`);

const currentOs = {
    name:  os.type(),
    release: os.release(),
    totlaMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);
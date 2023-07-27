const os=require('os');

const osName=os.type();
const osVersion=os.release();

console.log("Operating System Name: ",osName);
console.log("Operating system realease: ",osVersion);
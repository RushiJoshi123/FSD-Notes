var os = require('os')
console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
console.log(os.tmpdir());
console.log(os.freemem()/(1024**3));

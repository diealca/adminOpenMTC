const fs = require('fs');
const PROXY_CONFIG = {
  "/api/*": {
    "target":{
      "host": "api.openmtc.org",
      "port": "3000",
      "protocol": "https:",
      "key": fs.readFileSync('./cert/console.key.pem'),
      "cert": fs.readFileSync('./cert/console.crt.pem'),
      "ca":fs.readFileSync('./cert/signing-ca-chain.pem')
      },
      "secure": true,
    "logLevel": "debug",
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;

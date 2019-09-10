const fs = require('fs');
const config = require('./config')
const PROXY_CONFIG = {
  "/api/*": {
    "target":{
      "host": config.api.host,
      "port": config.api.port,
      "protocol": "https:",
      "key": fs.readFileSync(config.certs.key),
      "cert": fs.readFileSync(config.certs.cert),
      "ca":fs.readFileSync(config.certs.ca)
      },
      "secure": true,
    "logLevel": "debug",
    "changeOrigin": true
  },
  "/onem2m/*": {
    "target":{
      "host": config.onem2m.host,
      "port": config.onem2m.port,
      "protocol": "https:",
      "key": fs.readFileSync(config.certs.key),
      "cert": fs.readFileSync(config.certs.cert),
      "ca":fs.readFileSync(config.certs.ca)
      },
      "secure": true,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/onem2m": ""
}
  }
}

module.exports = PROXY_CONFIG;

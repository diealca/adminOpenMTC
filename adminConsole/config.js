const config = {
  app: {
      port: 3000
  },
  api: {
      host: 'api.openmtc.org',
      port: 3000,
      name: 'openMTC'
  },
  onem2m: {
    host: 'backend.openmtc.org',
    port: 18000,
    name: 'openMTC'
},
  certs:{
      ca: 'cert/signing-ca-chain.pem',
      key: 'cert/console.key.pem',
      cert: 'cert/console.crt.pem'
  }
 };
 module.exports = config;

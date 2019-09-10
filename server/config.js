const config = {
    app: {
        port: 3000
    },
    db: {
        user: 'adminOpenMTC',
        password: 'User1',
        host: 'localhost',
        port: 27017,
        name: 'openMTC'
    },
    certs:{
        ca: 'cert/signing-ca-chain.pem',
        key: 'cert/api.key.pem',
        cert: 'cert/api.crt.pem'
    }
   };
   module.exports = config;
const express =  require ('express')
const bodyParser = require ('body-parser')
const fs = require('fs')
const https = require('https')
const PORT = 3000
const api = require ('./routes/api')
const app = express()

var key = fs.readFileSync('cert/api.key.pem');
var cert = fs.readFileSync( 'cert/api.crt.pem' );
var ca = fs.readFileSync( 'cert/signing-ca-chain.pem' );
var options = {
	key: key,
	cert: cert,
	ca: ca,
    requestCert: true, 
    rejectUnauthorized: true	
};

app.use(bodyParser.json())
app.use('/api', api)

https.createServer(options, app).listen(PORT)

/** 
app.listen(PORT,function(){
    
})
*/

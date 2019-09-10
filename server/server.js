const express =  require ('express')
const bodyParser = require ('body-parser')
const fs = require('fs')
const https = require('https')
const config = require('./config')
const api = require ('./routes/api')
const app = express()

var key = fs.readFileSync(config.certs.key);
var cert = fs.readFileSync(config.certs.cert);
var ca = fs.readFileSync(config.certs.ca);
var options = {
	key: key,
	cert: cert,
	ca: ca,
    requestCert: true, 
    rejectUnauthorized: true	
};

app.use(bodyParser.json())
app.use('/api', api)

https.createServer(options, app).listen(config.app.port)

/** 
app.listen(PORT,function(){
    
})
*/

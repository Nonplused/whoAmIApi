var express = require('express');
var ipaddr = require('ipaddr.js')
var router = express.Router();

router.get('/whoami', function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({
    "ip": ipaddr.process(req.ip).toString(), 
    "lang": req.headers['accept-language'].match(/[^,]*/)[0],
    "OS": req.headers['user-agent'].match(/[(][^)]*/)[0].substring(1)
   }));
}); 

module.exports = router;
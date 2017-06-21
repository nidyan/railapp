var express = require('express');
var router = express.Router();

var http = require('http')
var https = require('https')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/home' , function(req,response,next){
   
    var url = "http://api.railwayapi.com/name_number/train/bhopal/apikey/yqo4vcq8/";
    	var data = "";
	     http.get(url, function(res){
	         var body = '';

	         res.on('data', function(chunk){
	             body += chunk;
	         });

	         res.on('end', function(){
	              data = JSON.parse(body);
	             console.log("Got a response: ",  data.train);
	             response.render('home',data);
	         });

	         
	     }).on('error', function(e){
	           console.log("Got an error: ");
	     });

	    
 console.log(data.train);
 
});
module.exports = router;

var express = require('express');
var router = express.Router();

var http = require('http')
var https = require('https')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/home' , function(req,response,next){
   
    // var url = "http://api.railwayapi.com/name_number/train/bhopal/apikey/yqo4vcq8/";
    var url = "http://api.railwayapi.com/name_number/train/bhopal/apikey/i0eoy0jn/";
    
    	var data = "";
	     http.get(url, function(res){
	         var body = '';

	         res.on('data', function(chunk){
	             body += chunk;
	         });

	         res.on('end', function(){
	              data = JSON.parse(body); 

	              if(data.response_code==200){
	             console.log("Got a response: ",  data.response_code);
	             response.render('home',data);}
	             else
	             {
	             	response.send("Bad Gateway from aryan");
	             }
	         });

	         
	     }).on('error', function(e){
	           console.log("Got an error: ");
	     });

	    
 
});
module.exports = router;

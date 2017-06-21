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

	     http.get(url, function(res){
	         var body = '';

	         res.on('data', function(chunk){
	             body += chunk;
	         });

	         res.on('end', function(){
	             var data = JSON.parse(body);
	             console.log("Got a response: ",  data);
	             response.render('home',data);
	         });

	         
	     }).on('error', function(e){
	           console.log("Got an error: ", e);
	     });

	     // http.get(url, function (res) {
	     //     var json = '';
	     //     res.on('data', function (chunk) {
	     //         json += chunk;
	     //     });
	     //     res.on('end', function () {
	     //         if (res.statusCode === 200) {
	     //             try {
	     //                 var data = JSON.parse(json);
	     //                 // data is available here:
	     //                 console.log(data);
	     //             } catch (e) {
	     //                 console.log('Error parsing JSON!');
	     //             }
	     //         } else {
	     //             console.log('Status:', res.statusCode);
	     //         }
	     //     });
	     // }).on('error', function (err) {
	     //       console.log('Error:', err);
	     // });
 response.render('home',{name:'Aryan'});
});
module.exports = router;

var express = require("express");
var https = require("https");
var http = require('http');
var app = express();
var request = require("request");
var path =  require('path')
var MongoClient = require('mongodb').MongoClient;



app.use(express.static(path.join(__dirname,"./dist")));

MongoClient.connect('mongodb://localhost/gituserdb', function(err, dbConnection){
    db = dbConnection;
   
    var server = app.listen(7777, function() {
        var port = server.address().port;
        console.log("started server at port", port);
    });
});

app.get('/git', function(req, res) {
    var filter ={};
      db.collection("gituser").find(filter).toArray(function(err, data){
       res.json(data);
   });
});

/////////////////////////////////////////////////////////////////////////





// var body ;
// request({
//     url:'https://api.github.com/repos/suraj094/mm/issues',
//      headers: { 'user-agent': 'suraj094' },
//                 json: true
//             }, function(error, response, body) {
//                 if(!error && response.statusCode === 200){
//                     for(var issueIndex = 0; issueIndex < body.length; issueIndex++) {
//                         if(!body[issueIndex].pull_request) {
//                             db.collection('gituser').insert({
//                                 number: body[issueIndex].number,
//                                 title: body[issueIndex].title,
//                                 state: body[issueIndex].state,
//                                 creator: body[issueIndex].user.login,
//                                 assignee: body[issueIndex].assignee ? body[issueIndex].assignee.login : ''
//                             });
                           
//                         }
//                     }
                    
//                 }
               
// })


// app.get('/git', function(req, res) {
//         var issueData = [];
//         var getData = function(pageCounter) {
//             request({
//                 url: 'https://api.github.com/repos/suraj094/mm/issues',
//                 headers: { 'user-agent': 'suraj094' },
//                 json: true
//             }, function(error, response, body) {
//                 if(!error && response.statusCode === 200) {
//                     for(var issueIndex = 0; issueIndex < body.length; issueIndex++) {
//                         if(!body[issueIndex].pull_request) {
//                             issueData.push({
//                                 number: body[issueIndex].number,
//                                 title: body[issueIndex].title,
//                                 state: body[issueIndex].state,
//                                 creator: body[issueIndex].user.login,
//                                 assignee: body[issueIndex].assignee ? body[issueIndex].assignee.login : ''
//                             });
//                         }
//                     }

//                     if(body.length < 30) {
//                         res.send(issueData);
                        
//                     } 
//                 }
//             });
//         };
//         getData(1);
//     });



  

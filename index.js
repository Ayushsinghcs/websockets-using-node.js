var express = require('express');
var socket = require('socket.io');
var request = require('request');
var fs = require("fs");
var items = require('./data.json');

var app = express();

var server = app.listen(3000);
app.use(express.static('public'));


var io = socket(server);
io.on('connection', (socket) => {

    socket.on('chat', function(data){

              let res = data.split(",");
               for(let i = 0; i<res.length;i++)
                  {
                     res[i] = res[i].slice(1,12);
                      fs.readFile('data.json', (err, data) =>
                      {
                            if (err) throw err;
                            let client = JSON.parse(data);
                            console.log(client[res[i]]);


                        io.to(socket.id).emit('chat', client[res[i]]);
                     });
                   }

    });

});

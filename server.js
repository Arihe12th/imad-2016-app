var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article1={
    title:'arihent|article1',
    head:'article1',
    date:11/06/2016,
    content:` <p>
              this is article one which is about html response. this is article one which is about html response. this is article one which is about html response this is article one which is about html response this is article one which is about html response
               </p>
               <p>
               in server file instead for text response provide html response.
               </p>
                <p>
               so to provide html response ,get the file name form user,use sendfile function to send the html response.by this you can provide html respone. so to provide html response ,get the file name form u ,usesendfilefunct.by this you can provide html respone.
               </p>`
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1',function(req, res){
  res.sendFile(path.join(__dirname, '', 'article1.html'));
});
app.get('/article2',function(req, res){
    res.send('article two we served soon');
});
app.get('/article3',function(req, res){
    res.send('article three we served soon');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

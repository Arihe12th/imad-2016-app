var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
article1:{
    title:'arihent|article1',
    head:'article1',
    date:'11/06/2016',
    content:` <p>
              this is article one which is about html response. this is article one which is about html response. this is article one which is about html response this is article one which is about html response this is article one which is about html response
               </p>
               <p>
               in server file instead for text response provide html response.
               </p>
                <p>
               so to provide html response ,get the file name form user,use sendfile function to send the html response.by this you can provide html respone. so to provide html response ,get the file name form u ,usesendfilefunct.by this you can provide html respone.
               </p>`},
               article2:{ title:'arihent|article2',
    head:'article2',
    date:'11/06/2016',
    content:` <p>
             this is article2
               </p>`},
               article3:{ title:'arihent|article2',
    head:'article2',
    date:'11/06/2016',
    content:` <p>
             this is article2
               </p>`},
}
               
               function createTemplate(data){
               var title=data.title;
               var head=data.head;
               var date=data.date;
               var content=data.content;
               
               
               var htmltemplate=
`<html>
    <head>
        <title>
          ${title}
         </title>
        <meta name="viewport" content="width=device-width,intial-scale=1-0">
        <link rel="stylesheet" href="ui/style.css">
    </head>
    <body>
        <div class="container">
    <div>
        <a href="/">Home</a>
        <hr>
    </div>
    <div>
        <h1>
             ${head}
        </h1>
       <h2>
           ${date}
        </h2>
        <p>
            ${content}
        </p>
        
        
    </div>
    </div>
</body>
</html>`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req, res){
    var articlename=req.parama.articlename;
  res.send(createTemplate(articles[articlename]));
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

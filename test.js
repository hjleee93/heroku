var path = require("path");
var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8901;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.send("서버서버");
    console.log("서버 실행~!")
});

// setup another route to listen on /about
app.get("/api", function(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
  });
  
app.post("/api",(req, res) => {
    console.log(res)
    res.send("api");
  });
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
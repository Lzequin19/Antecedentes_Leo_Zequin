// Servidor estático simple para previsualizar index.html
const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8099;
const types = {".html":"text/html",".jpg":"image/jpeg",".png":"image/png",".css":"text/css",".js":"text/javascript"};
http.createServer((req,res)=>{
  let f = decodeURIComponent(req.url.split("?")[0]);
  if(f==="/") f="/index.html";
  const fp = path.join(__dirname, f);
  fs.readFile(fp,(e,data)=>{
    if(e){res.writeHead(404);res.end("404");return;}
    res.writeHead(200,{"Content-Type":types[path.extname(fp)]||"application/octet-stream"});
    res.end(data);
  });
}).listen(PORT,()=>console.log("Preview en http://localhost:"+PORT));

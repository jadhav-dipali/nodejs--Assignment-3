let http= require("http");
let fs = require("fs")


fs.writeFile("index.html" , "<h1>Hello Wrold</h1><p>this is dipali jadhav</p>" ,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("sucess")
    }
})

let server = http.createServer((req, res)=>{
   fs.readFile("index.html" ,(err, data)=>{
       res.write(data);
       res.end(); 
   } ) 
})


server.listen(5000 , ()=>{
    console.log("listening the server 5000")
})




const http=require('http');

const port=5000;

const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');

    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!')
});

server.listen(port,()=>{
    console.log(`Server is running on:http//localhost:${port}/`);
})
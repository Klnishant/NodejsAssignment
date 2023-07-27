const { error } = require('console');
const fs=require('fs');

const advantagesOfNodeJS = `
Advantages of Node.js:
1. Non-blocking I/O: Node.js uses an event-driven, non-blocking I/O model, which allows it to handle multiple concurrent operations efficiently.

2. Fast and Scalable: Node.js is built on Chrome's V8 JavaScript engine, which provides high performance. It is also designed to scale well for real-time applications with a large number of concurrent connections.

3. Single-threaded with Event Loop: Node.js operates on a single-threaded event loop, enabling it to handle many concurrent requests without the overhead of managing threads.

4. Large and Active Community: Node.js has a large and active community, providing extensive libraries and modules that can be easily integrated into applications.

5. Cross-platform: Node.js is cross-platform and can run on various operating systems, making it versatile for developing applications that can be deployed on different platforms.

6. Easy to Learn and Use: As it uses JavaScript, which is a widely known language, developers familiar with JavaScript can quickly learn and use Node.js for server-side development.

7. JSON Everywhere: JSON (JavaScript Object Notation) is a standard data format in Node.js, making it easier to work with data across various parts of an application.

8. NPM - Node Package Manager: Node.js comes with NPM, a powerful package manager that simplifies dependency management and allows easy sharing and reuse of code.

`;

fs.appendFile("nodejs_architecture.txt",advantagesOfNodeJS,(error)=>{
    if(error){
        console.log("Error in Appending the file",error);
    }
    else{
        console.log("Succesfully appending the file");
    }
});

fs.readFile("nodejs_architecture.txt",'utf8',(error,data)=>{
    if(error){
        console.log("Error in reading the file",error);
    }
    else{
        console.log("Reading Completed the data is:",data);
    }
})
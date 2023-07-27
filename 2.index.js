// Sample content for index.js
const nodeArchitectureInfo = `
Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.
It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js uses an event loop to handle asynchronous operations, allowing it to scale well for real-time applications with high concurrency.
`;

// Exporting the nodeArchitectureInfo variable to make it accessible in other files if needed.
module.exports = nodeArchitectureInfo;

const fs=require('fs');

fs.writeFile('nodejs_architecture.txt',nodeArchitectureInfo,error =>{
    if(error){
        console.log("Error writing to file:",error);
    }
    else{
        console.log('File"nodejs_architecture.txt" created succesfully!');
    }
})
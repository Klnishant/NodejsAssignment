const { error } = require('console');
const fs=require('fs');

fs.readFile("nodejs_architecture.txt",'utf8',(error,data)=>{
    if(error){
        console.log("Error reading file",error);
    }
    else{
        console.log('Content of"nodejs_architecture.txt":');
        console.log(data);
    }
});
const fs=require('fs');

fs.unlink("nodejs_architecture.txt",(error)=>{
    if(error){
        console.log("Error in deletion of file",error);
    }
    else{
        console.log("File deleted succesfully");
    }
})
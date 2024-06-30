const fs = require('fs');

readJsonFile = (filePath) =>{
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
         console.log('err-',err)
        }
        console.log(JSON.parse(data))
     }
     )
}
readJsonFile('./temperature.json')
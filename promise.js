//Promise

/*
1. Write a function to download data from a url
2. Write a function to write the downloaded data to a file and return the file name.
3. Write a function to upload the new file to the new url.
*/

function downloadData(url){
    return new Promise(function(resolve,reject){
        console.log('Started download from url ',url);
        setTimeout(() => {
            const data = "dummy data"
            console.log('Downloading complete')
            resolve(data)
        }, 3000);
    })
}

function writeDataToFile(data){
    return new Promise(function(resolve,reject){
        const fileName = 'data.txt';
        console.log('Started writing to file',data);
        setTimeout(()=> {
          console.log('Data written successfully');
          resolve(fileName);
        },2000)
    })
}

function uploadFileToUrl(filename){
    return new Promise(function(resolve,reject){
        const url = "www.promise.docs"
        console.log('uploading file ',filename)
        setTimeout(()=>{
          console.log('uploading complete');
          resolve(url);
        },1000)
    })
}

let downloadPromise = downloadData("www.google.com");
downloadPromise
.then(function processDownload(value){
    console.log('Download Promise completed');
    return value
})
.then(function processWriting(value){
    console.log('Inside process writing', value);
    return writeDataToFile(value);
})
.then(function processUpload(value){
    console.log('Inside process upload',value);
    return uploadFileToUrl(value);
})
const fs = require("fs");

fs.readFile("./docs/blog1.txt", (err, data) => {
    if(err){
        console.log(err);
    }
    //console.log(data)
    console.log(data.toString());
});

fs.writeFile("./docs/blog2.txt", "Hello, there!!", () => {
    console.log("file was written");
});

if(!fs.existsSync("./assets")){
    fs.mkdir("./assets", (err, data) => {
        if(err){
            console.log(err);
        }
        console.log("folder created");
    });
} else {
    fs.rmdir("./assets", (err, data) => {
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    });
}

if(fs.existsSync("./docs/deleteMe.txt")){
    fs.unlink("./docs/deleteMe.txt", (err, data) => {
        if(err){
            console.log(err);
        }
        console.log("file deleted");
    });
} else { 
    fs.writeFile("./docs/deleteMe.txt", "I am supposed to live in the bin.", () => {
        console.log("file created");
    });
}

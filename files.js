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

// Used this code to write blog3.txt
// const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
// for(var i = 0; i < 1000; i++){
//     fs.appendFile("./docs/blog3.txt", content, () => {
//     });
// }

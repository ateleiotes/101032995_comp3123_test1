const fs = require("fs");
const path = require("path");

const directory = "logs";
const dir = "/logs";

// Read and remove log file
const readFile = () => {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const f of files) {
            console.log('deleting files... ' + f);
            fs.unlink(path.join(directory, f), (err) => {
                if (err) throw err;
            });
        }
    });
};

// Create directory and file
const createDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(process.cwd() + dir, {
            recursive: true,
        });
    }
};

// Create file
const writeFile = () => {
    var files = "";
    //   var count = 0;
    for (let i = 0; i < 10; i++) {
        files[i] = fs.writeFileSync(`./logs/Log${i}.txt`, "Log File Start");
        console.log(`creating files ... Log${i}.txt`);
    }
}

readFile();
createDir(dir);
writeFile();
let getFiles = (folder) => {
    var fs = require('fs');
    var files = new Array();

    fs.readdirSync(folder).forEach((file) => {
        files.push(file);
    });

    return files;
};

module.exports = getFiles;
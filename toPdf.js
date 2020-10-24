const imagesToPdf = require("images-to-pdf");
const config = require("./config.json");

const files = [];
const fileNameLen = config.https.fileIdlength + config.https.filetype.length + 1;
for(var i = 0; i<=Math.floor((config.https.fileIdEnd - config.https.fileIdStart)/2); i++ ){
    const filename = `${i}.${config.https.filetype}`.padStart(fileNameLen,"0");
    files.push(`join/${filename}`);
}


imagesToPdf(files, config.outputFile);
const combineImage = require('combine-image');
const config = require("./config.json");

let count = 0;
for(var i = config.https.fileIdStart; i<=config.https.fileIdEnd; i=i+2){
    const fileNameLen = config.https.fileIdlength + config.https.filetype.length + 1;
    const file1 = `${i}.${config.https.filetype}`.padStart(fileNameLen, "0");
    const file2 = `${i+1}.${config.https.filetype}`.padStart(fileNameLen, "0");
    const outFile = `${count}.${config.https.filetype}`.padStart(fileNameLen, "0");
    count++;

    combineImage([`https/${file1}`, `https/${file2}`])
  .then((img) => {
    // Save image as file
    img.quality(config.join.outputQuality).write(`join/${outFile}`, () => console.log(`Joined ${outFile}`));
  });

}

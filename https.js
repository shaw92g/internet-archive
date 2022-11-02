const https = require('https');
const fs = require('fs');
const urlTemplate = require('url-template');
const config = require("./config.json");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  

const options = (fileId) => {
  const configCopy = JSON.parse(JSON.stringify(config.https.options));
  configCopy.path = urlTemplate.parse(configCopy.path).expand({
    fileId
  });
  // console.log(configCopy.path);
  return configCopy;
}

const callback = (fileName) => {
  return (res) => {
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    var imagedata = '';
    res.setEncoding('binary');

    res.on('data', function (chunk) {
      imagedata += chunk
    });

    res.on('end', () => {
      // process.stdout.write(d);
      fs.writeFile(`https/${fileName}`, imagedata, 'binary', (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log(`File saved: ${fileName}`);
      });
    });
  }
};

for (var i = config.https.fileIdStart; i <= config.https.fileIdEnd; i++) {
  const fileId = `${i}`.padStart(config.https.fileIdlength, "0")
  const fileName = `${fileId}.${config.https.filetype}`;
  
  if(i%100 == 0) (async function () {
    await sleep(30000);
  })();

  https.get(options(fileId), callback(fileName))
    .on('error', (e) => {
      console.error(e);
    });
}
const {VAST} = require('vastacular');
const util = require('util');
const fs = require('fs');
const path = require('path');

const output = path.resolve('./vast-mockup/');

const originalVASTPath = path.resolve(__dirname, 'vast.xml');

if (!fs.existsSync(path.join(output, 'vast-schema.js'))) {
  (function XMLToJSON() {
    fs.readFile(originalVASTPath, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        let temp = VAST.pojoFromXML(data.toString());
        fs.writeFile(path.resolve(output, 'vast-schema.js'),
          util.inspect(temp, {
            showHidden: false,
            depth: null
          }), (reason) => console.log(reason));
        }
    });
  })();
} else {
  const VASTSchema = require(path.join(output, './vast-schema.js'));
  const mockedVast = (new VAST(VASTSchema)).toXML();
  fs.writeFile(path.join(output, 'mocked-vast.xml'), mockedVast, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Write VAST to XML success!!!')
    }
  });
}



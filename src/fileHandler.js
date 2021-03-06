const fs = require('fs');
const chalk = require('chalk');

const readline = require('readline');
const TestCase = require('./TestCase');

const tests = [];
let firstLine = true;
let testCount = 0;
let currentTest = null;
let lines = 0;
let init = false;

const rootPath = process.cwd();

const processFile = fileName => {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(rootPath + '/' + fileName);
    fileStream.on('error', error => {
      reject(`Error to process the file ${fileName} => ${error}`);
    });
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    rl.on('line', line => {
      parseLine(line.trim());
    })
      .on('error', error => {
        reject(`Error to read the line from ${fileName} => ${error}`);
      })
      .on('close', () => {
        resolve(tests);
      });
  });
};

const isMatrix = line => {
  return line.length === 2;
};

const isPosition = line => {
  return line.length === 4;
};

const buildMatrix = lineData => {
  let row = [];

  for (let col = 0; col < lineData.length; col++) {
    let val = lineData[col];
    row.push(parseInt(val));
  }
  currentTest.addData(row);
};

const parseLine = line => {
  // split the string into an array
  let lineData = line.split(' ');

  if (firstLine) {
    testCount = parseInt(line);
    firstLine = false;
  }

  //lines means that the next x lines are related to build the grid
  if (lines > 0 && init) {
    buildMatrix(lineData);
    lines--;
  } else if (isMatrix(lineData)) {
    lines = parseInt(lineData[0]);
    init = false;
    tests.push(new TestCase(tests.length + 1 || 1));
    currentTest = tests[tests.length - 1];
  } else if (isPosition(lineData)) {
    init = true;
    currentTest.setStart([parseInt(lineData[0]), parseInt(lineData[1])]);
    currentTest.setEnd([parseInt(lineData[2]), parseInt(lineData[3])]);
  }
};

const writeFile = data => {
  fs.writeFile('output.dat', data.join('\n'), 'utf8', err => {
    if (err) throw err;
    console.log(chalk.cyan('The file output.dat has been saved!'));
  });
};

module.exports = {
  processFile,
  writeFile,
  tests
};

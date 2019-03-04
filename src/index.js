const chalk = require('chalk');

const fileHandler = require('./fileHandler');
const driveService = require('./driveService');

async function execute() {
  console.log(chalk.magenta('Processing File...'));
  const testCases = await fileHandler.processFile('input-large.in');
  console.log(chalk.magenta('File Processed!!!'));
  const results = [];
  for (testCase of testCases) {
    const result = driveService.findBestPath(testCase);
    const resultString = `Case #${testCase.getNumber()}: ${result}`;
    results.push(resultString);
    console.log(chalk.green(resultString));
  }
  fileHandler.writeFile(results);
}

execute();

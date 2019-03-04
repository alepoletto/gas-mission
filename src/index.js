const chalk = require('chalk');

const fileHandler = require('./fileHandler');
const driveService = require('./driveService');

const log = console.log;

async function execute() {
  log(chalk.magenta('Processing File...'));
  try {
    const testCases = await fileHandler.processFile('input-large.in');
    log(chalk.magenta('File Processed!!!'));
    const results = [];
    for (testCase of testCases) {
      const result = driveService.findBestPath(testCase);
      const resultString = `Case #${testCase.getNumber()}: ${result}`;
      results.push(resultString);
      log(chalk.green(resultString));
    }
    fileHandler.writeFile(results);
  } catch (error) {
    log(chalk.red(error));
  }
}

execute();

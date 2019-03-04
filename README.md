# Gas Mission

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Run

In the project directory, install the node modules and start the application:

```shell
npm install
npm start
```

### Test

In the project directory:

```shell
npm test
```

### The stack

- [x] NodeJs

### Project Structure

```sh
./                          # Configuration and external files
./src                       # Application Code
  ⌙ driveService.js         # implementation of the solution to find the best path (less steps and more gas)
  ⌙ fileHandler.js          # handle the read/write of the input/output files
  ⌙ index.js                # Start Point
  ⌙ TestCase.js             # Class that handles the testCases loaded from the file
./test/                     # Unit tests using jest
   ⌙ driveService.spec.js   # Tests related to the solution algorithm
   ⌙ fileHandler.spec.js    # Tests related to the file load
```

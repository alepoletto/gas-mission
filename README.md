# Gas Mission

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Run

#### using a installed nodejs

In the project directory, install the node modules and start the application:

```shell
npm install
npm start
```

#### using a sh script

Anywhere in your terminal execute:

```shell
## this will clone the repository, install node and run the application
curl https://raw.githubusercontent.com/alepoletto/gas-mission/master/scripts/standalone-gasmission.sh | sh
```

you also can manually download [standalone-gasmission.sh](https://raw.githubusercontent.com/alepoletto/gas-mission/master/scripts/standalone-gasmission.sh). and execute in the same folder:

```shell
sh standalone-gasmission.sh
```

If you already cloned the repository you can go to the project folder and execute:

```shell
sh scripts/gasmission.sh
```

#### using docker

anywhere in your terminal run:

```shell
docker run  alepoletto/gasmission
```

this will download the image from dockerhub.

If you want to build your own image, execute the follow in the project directory:

```shell
docker build --tag=tagname . #change tagname for the name that you want
docker run tagname
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
./                           # Configuration and external files
./sripts                     # scripts to run without any installation
  ⌙ gasmission.sh            # sh script that install node and npm and execute the project
  ⌙ standalone-gasmission.sh # sh script that clone, install and execute the project
./src                        # Application Code
  ⌙ driveService.js          # implementation of the solution to find the best path
  ⌙ fileHandler.js           # handle the read/write of the input/output files
  ⌙ index.js                 # Start Point
  ⌙ TestCase.js              # Class that handles the testCases loaded from the file
./test/                      # Unit tests using jest
   ⌙ driveService.spec.js    # Tests related to the solution algorithm
   ⌙ fileHandler.spec.js     # Tests related to the file load
```

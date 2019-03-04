#!/usr/bin/env bash
git clone https://github.com/alepoletto/gas-mission
cd gas-mission
curl -L https://git.io/n-install | bash -s -- -y
. ~/.bash_profile
npm i
npm start

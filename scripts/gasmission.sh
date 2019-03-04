#!/usr/bin/env bash
curl -L https://git.io/n-install | bash -s -- -y
. ~/.bash_profile
npm i
npm start

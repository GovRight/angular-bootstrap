#!/usr/bin/env bash

# npm sets cwd to repo root

echo "Installing setup dependencies, please wait..."
npm install > /dev/null
echo

# Generates package.json (and some other files) depending on user input
node ./install/setup.js
cp ./install/npm-shrinkwrap.json ./npm-shrinkwrap.json

rm -rf ./node_modules

npm install
bower install

if [ -d ./test ]; then
  echo
  echo
  echo "Setting up testing framework..."
  echo
  cp -Rf ./install/test/* ./test/
  # These specific versions may look stale and kind of obsolete but at least they work well together
  npm install chai chai-as-promised karma@0.13.19 karma-angular-filesort@1.0.1 karma-chai@0.1.0 karma-json-fixtures-preprocessor@0.0.6 karma-mocha@0.2.1 karma-mocha-reporter@1.1.5 karma-phantomjs-launcher@1.0.0 karma-spec-reporter@0.0.23 karma-wiredep@1.0.1 mocha@2.4.5 phantomjs-prebuilt --save-dev
fi

rm -rf ./install

echo
echo 'All done, happy coding!'

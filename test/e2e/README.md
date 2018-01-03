# Testing with 2e2

### End to End testing of React applications with Nightwatch 

#### Installation
First thing you need to do is to install Node.js if you don’t yet have it. You can find the installation instructions on the Node.js project page. Once you have node installed, you can take advantage of it’s package manager called `npm`.

You need to install nightwatch with global parameter like this:
 ```
  npm install [-g] nightwatch
 ```
 Add -g option to make nightwatch runner available globally in your system.


The package.json should look more or less like this:

```javascript
{
  "name": "todo-e2e-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "e2e-setup": "selenium-standalone install",
    "test": "nightwatch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "6.11.4",
    "babel-core": "6.11.4",
    "babel-loader": "6.2.4",
    "babel-plugin-add-module-exports": "0.2.1",
    "babel-preset-es2015": "6.9.0",
    "nightwatch": "0.9.9",
    "selenium-standalone": "5.9.0"
  }
}

```
Run in your 2e2 directory `npm install` to install all dependencies

Now running `npm run e2e-setup` will download the latest version of selenium server and chromedriver (which will be needed for running tests in Chrome browser)


##### Running the test

That's it! The only thing left to do is to run the test. In the terminal, go to your projects' where the nightwatch.json file is in, and run this command:

> Rembember to use npm run e2e-setup before starting tests. You only need to do it once.

`npm test`

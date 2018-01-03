# Testing with 2e2

### End to End testing of React applications with Nightwatch 

#### Installation
First thing you need to do is to install Node.js if you don’t yet have it. You can find the installation instructions on the Node.js project page. Once you have node installed, you can take advantage of it’s package manager called `npm`.

Go to your terminal, create an empty repository and cd into it. Next, type `npm init`. You can skip the steps of initialising `package.json` file by pressing enter several times and typing ‘yes’ at the end.

Once you have a package.json file, while in the same directory, type `npm install nightwatch --save-dev`. This will install the latest version of nightwatch into the `node_modules` directory inside your project and save it in your `package.json` file as a development dependency.

Next, in order to be able to run the tests, we need to download the Selenium standalone server. We could do this manually and take it from the projects’ website but lets use npm to handle this:

- Type `npm install selenium-standalone --save-dev`
- Modify your package.json file by adding a `scripts` property with `"e2e-setup": "selenium-standalone install"` and  `"test": "nightwatch"` lines.

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

Now running `npm run e2e-setup` will download the latest version of selenium server and chromedriver (which will be needed for running tests in Chrome browser)

#### Configuration

Nightwatch relies on `nightwatch.json` as the configuration file for the test runs. It should be placed in projects root directory. It specifies various configuration settings like test environments (browsers, resolutions), test file paths and selenium-specific settings. This is how the configuration file can look like:

```javascript
{
  "src_folders": ["tests"],
  "output_folder": "reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "page_objects_path": "pages",
  "globals_path": "globals",

  "selenium": {
    "start_process": true,
    "server_path": "./node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar",
    "log_path": "./reports",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver"
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "https://dashboard.syncano.io",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
```

I'll go through the important parts of the `nightwatch.json` file:

* `src_folders` - An array of folders (excluding subfolders) where the tests are located.
* `output_folder` - The location where the JUnit XML report files will be saved.
* `page_objects_path` - Location(s) where page object files will be loaded from.
* `globals_path` - Location of an external globals module which will be loaded and made available to the test as a property globals on the main client instance. 
* `selenium` - An object containing Selenium Server related configuration options. See below for details.


##### Test sample for creating todo note
In the root of your project create a `tests` directory. Create a testLogin.js file and paste there this code:

```javascript
export default {
  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();
    const instancesPage = client.page.instancesPage();

    loginPage
      .navigate()
      .login(process.env.EMAIL, process.env.PASSWORD);

    instancesPage.expect.element('@instancesListDescription').text.to.contain('Your first instance.');

    client.end();
  }
};
```

T

##### Running the test

That's it! The only thing left to do is to run the test. In the terminal, go to your projects' where the nightwatch.json file is in, and run this command:

> Rembember to use npm run e2e-setup before starting tests. You only need to do it once.

`npm test`




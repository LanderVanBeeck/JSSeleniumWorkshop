var webdriver = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
require('geckodriver');

var options = firefox.Options;
options.apply

var driver = new webdriver.Builder();
forBrowser('firefox').
setFirefoxOptions(options).
build();
driver.get('https://demoqa.com/automation-practice-form');
var webdriver = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
var options = firefox.Options;

var driver = new webdriver.Builder().
forBrowser('firefox').
setFirefoxOptions(options).
build();
driver.get('https://demoqa.com/automation-practice-form');
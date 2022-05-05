var webdriver = require('selenium-webdriver');

var firefox = require('selenium-webdriver/firefox');

require('geckodriver')

var options = new firefox.Options().setBinary('C:\\Program Files\\Mozilla Firefox\\firefox.exe')



async function test() {

    var driver = new webdriver.Builder().

    forBrowser('firefox').

    setFirefoxOptions(options).

    build();

    driver.get('https://demoqa.com/automation-practice-form');

}



test()
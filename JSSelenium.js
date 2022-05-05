const { By } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');

var firefox = require('selenium-webdriver/firefox');
const by = require('selenium-webdriver/lib/by');

require('geckodriver')

var options = new firefox.Options().setBinary('C:\\Program Files\\Mozilla Firefox\\firefox.exe')



async function test() {
    var driver = new webdriver.Builder().
    forBrowser('firefox').
    setFirefoxOptions(options).
    build();
    driver.get('https://demoqa.com/automation-practice-form');

    driver.findElement(By.id('firstName')).sendKeys("Lander");
    driver.findElement(By.id('lastName')).sendKeys('Van Beeck');
    driver.findElement(By.id('userEmail')).sendKeys('landervanbeeck@hotmail.com');
    driver.findElement(By.id('userNumber')).sendKeys('0492163907');
    driver.findElement(By.className('custom-control custom-radio custom-control-inline')).click();
    driver.findElement(By.className('custom-control custom-checkbox custom-control-inline')).click();
}

test();
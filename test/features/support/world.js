import 'chromedriver'
import webdriver from 'selenium-webdriver'
import chai from 'chai'

const driver = new webdriver.Builder().forBrowser('chrome').build();

global.expect = chai.expect;

class World {
  constructor() {
    this.driver = driver;
  }
}

export default function() {
  this.World = World;

  this.registerHandler('AfterFeatures', async function() {
    await driver.quit();
  });

};

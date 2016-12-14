import 'chromedriver'
import webdriver from 'selenium-webdriver'
import chai from 'chai'
import chaiWebdriver from 'chai-webdriver-promised'

const driver = new webdriver.Builder().forBrowser('chrome').build();
chai.use(chaiWebdriver(driver));
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

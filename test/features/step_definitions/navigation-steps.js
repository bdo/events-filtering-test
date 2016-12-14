const BASE_URL = "http://localhost:8080";

export default function () {

  this.Given(/^I go to the home page$/, async function () {
    await this.driver.get(BASE_URL);
  });

};

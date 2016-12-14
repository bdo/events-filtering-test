export default function () {

  this.Then(/^I should see '(.*)'$/, async function (text) {
    const bodyText = await this.driver.findElement({css: 'body'}).getText();
    expect(bodyText).to.contain(text);
  });

};

export default function () {

  this.Then(/^I should see '(.*)'$/, async function (text) {
    expect('body').dom.to.have.text(text)
  });

};

require('../spec.helper');

context('User can make a choice between Rock, Paper or Scissor and gets the Game results', () => {
  // Initialize a browser and visit the server's root path
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  // Reload before each test 
  beforeEach(async () => {
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after(() => {
    browser.close();
  });

  // Example test
  it('renders the Rock button', async () => {
    let button = await browser.getContent("[Id='r']")
    expect(button).to.eql('Rock');
  });

  it('clicking on the "Rock" button', async () => {
    await browser.clickOnButton("button[class='Rock]")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('...');
  })
});
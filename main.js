const puppeteer = require('puppeteer');


(async() => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  // await page.setRequestInterception(true);
  await page.goto('https://twitter.com/login');
  await page.waitForNavigation({ waitUntil: "domcontentloaded" }).catch(e => {
    console.log("Error: " + e);
  });
  // await page.waitFor(2000).catch(e => {
  //   console.log("Error: " + e);
  // });
  // await page.$eval('.r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-1inuy60 r-utggzx r-vmopo1 r-1w50u8q r-1swcuj1 r-1dz5y72 r-1ttztb7 r-13qz1uu', e => e.value = "user_name")
  // await page.$eval('session[password]', e => e.value = "password");

  await page
    .click('name="session[username_or_email]"')
    .then(() => console.log("clicked it username_or_email"))
    .catch(e => {
      console.log("Error: " + e);
  });

  await page.keyboard.type('hellloooooo')
    .then(() => console.log("typed username"))
    .catch(e => {
      console.log("Error: " + e);
  });

  await page.waitFor(2000);

  await page
    .click('name="session[password]"')
    .then(() => console.log("clicked it password"))
    .catch(e => {
      console.log("Error: " + e);
  });

  await page.waitFor(1000);

  await page.keyboard.type('swag')
    .then(() => console.log("typed password"))
    .catch(e => {
      console.log("Error: " + e);
  });

// await page.click('.submit.EdgeButton.EdgeButton--primary.EdgeButtom--medium')
})();

// await page.type('#twistercool', 'r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-1inuy60 r-utggzx r-vmopo1 r-1w50u8q r-1swcuj1 r-1dz5y72 r-1ttztb7 r-13qz1uu');


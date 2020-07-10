const puppeteer = require('puppeteer');

const username = 'eddy-Malou'; //do not upload to github!!!
const email = 'jeanmartin99@gmail.com';
const password = 'bonjour123'; //do not upload to github!!!
const message = 'normalMessage';


const login_url = 'https://twitter.com/login';
const composeTweet_url = 'https://twitter.com/compose/tweet';
const home_url = 'https://twitter.com/home';
const signUp_url = 'https://twitter.com/i/flow/signup';

let browser = null;
let page = null;

(async() => {
  browser = await puppeteer.launch({
    headless: false,
  });
  

  const pages = await browser.pages();

  page = pages[0];

  // await login();

  // await sendTweet('this is the tweet I'm sending');
  
  await newAccount(username, email, 5, 13, 2003);

})();


async function login(){
  await page.goto(login_url);

  await page
    .waitFor('input[name="session[username_or_email]"]');

  await page.type('form[class="r-13qz1uu"] input[name="session[username_or_email]"]', 
    username, {delay:26});
    

  await page.waitFor(483);

  await page
    .waitFor('input[name="session[password]"]');

  await page.type('form[class="r-13qz1uu"] input[name="session[password]"]', 
    password, {delay:32});

  await page.waitFor(631);

  await page
    .click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-vlx1xi r-zg41ew r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr"]');

}

async function sendTweet(inputMessage){
  await page.waitFor('*');

  await page.goto(composeTweet_url);

  const sendingMessage = inputMessage || message;
  
  await page.keyboard.type(sendingMessage, {delay:34});

  await page.waitFor(500);

  await page
    .click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1n0xq6e r-1vuscfd r-1dhvaqw r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr"]');

}

async function newAccount(name, email, month, day, year){
  await page.goto(signUp_url);

  await page
    .waitFor('input[class="r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-1inuy60 r-utggzx r-vmopo1 r-1w50u8q r-1lrr6ok r-1dz5y72 r-1ttztb7 r-13qz1uu"]');

  await page
    .type('input[class="r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-1inuy60 r-utggzx r-vmopo1 r-1w50u8q r-1lrr6ok r-1dz5y72 r-1ttztb7 r-13qz1uu"]',
      name, {delay:64});

  await page
    .click('div[class="css-18t94o4 css-901oao r-1n1174f r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-19h5ruw r-bcqeeo r-qvutc0"]');

  await page.waitFor(350);

  await page.type('input[name="email"]', email, {delay:57});

  await page.waitFor(356);

  await page.select('select[aria-label="Month"]', `${month}`);

  await page.waitFor(239);

  await page.select('select[aria-label="Day"]', `${day}`);

  await page.waitFor(432);

  await page.select('select[aria-label="Year"]', `${year}`);

  await page.waitFor(670);

  await page
    .click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1vsu8ta r-aj3cln r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr"]');

  await page.waitFor(1500);

  await page
    .click('div[role="button"]');

}

